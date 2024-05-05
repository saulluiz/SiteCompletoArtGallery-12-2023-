const urlArtistas = "https://jsonserver--sauloluiz1.repl.co/artistas";
let artistas=[];
var person=document.getElementById("acima");
var atrib=0;
var i=0;
var identi= new URLSearchParams(location.search);
ident=identi.get('id');
listaObras=document.getElementById("mediaRow");
var endereco=[];
fetch(urlArtistas)
    .then(function (response) {return response.json()})
    .then (function(dados){
        artistas=dados;
        console.log("dados carregados");


        preencher();
    });
    function preencher(){
        const id = artistas.findIndex((element) => element.id == ident);
        console.log(id)
       
        person.innerHTML+=`<img src="${artistas[id].imagem}" id="imagemPerfilArtista" class="card-img-top" alt="...">
        <div id="informArtista">
  
          <h3>Descrição</h3>
          <p id="descriGrande"> ${artistas[id].descricao}</p>
          
  
          <div id="alinhamentoDadosBaixo">
            <div class="parte1">
  
              <h3>Localização</h3>
              <p id="localizacao">${artistas[id].localizacao}
              </p>
            </div>
            <div class="parte1">
  
              <h3>Atuação</h3>
              <p>${artistas[id].ano}</p>
            </div>
  
          </div>
        </div> `;

        
        for(i=0;i!=12;i++){
          endereco[i]=i;
            listaObras.innerHTML+=` <div class="col" id="cardJS" >
            <div class="card h-100">
             
  
                <img src="${artistas[id].obras[i].url}" class="card-img-top" onclick="popupJS('${i},${id}')" " alt="...">
                <div class="card-body">
                
                  <h5 class="card-title" onclick="popupJS('${i},${id}')">${artistas[id].obras[i].titulo}</h5>
                  <p class="card-text" onclick="popupJS('${i},${id}')"> ${artistas[id].obras[i].descricao} </p>

            </div>
          </div>`
        }
     
        
          
        
      
    }
    {/* <dialog id="popJS"> 
                
                <img src="media/daVince/default.jpg">
                <button id="fechamento" onclick="closeModa()">Close</button>
                
                </dialog> */}

    function popupJS(parameter){
      var modal=document.getElementById("popJS");
      let ender=parameter.split(",");
     enderID=ender[1];
     enderI=ender[0];
  console.log(enderI);
  modal.innerHTML=`<div><img src="${artistas[enderID].obras[enderI].url}">
  <div id="descreveDestaque">
      <h2>${artistas[enderID].nome } -${artistas[enderID].obras[enderI].titulo}</h2>
      <p>${artistas[enderID].obras[enderI].descricao}<p></div>
  <div id="botoesJSJS">
  <button id="voltar"class="button-56" onclick="voltar()">Voltar</button>
  <button id="passar"class="button-56" onclick="passar(${enderI})">Passar</button>
  <button id="fechamento"class="button-56" onclick="closeModa()">Close</button>
  </div>
  </div>
  `

  
  
    modal.showModal();  


      
    }
    
    
    function closeModa(){
      var modal=document.getElementById("popJS");
      modal.close();

    }
    function passar(parameter){
      console.log(parameter)
      console.log(enderID)
      var modal=document.getElementById("popJS");
      var posicao=parameter+1;
     

      modal.innerHTML=`<div><img src="${artistas[enderID].obras[posicao].url}">

      <div id="descreveDestaque">
      <h2>${artistas[enderID].nome } -${artistas[enderID].obras[posicao].titulo}</h2>
      <p>${artistas[enderID].obras[posicao].descricao}<p></div>
        <div id="botoesJSJS">
      
        <button id="voltar" class="button-56" onclick="voltar(${posicao})">Voltar</button>
      <button id="passar" class="button-56" onclick="passar(${posicao})">Passar</button>
      <button id="fechamento" class="button-56" onclick="closeModa()">Close</button></div></div>
      `
      
    
      
    }
    function voltar(parameter){
      console.log(parameter)
      console.log(enderID)
      let posicao=parameter;
      if(posicao!=0){
        posicao--;
      }
      var modal=document.getElementById("popJS");


      modal.innerHTML=`<div><img src="${artistas[enderID].obras[posicao].url}">

      <div id="descreveDestaque">
      <h2>${artistas[enderID].nome } -${artistas[enderID].obras[posicao].titulo}</h2>
      <p>${artistas[enderID].obras[posicao].descricao}<p></div>
        <div id="botoesJSJS">
      
        <button id="voltar" class="button-56" onclick="voltar(${posicao})">Voltar</button>
      <button id="passar" class="button-56" onclick="passar(${posicao})">Passar</button>
      <button id="fechamento" class="button-56" onclick="closeModa()">Close</button></div></div>
      `
      
    }
    
 
    
    


   /*  <img src="/media/JamesMc/perfil.jpg" class="card-img-top" alt="...">
      <div id="informArtista">

        <h3>Descrição</h3>
        <p id="descriGrande"> ${artistas[id].descricao}</p>
        

        <div id="alinhamentoDadosBaixo">
          <div class="parte1">

            <h3>Localização</h3>
            <p id="localizacao">${artistas[id].localizacao}
            </p>
          </div>
          <div class="parte1">

            <h3>Atuação</h3>
            <p>${artistas[id].data}</p>
          </div>

        </div>
      </div> */