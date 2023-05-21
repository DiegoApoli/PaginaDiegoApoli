function ampliarImagem(imagem) {
    var ampliada = document.createElement('div');
    ampliada.classList.add('ampliada');
    
    var imagemAmpliada = document.createElement('gallery-img');
    imagemAmpliada.src = imagem.src;
    
    ampliada.appendChild(imagemAmpliada);
    
    document.body.appendChild(ampliada);
    
    ampliada.onclick = function() {
      document.body.removeChild(ampliada);
    };
  }