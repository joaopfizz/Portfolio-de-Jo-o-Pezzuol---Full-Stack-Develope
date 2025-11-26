# Script para verificar tamanho dos arquivos antes do commit
Write-Host "Verificando tamanho dos arquivos..." -ForegroundColor Cyan

# Verificar tamanho da imagem
$image = Get-Item "public\joaopezzuol.jfif" -ErrorAction SilentlyContinue
if ($image) {
    $sizeMB = [math]::Round($image.Length / 1MB, 2)
    Write-Host "`nImagem: $($image.Name)" -ForegroundColor Yellow
    Write-Host "Tamanho: $sizeMB MB" -ForegroundColor $(if ($sizeMB -gt 1) { "Red" } else { "Green" })
    if ($sizeMB -gt 1) {
        Write-Host "⚠️  ATENÇÃO: Imagem muito grande! Comprima para menos de 500KB" -ForegroundColor Red
        Write-Host "   Use: https://tinypng.com" -ForegroundColor Yellow
    }
}

# Verificar se node_modules existe
if (Test-Path "node_modules") {
    $nodeSize = (Get-ChildItem -Path "node_modules" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    $nodeSizeMB = [math]::Round($nodeSize / 1MB, 2)
    Write-Host "`nnode_modules: $nodeSizeMB MB" -ForegroundColor $(if ($nodeSizeMB -gt 50) { "Red" } else { "Green" })
    Write-Host "✅ node_modules está no .gitignore" -ForegroundColor Green
}

# Verificar se dist existe
if (Test-Path "dist") {
    $distSize = (Get-ChildItem -Path "dist" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    $distSizeMB = [math]::Round($distSize / 1MB, 2)
    Write-Host "`ndist: $distSizeMB MB" -ForegroundColor $(if ($distSizeMB -gt 10) { "Yellow" } else { "Green" })
    Write-Host "✅ dist está no .gitignore" -ForegroundColor Green
}

# Listar arquivos maiores que 1MB
Write-Host "`nArquivos maiores que 1MB:" -ForegroundColor Cyan
Get-ChildItem -Path . -Recurse -File -ErrorAction SilentlyContinue | 
    Where-Object { $_.Length -gt 1MB -and $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*dist*" -and $_.FullName -notlike "*.git*" } |
    Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}, FullName |
    Format-Table -AutoSize

Write-Host "`n✅ Verificação concluída!" -ForegroundColor Green

