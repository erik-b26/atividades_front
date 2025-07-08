var listaDeComentarios = ["Comentarios 1", "Comentarios 2", "Comentarios 3"];
var i = 0;

var listaDeDepoimentos = ["Depoimentos 1", "Depoimentos 2", "Depoimentos 3"];
var d = 0;

const galeria = document.getElementById("galeria");
let h3 = document.createElement("h3");
h3.innerText = "galeria";
galeria.appendChild(h3);

for(var i=1; i<=10; i++){
    let imagem = document.createElement("img");
    imagem.src = "./img" +i+".jpeg";
    galeria.appendChild(imagem);
    
}

    function mudaComentario() {
        let elem = document.getElementById("comentario");
        elem.text = listaDeComentarios(i++ % 3);

    }
    setInterval(mudaComentario, 2000);

    function mudaDepoimento(){
        let elem = document.getElementById("depoimento");
        elem.text = listaDeDepoimentos(d++%3);
    }

