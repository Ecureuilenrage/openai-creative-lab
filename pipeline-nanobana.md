# Nanobana bul-editing

## prompts 
### Extraction générique (tout type d'image)
Use case universel : quand aucun cas ci-dessus ne correspond exactement, ou pour une analyse complète avant de décider quoi modifier.

Analyze this image and decompose ALL visual information into a comprehensive, structured JSON format. For each identifiable element, extract: name, color(s), material/texture, position, scale, and any notable visual properties. Also include top-level keys for 'scene_type', 'overall_style', 'color_palette', 'lighting', and 'composition'. Output ONLY valid JSON and format the output as a copyable JSON code block using Markdown.

### Prompt de modification (à coller avec le JSON)
Modify this image based on the following JSON prompt:
Puis coller le JSON modifié en dessous.

## Pipeline de production via l'API Gemini (Python)
Automatiser le workflow complet : extraction JSON → modification → régénération d'image, le tout scriptable et intégrable dans n'importe quel pipeline.
```
Setup
pip install google-genai
import os, json, base64
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ['GOOGLE_API_KEY'])

# Modèles disponibles
MODEL_TEXT = "gemini-3.1-pro"                    # Extraction JSON (texte)
MODEL_IMAGE = "gemini-3.1-flash-image-preview"   # Nano Banana 2 (génération image)
# Alternatives :
# MODEL_IMAGE = "gemini-3-pro-image-preview"     # Nano Banana Pro
# MODEL_IMAGE = "gemini-2.5-flash-image"         # Nano Banana (legacy)
Étape 1 — Uploader l'image + extraire le JSON
EXTRACT_PROMPT = """Analyze this image and decompose ALL visual information into a comprehensive, structured JSON format. For each identifiable element, extract: name, color(s), material/texture, position, scale, and any notable visual properties. Also include top-level keys for 'scene_type', 'overall_style', 'color_palette', 'lighting', and 'composition'. Output ONLY valid JSON and format the output as a copyable JSON code block using Markdown."""

def extract_json(image_path, output_dir):
    """Upload une image, extrait le JSON descriptif, sauvegarde les deux dans output_dir."""
    os.makedirs(output_dir, exist_ok=True)

    # Upload via File API
    uploaded_file = client.files.upload(file=image_path)

    # Extraction JSON via Gemini Pro (texte)
    response = client.models.generate_content(
        model=MODEL_TEXT,
        contents=[uploaded_file, EXTRACT_PROMPT],
        config=types.GenerateContentConfig(
            response_mime_type="application/json"
        )
    )

    # Sauvegarder le JSON extrait
    json_data = json.loads(response.text)
    json_path = os.path.join(output_dir, "original.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(json_data, f, indent=2, ensure_ascii=False)

    print(f"Image uploadée : {uploaded_file.uri}")
    print(f"JSON sauvegardé : {json_path}")
    return uploaded_file, json_data
Étape 2 — Modifier le JSON (ou fusionner avec un autre)
def modify_json(json_data, modifications):
    """Applique des modifications au JSON extrait.

    modifications = dict de chemins clé→valeur à changer.
    Ex: {"elements[0].color": "light blue", "elements[0].material": "velvet"}
    """
    modified = json.loads(json.dumps(json_data))  # deep copy

    for key_path, new_value in modifications.items():
        # Navigation dans le JSON par chemin (ex: "elements[0].color")
        parts = key_path.replace("[", ".[").split(".")
        obj = modified
        for part in parts[:-1]:
            if part.startswith("[") and part.endswith("]"):
                obj = obj[int(part[1:-1])]
            else:
                obj = obj[part]
        last = parts[-1]
        if last.startswith("[") and last.endswith("]"):
            obj[int(last[1:-1])] = new_value
        else:
            obj[last] = new_value

    return modified


def merge_jsons_via_gemini(json_scene, json_new_object, swap_instruction):
    """Utilise Gemini pour fusionner deux JSON (swap d'objets).

    swap_instruction = ex: "Replace the armchair with the new chair"
    """
    prompt = f"""{swap_instruction}

Scene JSON:
```json
{json.dumps(json_scene, indent=2)}
New object JSON:

