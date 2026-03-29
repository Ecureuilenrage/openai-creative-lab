$port = if ($args.Count -gt 0) { [int]$args[0] } else { 8000 }
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

Push-Location $root
try {
  if (Get-Command py -ErrorAction SilentlyContinue) {
    Write-Host "Serving $root on http://localhost:$port"
    py -m http.server $port
    exit $LASTEXITCODE
  }

  if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "Serving $root on http://localhost:$port"
    python -m http.server $port
    exit $LASTEXITCODE
  }

  Write-Error "Python est requis pour lancer un serveur local. Installe Python puis relance .\\serve-local.ps1"
  exit 1
} finally {
  Pop-Location
}
