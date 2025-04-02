# Mapa-interativo-
index.html.
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa Interativo</title>
    <style>
        body { text-align: center; }
        .map-container { position: relative; display: inline-block; }
        .info-box {
            display: none;
            position: absolute;
            background: white;
            border: 1px solid black;
            padding: 10px;
            z-index: 10;
        }
        .clickable {
            position: absolute;
            cursor: pointer;
            background: rgba(255, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <h1>Mapa Interativo</h1>
    <div class="map-container">
        <img src="mapa.png" alt="Mapa" width="800">
        
        <!-- Exemplo de áreas clicáveis -->
        <div class="clickable" style="top: 100px; left: 200px; width: 50px; height: 50px;" onclick="showInfo(event, 'Edificação Principal')"></div>
        <div class="clickable" style="top: 300px; left: 400px; width: 50px; height: 50px;" onclick="showInfo(event, 'Área de Preservação Permanente')"></div>
    </div>
    
    <div id="info" class="info-box"></div>
    
    <script>
        function showInfo(event, text) {
            let infoBox = document.getElementById("info");
            infoBox.style.display = "block";
            infoBox.style.left = event.pageX + "px";
            infoBox.style.top = event.pageY + "px";
            infoBox.innerHTML = text;
        }
        
        document.addEventListener("click", function(event) {
            if (!event.target.classList.contains("clickable")) {
                document.getElementById("info").style.display = "none";
            }
        });
    </script>
</body>
</html>
