# Iniciar sesión en Azure (omitir si ya has iniciado sesión)
Connect-AzAccount

# Definir los parámetros
$resourceGroupName = "TuGrupoDeRecursos"
$location = "East US" # Asegúrate de usar una ubicación que sea compatible con tu suscripción
$storageAccountName = "nombredetucuentaunico123" # Debe ser único en Azure
$skuName = "Standard_LRS" # SKU de la cuenta de almacenamiento
$kind = "StorageV2" # Tipo de cuenta de almacenamiento
$enableHttpsTrafficOnly = $true # Habilitar solo tráfico HTTPS

# Crear o verificar el grupo de recursos
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Crear la cuenta de almacenamiento
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind $kind `
                     -EnableHttpsTrafficOnly $enableHttpsTrafficOnly