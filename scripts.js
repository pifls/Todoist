/* WYPISANIE DATY W PASTACI DD/MM/RRRR */   
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



var taskArr = [];


document.addEventListener("DOMContentLoaded", function(event) {

    var addTodoInput = document.querySelector('#main-input');
   // var addTodoBtn   = document.querySelector('#submit');
    
    
    
    
   
    
    document.getElementById("submit").addEventListener("click", function(){
        addTask();
        
    });
    
    document.querySelector('#main-input').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 == Enter
      addTask();
    }
    });
    

   
         document.querySelector('body').addEventListener('click', function(event) {
             
             for(var d=0; d < taskArr.length; d++){
            if (event.target.className.toLowerCase() === 'delete' + d) {
                  deleteTask(d);
             }
             }
         });
    
         document.querySelector('body').addEventListener('click', function(event) {
             
            for(var c=0; c < taskArr.length; c++){
                if (event.target.className.toLowerCase() === 'checker' + c) {
                  
                    if(taskArr[c].status == true){
                      //  alert(taskArr[c].status);
                        taskArr[c].status = false;
                    }
                    else{
                       // alert(taskArr[c].status);
                        taskArr[c].status = true;
                    }
             }
             }
         });
    
    
    
    
    function addTask() {
    
    var inputValue = addTodoInput.value;
        
        
    if(inputValue == "" || inputValue == " "){
        alert("Nie możesz dodać pustego zadania!");
    }
    else{
        
        var task = {desc: inputValue,
                    status: false};
        taskArr.push(task);
        taskDisp(taskArr);
    }
    
    // CZYSZCZENIE POLA DO WPISYWANIA ZADANIA
    document.getElementById('main-input').value = "";
      
    }
    
    
    function deleteTask(dt){
        
        taskArr.splice(dt, 1);
        
        taskDisp(taskArr);
    }
    
    
    
});



function taskDisp(t){
    
     var ar = [];
    
    
    if(t.length == 0){
        document.getElementById("ul-tasks").innerHTML = "There are no tasks to do.";
    }
    else{
        for(var i=0; i<t.length; i++){

        if(t[i].status == true){
       
          ar[i] = "<li> <input class=\"checker" + i + "\" + type=\"checkbox\" checked>" + t[i].desc + "<button class=\"delete" + i + "\"+ type=\"button\"> X</button> </li>";
        }
        else{
                      ar[i] = "<li> <input class=\"checker" + i + "\" + type=\"checkbox\">" + t[i].desc + "<button class=\"delete" + i + "\"+ type=\"button\"> X</button> </li>";
        }
        }

        document.getElementById("ul-tasks").innerHTML = ar.join("");
    }
    
    
}

