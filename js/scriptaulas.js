let titulo = document.querySelector(".titulo");
titulo.textContent= "Aulas de Javascript";


let myHtml = document.write("<ul><br>")
const numberList = ["mauro","lucio","pereira","da","silva"];

numberList.forEach(number=> myHtml+= document.write(`<li>${number}</li><br>`));
myHtml += document.write("</ul>");


