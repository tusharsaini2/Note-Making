let noteContainer = document.querySelector(".notes-container");
let button = document.querySelector(".btn");
let inputText = document.querySelectorAll(".input-text");


function updateNote () {
  localStorage.setItem("note",noteContainer.innerHTML)
  localStorage.clear;
}

function showNote (){
  noteContainer.innerHTML = localStorage.getItem("note");
  
}

showNote();

button.addEventListener("click", () => {
  console.log("helo")
  let paragraph = document.createElement("P");
  let img = document.createElement("IMG");
  paragraph.setAttribute("contenteditable","true")
  paragraph.className= "input-text";
  img.src ="Delete.png"
  img.classList.add("img")

  noteContainer.appendChild(paragraph).appendChild(img);
});

noteContainer.addEventListener("click", function(e){
  if(e.target.tagName ==="IMG"){
    e.target.parentElement.remove()
    updateNote();
  }
  else{
    let notes = document.querySelectorAll(".input-text");
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        updateNote();
      }
    })
  }

  

})

