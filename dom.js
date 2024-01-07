console.log(document)
const btnplusArry=document.getElementsByClassName("plus");
// console.log(btnplusArry)
for(var i=0;i< btnplusArry.length;i++ ){
    btnplusArry[i].addEventListener("click",increment);
}

function increment(event){
// console.log(event)
const btnplus=event.target
// console.log(btnplus)
const divElt=btnplus.parentElement
// console.log(divElt)
const quantity=divElt.querySelector("p")
// console.log(quantity)
var quantityvalue=Number(quantity.innerHTML)
quantityvalue++
// console.log(quantityvalue)
quantity.innerHTML=quantityvalue
const trElement=divElt.parentElement.parentElement
// console.log(trElement)
const unitPricevalue=Number(trElement.querySelector(".unitPrice").innerHTML)
// console.log(unitPricevalue)
const pricetag=trElement.querySelector(".price")
// console.log(pricetag)
var pricevalue=Number(pricetag.innerHTML)
// console.log(pricevalue)
pricevalue=quantityvalue*unitPricevalue
pricetag.innerHTML=pricevalue

}

const btnminusArry=document.getElementsByClassName("minus");
// console.log(btnminusArry)
for(var i=0;i< btnminusArry.length;i++ ){
    btnminusArry[i].addEventListener("click",decrement);
}

function decrement(event){
// console.log(event)
const btnminus=event.target
// console.log(btnminus)
const divElt=btnminus.parentElement
// console.log(divElt)
const quantity=divElt.querySelector("p")
// console.log(quantity)
var quantityvalue=Number(quantity.innerHTML)
if(quantityvalue > 0){
quantityvalue--;
// console.log(quantityvalue)
quantity.innerHTML=quantityvalue
const trElement=divElt.parentElement.parentElement
// console.log(trElement)
const unitPricevalue=Number(trElement.querySelector(".unitPrice").innerHTML)
// console.log(unitPricevalue)
const pricetag=trElement.querySelector(".price")
// console.log(pricetag)
var pricevalue=Number(pricetag.innerHTML)
// console.log(pricevalue)
pricevalue=quantityvalue*unitPricevalue
pricetag.innerHTML=pricevalue

}
else return pricevalue=0;
}


const checkElement=document.getElementsByClassName("checkbox");
const btnplus=document.getElementsByClassName("plus");
const btnminus=document.getElementsByClassName("minus");
console.log(checkElement)
for(var i=0;i< checkElement.length;i++ ){
    checkElement[i].addEventListener("click",checktotale);
    btnplus[i].addEventListener("click",checktotale);
    btnminus[i].addEventListener("click",checktotale);
}

function checktotale(event){
// console.log(event)
const totaleEvent=event.target
// console.log(totaleEvent)
var pricevalue=Number(totaleEvent.parentElement.parentElement.querySelector(".price").innerHTML)
// console.log(pricevalue) 
const totaletag=document.getElementById('total')
// console.log(totaletag)
var totalevalue=Number(totaletag.innerHTML)
const btnplus=totaleEvent.parentElement.parentElement.querySelector(".plus");
const btnminus=totaleEvent.parentElement.parentElement.querySelector(".minus");
// console.log(btnplus)
// console.log(totalevalue)
if(totaleEvent.checked===true){
    totalevalue+=pricevalue
    totaletag.innerHTML=totalevalue
    btnplus.setAttribute("disabled",true)
    btnminus.setAttribute("disabled",true)
    }
else {
    totalevalue-=pricevalue
    totaletag.innerHTML=totalevalue
    btnplus.removeAttribute("disabled")
    btnminus.removeAttribute("disabled")
}

}

const deleteElt=document.getElementsByClassName("fa-trash-can");
// console.log(deleteElt)
for(var i=0;i< deleteElt.length;i++ ){
    deleteElt[i].addEventListener("click",deleteRow);
}

function deleteRow(event){
const deleteEvent=event.target
// console.log(deleteEvent)
const del=deleteEvent.parentElement.parentElement
// console.log(del)
del.remove();
}

const likeElt=document.getElementsByClassName("fa-heart");
// console.log(likeElt)
for(var i=0;i< likeElt.length;i++ ){
    likeElt[i].addEventListener("click",likecolor);
}

function likecolor(event){
var likeEvent=event.target
// console.log(likeEvent)
    likeEvent.style.color='red'
}
