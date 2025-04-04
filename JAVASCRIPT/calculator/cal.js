let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button')
let string = "";
let arr =Array.from(buttons);
arr.forEach(buttons=>{
    buttons.addEventListeners('click',(e)=>{
    if(e.target.innerhtml=="="){
        string=eval(string);
        input.value=string;
    }
    else if(
        e.target.innerhtml=="AC"
    ){
        string="";
        input.value=string;
    }
    else if(e.target.innerhtml=="DEL"){
        string=string.substring(0,string.length-1);
        input.value=string;
    }
    else{
         string +=e.target.innerhtml;
         input.value=string;}
    })
})
