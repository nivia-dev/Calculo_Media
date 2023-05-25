function media(){
var n1 = document.getElementById("n1").value
var n2 = document.getElementById('n2').value
var n3 = document.getElementById('n3').value
var res = document.getElementById('res')

var media = (Number(n1) + Number(n2) + Number(n3))/3


res.innerHTML = `A média entre ${n1}, ${n2} e ${n3} é <strong>${media.toFixed(2)} </strong>.<br> A média arredondada fica <strong>${Math.round(media)}<strong>`

}