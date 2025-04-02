function showInfo(setor) {
    const infoBox = document.getElementById("info-box");
    
    // Mensagens personalizadas para cada setor
    const infoText = {
        "Setor A": "Este é o Setor A, dedicado a vendas.",
        "Setor B": "Setor B é a área administrativa.",
        "Setor C": "No Setor C fica a produção."
    };

    // Atualiza o conteúdo do info-box com a informação do setor clicado
    infoBox.textContent = infoText[setor] || "Informação não disponível.";
}