{json.dumps(json_new_object, indent=2)}
Output the merged JSON only. Output ONLY valid JSON."""

response = client.models.generate_content(
    model=MODEL_TEXT,
    contents=prompt,
    config=types.GenerateContentConfig(
        response_mime_type="application/json"
    )
)
return json.loads(response.text)

### Étape 3 — Régénérer l'image avec le JSON modifié

```python
def regenerate_image(image_path, modified_json, output_dir, filename="result.png"):
    """Envoie l'image originale + JSON modifié → récupère l'image éditée."""
    os.makedirs(output_dir, exist_ok=True)

    with open(image_path, "rb") as f:
        image_bytes = f.read()

    mime = "image/jpeg" if image_path.lower().endswith((".jpg", ".jpeg")) else "image/png"
    json_str = json.dumps(modified_json, indent=2)

    response = client.models.generate_content(
        model=MODEL_IMAGE,
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type=mime),
            f"Modify this image based on the following JSON prompt:\n```json\n{json_str}\n```"
        ],
        config=types.GenerateContentConfig(
            response_modalities=["image"]
        )
    )

    # Sauvegarder l'image générée
    for part in response.parts:
        if part.inline_data and part.inline_data.mime_type.startswith("image/"):
            result_path = os.path.join(output_dir, filename)
            with open(result_path, "wb") as f:
                f.write(part.inline_data.data)
            print(f"Image générée : {result_path}")
            return result_path

    print("Aucune image dans la réponse.")
    return None
Pipeline complète — exemple d'utilisation
# --- Config ---
IMAGE_PATH = "photos/salon.jpg"
OUTPUT_DIR = "output/salon_edit"

# 1. Extraire le JSON de l'image
uploaded_file, original_json = extract_json(IMAGE_PATH, OUTPUT_DIR)

# 2a. Modifier directement des valeurs
modified_json = modify_json(original_json, {
    "elements[0].color": "deep navy blue",
    "elements[0].material": "velvet",
    "elements[2].color": "matte white"
})

# Sauvegarder le JSON modifié
with open(os.path.join(OUTPUT_DIR, "modified.json"), "w", encoding="utf-8") as f:
    json.dump(modified_json, f, indent=2, ensure_ascii=False)

# 3. Régénérer l'image
regenerate_image(IMAGE_PATH, modified_json, OUTPUT_DIR, "result_color_swap.png")

# --- OU : swap d'objet avec fusion ---
_, new_object_json = extract_json("photos/new_chair.png", OUTPUT_DIR)
merged = merge_jsons_via_gemini(
    original_json, new_object_json,
    "Replace the armchair in the scene with this new chair, keeping exact position and scale"
)
regenerate_image(IMAGE_PATH, merged, OUTPUT_DIR, "result_object_swap.png")
Structure du dossier de sortie
output/salon_edit/
├── original.json          # JSON extrait de l'image source
├── modified.json          # JSON après modifications
├── result_color_swap.png  # Image régénérée (couleurs/matériaux)
└── result_object_swap.png # Image régénérée (swap d'objet)
Batch processing (plusieurs images)
import glob
```
images = glob.glob("photos "/*.jpg")
for img in images:
    name = os.path.splitext(os.path.basename(img))[0]
    out_dir = f"output/{name}"
    uploaded, data = extract_json(img, out_dir)
    modified = modify_json(data, {"lighting": "golden hour, warm tones"})
    regenerate_image(img, modified, out_dir)
Tips & bonnes pratiques
Toujours utiliser un nouveau chat pour la fusion de JSON (swap d'objets) afin d'éviter la confusion de contexte
Retirer les clés qui forcent des changements non voulus (ex: exterior_weather_visible si on ne veut pas toucher aux fenêtres)
Les prompts sont volontairement génériques (pas limités à l'interior design) — adapter les termes si besoin pour ton domaine
Fonctionne avec Nano Banana 2, Nano Banana Pro, et Nano Banana 2 Pro — les résultats s'améliorent avec les versions Pro
Si le quota Pro est épuisé, basculer sur AI Studio (même modèle Nano Banana)
```

## ABOUT.md copié du projet bulk-editing (nanobanana):

# ABOUT

## Ce projet, en une phrase

`bulk-editing` est une CLI Python qui automatise un workflow Gemini pour prendre une image source, y integrer exactement 2 references visuelles, produire une nouvelle image, puis nettoyer le watermark avec un outil externe Windows.

## Le principe general

Le projet repose sur 3 idees simples :

1. le travail est decrit par un fichier de job YAML ou JSON ;
2. chaque execution ecrit ses artefacts dans un dossier de run dedie ;
3. la reprise s'appuie sur les fichiers deja presents, sans base de donnees.

Autrement dit, le dossier de run est a la fois :

- le journal d'execution ;
- le cache intermediaire ;
- la source de verite pour reprendre un traitement interrompu.

## Ce que le pipeline attend en entree

Un job contient :

- un `job_id` ;
- une `source_image` ;
- exactement 2 references, chacune avec une image et un JSON ;
- une configuration de sortie ;
- une configuration de nettoyage de watermark ;
- les modeles Gemini a utiliser.

Points importants :

- Tous les chemins sont resolus relativement au dossier du fichier de job.
- `source_image` peut etre un fichier unique ou un dossier.
- Si `source_image` est un dossier, le projet traite chaque image separement avec les memes 2 references.
- Les extensions source supportees sont `.jpg`, `.jpeg`, `.png`, `.webp` et `.bmp`.

## Comment un job est execute

Le flux reel est le suivant :

```text
job.yaml
  -> chargement + normalisation des chemins
  -> validation des fichiers requis
  -> expansion eventuelle du dossier source en plusieurs images
  -> pour chaque image :
       creation d'un dossier de run
       1. extraction JSON de la scene source
       2. chargement des 2 JSON de reference
       3. fusion des 3 JSON
       4. rendu Gemini de l'image editee
       5. suppression du watermark
       6. ecriture du manifest et des evenements
```

## Les 6 etapes du pipeline

### 1. Validation

Avant de lancer Gemini, le projet verifie :

- que l'image source existe ;
- que l'outil de watermark existe ;
- que les 2 images de reference existent ;
- que les 2 JSON de reference sont valides ;
- qu'il y a exactement 2 references ;
- que les images source ont une extension supportee.

### 2. Extraction de la scene source

Le client Gemini envoie l'image source avec un prompt d'analyse et demande une reponse JSON.
Le JSON retourne est converti en `SceneData`, puis normalise :

- chaque element recoit un `label` s'il en manque un ;
- chaque element recoit un `id` stable derive du label ;
- `properties` est toujours present.

Le resultat est sauvegarde dans `01_source_extracted.json`.

### 3. Chargement des references

Les deux JSON de reference ne sont pas generes par le pipeline : ils sont lus depuis le disque, valides, puis copies dans le dossier de run sous :

- `02_ref1_loaded.json`
- `03_ref2_loaded.json`

Cette etape garantit que chaque run garde une copie locale exacte des references utilisees.

### 4. Fusion des scenes

Gemini recoit :

- le JSON de la scene source ;
- le JSON de reference 1 ;
- le JSON de reference 2.

Le prompt demande de :

- conserver au maximum la composition d'origine ;
- ajouter les 2 objets de reference ;
- eviter de remplacer des objets existants sauf necessite visuelle ;
- produire un JSON fusionne unique.

Le resultat est sauvegarde dans `04_merged.json`.

### 5. Rendu de l'image finale

Gemini recoit cette fois :

- l'image source ;
- l'image de reference 1 ;
- l'image de reference 2 ;
- le JSON fusionne.

Le rendu produit une image brute sauvegardee sous `05_google_raw.png` ou avec l'extension correspondant au nom de sortie demande.

L'`aspect_ratio` du job est injecte si present.

### 6. Nettoyage du watermark

Le projet execute un outil externe : `GeminiWatermarkTool.exe`.

Comportement :

- si le premier passage renvoie `[OK]`, l'image finale est acceptee ;
- si le premier passage renvoie `[SKIP]`, le pipeline relance automatiquement l'outil avec `--force` ;
- si le nettoyage echoue, le run est marque `failed`.

Le log brut de cet outil est enregistre dans `watermark_stdout.log`.

## Pourquoi la reprise fonctionne bien

Le moteur `PipelineRunner` est idempotent par artefacts :

- si `01_source_extracted.json` existe, l'extraction est sautee ;
- si `04_merged.json` existe, la fusion est sautee ;
- si `05_google_raw.png` existe, le rendu est saute ;
- si `06_final_clean.png` existe, le watermark est considere comme deja fait.

Consequence pratique :

- un `resume` relance uniquement les etapes manquantes ;
- une reprise apres crash peut repartir du dernier artefact valide ;
- supprimer un artefact precis permet de forcer seulement une partie du pipeline.

Exemple : si l'image brute existe mais pas l'image finale, la reprise rejoue uniquement le nettoyage du watermark.

## Les commandes disponibles

- `bulk-edit validate --job jobs/example_job.yaml`
  Verifie qu'un job est coherent sans appeler Gemini.
- `bulk-edit run --job jobs/example_job.yaml`
  Execute un job unique.
- `bulk-edit run --job jobs/example_job.yaml --retry-failed-only`
  Ignore les images deja reussies et relance seulement les `failed` ou nouvelles.
- `bulk-edit batch --glob "jobs/*.yaml" --workers 2`
  Lance plusieurs jobs en parallele.
- `bulk-edit resume --run-id <run_id>`
  Reprend un run existant a partir de son dossier.

## La logique de `--retry-failed-only`

Quand cette option est activee, le projet :

- relit les `manifest.json` les plus recents du dossier de sortie ;
- filtre sur le meme fichier de job ;
- associe chaque image source a son dernier statut ;
- saute les images dont le dernier statut est `succeeded`.

Donc le retry n'est pas base sur un etat global abstrait, mais sur les manifests deja ecrits sur disque.

## Les fichiers produits dans un run

Un run ressemble a ceci :

```text
<output.dir>/<timestamp>_<job_id>/
  01_source_extracted.json
  02_ref1_loaded.json
  03_ref2_loaded.json
  04_merged.json
  05_google_raw.png
  06_final_clean.png
  manifest.json
  events.jsonl
  watermark_stdout.log
```

Role de chaque fichier :

- `manifest.json` : resume d'execution, modeles utilises, timings, statut final, chemins d'artefacts, erreur eventuelle ;
- `events.jsonl` : journal append-only des etapes (`extract`, `merge`, `render`, `watermark`) ;
- `watermark_stdout.log` : sortie brute du binaire de nettoyage ;
- `01` a `06` : les artefacts metier du pipeline.

## Les modules principaux

- `src/bulk_editing/cli.py`
  Point d'entree de la CLI et orchestration des commandes `validate`, `run`, `batch`, `resume`.
- `src/bulk_editing/pipeline.py`
  Coeur du systeme : enchaine les etapes, ecrit le manifest, journalise les evenements et gere la reprise.
- `src/bulk_editing/gemini_client.py`
  Adaptateur vers `google-genai`, chargement de `.env`, retries, parsing JSON et recuperation des images.
- `src/bulk_editing/job_io.py`
  Chargement des jobs, resolution des chemins, validation des fichiers, lecture/ecriture JSON.
- `src/bulk_editing/models.py`
  Modeles Pydantic du domaine (`JobConfig`, `SceneData`, etc.) et normalisation des scenes.
- `src/bulk_editing/history.py`
  Recherche du dernier statut connu par image pour `--retry-failed-only`.
- `src/bulk_editing/watermark.py`
  Integration du binaire de suppression de watermark et logique de retry force.
- `src/bulk_editing/prompts.py`
  Prompts Gemini pour l'extraction, la fusion et le rendu.

## Dependances et hypotheses

- Python `>= 3.11`
- `google-genai`
- `pydantic`
- `PyYAML`
- une cle `GEMINI_API_KEY` ou `GOOGLE_API_KEY`
- un executable `GeminiWatermarkTool.exe`

Le fichier `.env` a la racine peut fournir les cles API. Il est charge seulement si les variables ne sont pas deja presentes dans l'environnement.

## Choix d'architecture a retenir

- Le projet est oriente Windows a cause du binaire de watermark.
- Le pipeline impose exactement 2 references.
- L'etat d'execution vit dans le systeme de fichiers, pas dans une base.
- Les jobs batch sont parallelises au niveau des fichiers de job, pas image par image dans un meme job.
- Les modeles Gemini sont configurables par job.

## En bref

Si on resume le projet en une logique simple :

1. lire un job declaratif ;
2. preparer une scene JSON source ;
3. y integrer deux references ;
4. demander a Gemini de rendre l'image finale ;
5. fiabiliser la sortie avec un nettoyage de watermark ;
6. tout tracer dans un dossier de run rejouable.
