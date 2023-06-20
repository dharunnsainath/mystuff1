const arr=[]

const calculate=()=>{
     
     var taskInput = document.getElementById("input");
     var task = taskInput.value;
     arr.push(task)
     if (task !== "") {
          
          var listItem = document.createElement("li");
          listItem.appendChild(document.createTextNode(task));
      
          
          var taskList = document.getElementById("taskList");
          taskList.appendChild(listItem);
      
          
          taskInput.value = "";
        }
     console.log(arr)
}