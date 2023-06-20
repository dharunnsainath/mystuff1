id="elem"

element = document.getElementById(id)

textNode=element.childNodes[0]
text=textNode.data

console.log(textNode)

setInterval(()=>{
    text = text[text.length - 1] + text.toString().substring(0, text.length - 1);
    textNode.data = text;

},100)