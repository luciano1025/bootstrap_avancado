document.getElementById("btnAdicionarFormulario").addEventListener("click", function() {
    // Criando um novo elemento de formulário
    var formulario = document.createElement("form");
    formulario.classList.add("mx-auto", "mt-4"); // Adicionando classes de Bootstrap para centralizar e adicionar margem superior
    
    // Adicionando conteúdo ao formulário
    formulario.innerHTML = `
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Digite seu email">
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    `;
    
    // Adicionando o formulário ao corpo do documento
    document.body.appendChild(formulario);
});