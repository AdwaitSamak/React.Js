const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const headerBox = document.getElementById("header-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Write something!!");
    }
    else {
        const taskText = inputBox.value;    // we consider the text inthe input box 
        // let ctr=0;
        const taskId="task_"+ String(Math.round(Math.random()*100+1))  //we give a unique id to the task
    
        const listItem = document.createElement("li");   //we created a new list item element which is an object
        
        listItem.id = taskId;
        listItem.textContent = taskText;
        listContainer.appendChild(listItem);   //we append the new list item to the list container

        let span=document.createElement("span");
        span.innerHTML="\u00d7";                 //creates x sign we provided its unicode
        listItem.appendChild(span);
    
        inputBox.value = "";
        savedata();   //we call save data to store the created object
    }

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {

    const taskData = Array.from(listContainer.children).map((item) => {    //so taskdata will return array of objectts so that we can map id with the respective text from HTML collection
        return {
            id: item.id,
            text: item.textContent
        };
    });

    localStorage.setItem("taskData", JSON.stringify(taskData));   //now we store the array in the local storage in the form of a JSON string
    //need to convert into a string beacuse local storage accepts value as a string
}

function showTask() {            //function for gettting the data
    // listContainer.innerHTML=localStorage.getItem("data");

    const savedData = localStorage.getItem("taskData");   // as we had stored the data in form of json string, we get it from the local storage

    if (savedData!=null) {
        const taskData = JSON.parse(savedData);  //we parse the json string to convert into an array

        listContainer.innerHTML = "";   //after getting the data, we clear the list

        taskData.forEach((task) => {
            const listItem = document.createElement("li");       //for each object we make a list element and give it an id and give it the content
            listItem.id = task.id;
            listItem.textContent = task.text.slice(0,-1);     

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            listItem.appendChild(span);

            listContainer.appendChild(listItem);     // we append the item to the list container's child list
        });
    }
    else{
        alert("Nothing Saved")
    }
}
showTask();
