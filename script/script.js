function htmlinfo(){
  document.querySelector("#js").style.border = "none"
  document.querySelector("#css").style.border = "none"
  document.getElementById("infoling").innerText = "HTML é um alinguagem baseada em marcações, onde marcamos os elementos para definir quais informações a página vai exibir."
  document.querySelector("#html").style.border = "2px solid var(--selectcor)"
}

function cssinfo(){
  document.querySelector("#js").style.border = "none"
  document.querySelector("#html").style.border = "none"
  document.getElementById("infoling").innerText = 'CSS é uma linguagem de folha de estilo composta por "camadas", criado com o propósito de estilizar as paginas HTML.'
  document.querySelector("#css").style.border = "2px solid var(--selectcor)"
}

function jsinfo(){
  document.querySelector("#css").style.border = "none"
  document.querySelector("#html").style.border = "none"
  document.getElementById("infoling").innerText = "JavaScript é uma linguagem de programação interpretada estruturada, de script de alto nível com tipagem dinâmica fraca e multiparadigma."
  document.querySelector("#js").style.border = "2px solid var(--selectcor)"
}

