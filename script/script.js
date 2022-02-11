let moon = document.querySelector('#moon')
let stars = document.querySelector('#stars')
let mountains_behind = document.querySelector('#mountains_behind')
let mountains_front = document.querySelector('#mountains_front')
let goleft = document.querySelector('#goleft')
let gorigth = document.querySelector('#gorigth')
let btn = document.querySelector('#btn')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value*0.25 + 'px'
    moon.style.top = value*1.05 + 'px'
    mountains_behind.style.top = value*0.5 + 'px'
    mountains_front.style.top = value*0 + 'px'
    goleft.style.marginRight = value*4 + 'px'
    //goleft.style.marginTop = value*1 + 'px'
    gorigth.style.marginLeft = value*4 + 'px'
    //gorigth.style.marginTop = value*1 + 'px'
    btn.style.marginTop = value*1.5 + 'px' 
})

function htmlinfo(){
  document.querySelector("#js").style.boxShadow = "none"
  document.querySelector("#css").style.boxShadow = "none"
  document.getElementById("infoling").innerText = "HTML é um alinguagem baseada em marcações, onde marcamos os elementos para definir quais informações a página vai exibir."
  document.querySelector("#html").style.boxShadow = "0px 0px 15px var(--selectcor)"
}

function cssinfo(){
  document.querySelector("#js").style.boxShadow = "none"
  document.querySelector("#html").style.boxShadow = "none"
  document.getElementById("infoling").innerText = 'CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as paginas HTML.'
  document.querySelector("#css").style.boxShadow = "0px 0px 15px var(--selectcor)"
}

function jsinfo(){
  document.querySelector("#css").style.boxShadow = "none"
  document.querySelector("#html").style.boxShadow = "none"
  document.getElementById("infoling").innerText = "JavaScript é uma linguagem de programação interpretada estruturada, de script de alto nível com tipagem dinâmica fraca e multiparadigma."
  document.querySelector("#js").style.boxShadow = "0px 0px 15px var(--selectcor)"
}
//Parallax
