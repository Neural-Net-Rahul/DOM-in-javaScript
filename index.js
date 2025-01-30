// DOM Manipulation is divided into two parts:
// event listening => mouse moved, hover, key was preseed, page just loaded, about to leave the web page 
// get the element


// example 1 
document.getElementById("changeTextButton").addEventListener('click',()=>{
    document.getElementById("myParagraph").innerHTML = "<h2 style='color:grey;'>Paragraph has changed</h2>";
})


// example 2

// document.getElementById("highlightFirstCity").addEventListener('click',()=>{
//     document.getElementsByClassName('chai')[0].classList.add('highlight') 
// })

document.getElementById('highlightFirstCity').addEventListener('click',()=>{
    let firstElement = document.getElementById('citiesList').firstElementChild.classList;
    if(firstElement.contains('highlight')){
        firstElement.remove('highlight');
    }
    else{
        firstElement.add('highlight');
    }
})


// example 3
let changeOrderButton = document.getElementById('changeOrder')
changeOrderButton.addEventListener('click',()=>{
    let coffeeType = document.getElementById("coffeeType");
    if(coffeeType.innerText == "Espresso"){
        coffeeType.innerText = "Latte";
        changeOrderButton.innerText = "Change Order to Espresso"
        coffeeType.style = "background-color:red";
    }
    else{
        coffeeType.innerText = "Espresso";
        changeOrderButton.innerText = "Change Order to Latte"
        coffeeType.style = "background-color:blue;border:2px solid white";
    }
})


// example 4
document.getElementById("addNewItem").addEventListener('click',()=>{
    // document.getElementById('shoppingList').innerHTML += "<li>Chai</li>";
    let last_item = document.createElement('li') // creation of element 
    last_item.textContent = "Chai";
    document.getElementById('shoppingList').appendChild(last_item);
})


// example 5
document.getElementById('removeLastTask').addEventListener('click',()=>{
    let taskList = document
      .getElementById("taskList");
      taskList.removeChild(taskList.lastElementChild);
      // taskList.lastElementChild.remove();
})


// example 6
document.getElementById('clickMeButton').addEventListener('dblclick',()=>{ // mouseover, click, dblclick
    alert('Tea Code')                   
})


// example 7
document.getElementById('teaList').addEventListener('click',(event)=>{
  console.log(event.target); // which one got clicked
//   document.getElementById("teaList").removeChild(event.target);
    if(event.target && event.target.matches('.teaItem')){
        document.getElementById('teaList').removeChild(event.target);
        alert('You deleted teaItem');
    }
    else{
        alert("You haven't deleted teaItem");
    }
})


// example 8
document.getElementById('feedbackForm').addEventListener('submit',(event)=>{
  // best practice is to console out event.target
  event.preventDefault();
  let feedback = document.getElementById("feedbackInput");
  document.getElementById("feedbackDisplay").textContent =
    document.querySelector(`label[for="${feedback.getAttribute('id')}"]`).innerText + " " + feedback.value; // feedbackInput Hi there
})


// example 9
document.addEventListener('DOMContentLoaded',function(e){
    document.getElementById('domStatus').textContent = "DOM Fully loaded"
})

// example 10
document.getElementById("toggleHighlight").addEventListener('click',function (e){
    let descTextElement = document.getElementById("descriptionText");
    // if(descTextElement.classList.contains('highlight')){
    //     descTextElement.classList.remove('highlight');
    // }
    // else{
    //     descTextElement.classList.add('highlight');
    // }
    descTextElement.classList.toggle('highlight');
})
