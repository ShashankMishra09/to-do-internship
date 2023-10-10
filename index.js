const taskList = document.querySelector('#task-list');
const inputBox = document.querySelector('#task-input');
var currentDate = new Date();

function addTask(task) {
    let li = document.createElement("li")
    li.innerHTML= inputBox.value
    taskList.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    inputBox.value='';
    saveData();
}

taskList.addEventListener('click',event=>{
    if(event.target.tagName==='LI'){
        event.target.classList.toggle("checked");
        saveData();

    }
    else if(event.target.tagName==="SPAN"){
         event.target.parentElement.remove();
         saveData();

    }
})

document.addEventListener('keypress',(event)=>{
    if(inputBox.value === '' && event.key === 'Enter'){
        alert("Please enter a to do")
    }
    else if(event.key === 'Enter'){
        addTask();
    }
})

function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}


var year = currentDate.getFullYear();
var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
var day = currentDate.getDate().toString().padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;
document.getElementById('currentDateDisplay').textContent = formattedDate;



