const urlArtistas = "https://jsonserver--sauloluiz1.repl.co/artistas";
let artistas=[];
var destaqueCarro=document.getElementById("carro");
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return response.json(); 
}

/* postData('https://jsonserver--sauloluiz1.repl.co/artistas', {"id":19,"nome":"saulo"})
  .then((data) => {
    console.log(data); 
  }); */
var serverExist
fetch(urlArtistas)
    .then(function (response) {return response.json()})
    .then (function(dados){
        artistas=dados;
        console.log("dados carregados");
        preencher();
    }).catch(()=>{
      alert("O server esta fora do ar,voce nao conseguira ver nem o destaque nem os cards")


    })
    

    var listaAlbum=document.getElementById("mediaRow");
    var imagemPerfil;
    var descricaoArtista;
    var nomeArtista;
    
    function preencher(){
      var idDestaque= artistas[0].num;
      
  

      
      destaqueCarro.innerHTML+=` <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${artistas[idDestaque].obras[0].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[1].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[2].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[3].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[4].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[5].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[6].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[7].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[8].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[9].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[9].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[10].url}" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="${artistas[idDestaque].obras[11].url}" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`
   
    for(var i=0;i!=artistas.length;i++){
      
    listaAlbum.innerHTML+=` <div class="col">
          
    <div class="card h-100">
     <a href="/album.html?id=${artistas[i].id}">

       <img src="${artistas[i].imagem}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${artistas[i].nome}</h5>
         <p class="card-text"> ${artistas[i].descricao}
         </p>
     </a>
   </div>
 </div>`;
}
    }
    
    