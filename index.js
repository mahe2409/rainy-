const text = " 1 1 1 1 1 1 1 1 1 1 1 1 ";
let index = 0;
function rain(){
    
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 320);
    let size = Math.random* 2.5;
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = text[index];
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    index = (index + 1) % text.length;

    
    setTimeout(function(){
        cloud.removeChild(e)
    }, 2000)

}
    setInterval(function(){
        rain()
    },70);

  