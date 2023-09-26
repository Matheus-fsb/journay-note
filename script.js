const funcionalidades = {

    prosseguirNome: false,
    prosseguirSenha: false,

    trocarPaginaBotao(paghtml) {
        const bodyElement = document.body;

        bodyElement.classList.add('fade-out-animation');

        setTimeout(() => {
            window.location.href = paghtml;
        }, 1000);
    },

    trocarPaginaBotaoVerificada(paghtml) {
        const bodyElement = document.body;

        if (this.prosseguirNome === true || this.prosseguirSenha === true) {
            bodyElement.classList.add('fade-out-animation');
            setTimeout(() => {
                window.location.href = paghtml;
            }, 1000);
            this.prosseguirNome = false;
            this.prosseguirSenha = false;
        } else {
            alert("Requisitos não cumpridos");
        }
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
            mensagemLimite.style.display = "block";
        } else {
            mensagemLimite.style.display = "none";
        }
    },

    mensagemLarguraMin(input) {
        const mensagemMin = document.getElementById("mensagemMin");
        const tamanhoTexto = input.value.length;
        const minlength = parseInt(input.getAttribute("minlength"));
        if (tamanhoTexto < minlength) {
            mensagemMin.style.display = "block";
        } else {
            mensagemMin.style.display = "none";
        }
    },

    verificarPassagem(input, tipoPag) {
        const valorInput = input.value.length;
    
        if (tipoPag === 'nome') {
            if (valorInput < 3) {
                this.prosseguirNome = false;
            } else {
                this.prosseguirNome = true; 
            }
        } else if (tipoPag === 'senha') {
            if (valorInput < 8) {
                this.prosseguirSenha = false; 
            } else {
                this.prosseguirSenha = true; 
            }
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
        console.log(this.senhaUsuario)
    }
}

//Instancias das classes

let informacoes_usuario = new infoUsuario();

//Objetos funcionais