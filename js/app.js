function inserirdados(){
var modal=document.getElementById("modalJS");

modal.showModal();  

}
function inserirAlbuns(){
    var entradaAlbum=document.getElementById("modalJS");
    entradaAlbum.innerHTML=` <form id="formularioPopup">
    <form id="formularioPopup">
      <div>
      <label for="nomeArte">Nome da Arte:</label>
      <input type="text" id="nomeArte" name="nomeArte"><br><br></div>
      <div>
      <label for="descricaoDaArte">Descrição da Arte:</label>
      <input type="textarea" id="descricaoDaArte" name="descricaoDaArte"><br><br></div>
      <div>
      <label for="imagemArte">Imagem da Arte(URL):</label>
      <input type="text" id="imagemArte" name="imagemArte"><br><br></div>
<div id="botoesPopPop">

  <button id="enviarFormulario" class="botaoFormularioInput" onclick="uparInf()"> Upload Informações</button>
  <button id="descartarDados" class="botaoFormularioInput" onclick="fecharPopPop()"> Descartar</button>
</div>
    </form>`

}
var s=0;


function uparInf(){
    
    var nomeAlbum=document.getElementById("nomeAlbum").value;
    var descricaoDoAlbum=document.getElementById("descricaoDoAlbum").value;
    var anoPeriodo=document.getElementById("anoPeriodo").value;
    
    var localizacaoForm=document.getElementById("localizacaoForm").value;
    var urlArt=document.getElementById("imagemForm").value;
    var numeroFotos=document.getElementById("numFoto").value;
    numeroFotos=parseInt(numeroFotos);
    var textoDestaque=document.getElementById("textoDestaque").value; 
    console.log(typeof urlArt)
   
    var entradaAlbum=document.getElementById("formularioPopup");
    postData('https://jsonserver--sauloluiz1.repl.co/artistas', {"id":artistas.length+2,"nome":nomeAlbum,"descricao":descricaoDoAlbum,"imagem":urlArt})
  .then((data) => {
    console.log(data); 
  });
   
    


    entradaAlbum.innerHTML="";
    for(var s=0;s!=numeroFotos;s++){

    entradaAlbum.innerHTML+=` <form id="formularioPopup">
    <form id="formularioPopup">
      <div>
      <label for="nomeArte">Nome da Arte:</label>
      <input type="text" id="nomeArte" name="nomeArte"><br><br></div>
      <div>
      <label for="descricaoDaArte">Descrição da Arte:</label>
      <input type="textarea" id="descricaoDaArte${s}" name="descricaoDaArte"><br><br></div>
      <div>
      <label for="imagemArte">Imagem da Arte(URL):</label>
      <input type="text" id="imagemArte" name="imagemArte"><br><br></div>
<div id="botoesPopPop"><br><hr>`

    }

    entradaAlbum.innerHTML+=`
  <button id="enviarFormulario" class="botaoFormularioInput" onclick="novoAlb()"> Upload Foto</button>
  <button id="descartarDados" class="botaoFormularioInput" onclick="fecharPopPop()"> Descartar</button>
</div>
    </form>`
   
}


   
    
    
  
    

function fecharPopPop(){
    var modal=document.getElementById("modalJS");
    modal.close();
}