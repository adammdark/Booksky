//selecting the elememts => popup-overlay,popup-box,add,popupform
let popoverlay=document.querySelector(".popup-overlay")
let popupbox=document.querySelector(".popup-box")
let addpop=document.getElementById("add")
let popupform=document.getElementById("popupform")

//adding a function for popup when the '+' button gets clicked and reset the form for next input
addpop.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
    popupform.reset()
})

//selecting the element => cancel-popup and adding a function for closing the popup when cancel button gets clicked
let cancel = document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting the elememts => container,book-title,book-author,boo-description,add-popup and add-book button 
let container=document.querySelector(".container")
let addbook=document.getElementById("add-book")
let booktitle=document.getElementById("book-title")
let bookauthor=document.getElementById("book-author")
let description=document.getElementById("book-description")

// creating a div element and adding funtion to append the texts which got in input of popup-box
addbook.addEventListener("click",function(event){
    event.preventDefault()
    let div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h4>${bookauthor.value}</h4>
    <p>${description.value}</p>
    <button onclick='deletebook(event)'>Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
    
})


//adding a function to delete the book-container when delete button clicked
function deletebook(event)
{
   event.target.parentElement.remove()   
}

