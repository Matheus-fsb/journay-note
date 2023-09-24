const funcionalidades = {

    trocarPaginaBotao(paghtml) {
        const bodyElement = document.body;

        bodyElement.classList.add('fade-out-animation');

        setTimeout(() => {
            window.location.href = paghtml;
        }, 1000);
    },
    
    aumentarLarguraInput(input) {
        const tamanhoTexto = input.value.length;
        const larguraMinima = 100;
        const larguraMaxima = 500;
        const tamanhoCaractere = 20;
    
        let larguraCalculada = tamanhoTexto * tamanhoCaractere;
    
        if (larguraCalculada < larguraMinima) {
            larguraCalculada = larguraMinima;
        } else if (larguraCalculada > larguraMaxima) {
            larguraCalculada = larguraMaxima;
        }
    
        input.style.width = larguraCalculada + 'px';
    },

    mensagemLarguraMax(input){
        const mensagemLimite = document.getElementById("mensagemLimite");
        const tamanhoTexto = input.value.length;
        const maxlength = parseInt(input.getAttribute("maxlength"));
        if(tamanhoTexto >= maxlength){
            mensagemLimite.style.opacity = "1";
        } else {
            mensagemLimite.style.opacity = "0";
        }
    },

    mensagemLarguraMin(input) {
        const mensagemMin = document.getElementById("mensagemMin");
        const tamanhoTexto = input.value.length;
        const minlength = parseInt(input.getAttribute("minlength"));
        if (tamanhoTexto > 0 && tamanhoTexto < minlength) {
            mensagemMin.style.opacity = "1";
        } else {
            mensagemMin.style.opacity = "0";
        }
    }
    
};

//Classes 

class infoUsuario{
    constructor(){
        this.username = "";
        this.nomeDiario = "";
        this.senhaUsuario = "";
    }

    definirNome(event){
        event.preventDefault();
        let inputUsername = document.getElementById("inputUsuario");
        this.username = inputUsername.value;
    }

    definirNomeDiario(event){
        event.preventDefault();
        let inputNomeDiario = document.getElementById("inputNomeDiario");
        this.nomeDiario = inputNomeDiario.value;
    }

    definirSenha(event){
        event.preventDefault();
        let inputSenha = document.getElementById("inputSenha");
        this.senhaUsuario = inputSenha.value;

    }
}

//Instancias das classes

let informacoes_usuario = new infoUsuario();

//Objetos funcionais