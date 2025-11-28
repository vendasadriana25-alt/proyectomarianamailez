Param(
    [int]$Port = 8000,
    [string]$Root = "C:\Users\adriana.maiuri\Documents\trae_projects\Lipidema"
)

Add-Type -AssemblyName System.Net
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Output "Static server running at http://localhost:$Port/ serving $Root"

while ($true) {
    try {
        $context = $listener.GetContext()
        $path = $context.Request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($path)) { $path = 'vendas.html' }
        $file = Join-Path $Root $path
        if (Test-Path $file) {
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $contentType = 'text/plain'
            if ($file.EndsWith('.html')) { $contentType = 'text/html' }
            elseif ($file.EndsWith('.css')) { $contentType = 'text/css' }
            elseif ($file.EndsWith('.js')) { $contentType = 'application/javascript' }
            elseif ($file.EndsWith('.png')) { $contentType = 'image/png' }
            elseif ($file.EndsWith('.jpg') -or $file.EndsWith('.jpeg')) { $contentType = 'image/jpeg' }
            elseif ($file.EndsWith('.gif')) { $contentType = 'image/gif' }
            $context.Response.ContentType = $contentType
            $context.Response.OutputStream.Write($bytes,0,$bytes.Length)
            $context.Response.Close()
        } else {
            $context.Response.StatusCode = 404
            $context.Response.Close()
        }
    } catch {
        Write-Error $_
    }
}