document.addEventListener("DOMContentLoaded",function(){
    const taskInput=document.getElementById("taskInput")
    const addtask=document.getElementById("addtask")
    const tasklist=document.getElementById("tasklist")



    addtask.addEventListener("click",function(){
        const tasktext=taskInput.value.trim();
        if (tasktext !== ""){
            const listitem= document.createElement("li")
            listitem.innerHTML=`${tasktext}<button class="delete-btn">Delete</button>`
            tasklist.appendChild(listitem)
            taskInput.value=""

            const deleteBtn=listitem.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function(){
                tasklist.removeChild(listitem);
            })

           }


    })

    });
