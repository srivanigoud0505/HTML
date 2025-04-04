let btn = document.getElementById("btn")
let body = document.querySelector("body")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hex_value = document.getElementById("hex")
let cpy = document.getElementById("myCopy")

hex_value.innerHTML="#000000"

btn.addEventListener("click",function(){
    let hex_key="#"
    for (let i=0; i<6; i++){
        const index=Math.floor(Math.random() * hex.length)
        hex_key=hex_key + hex[index]
        console.log(hex_key)
    }

    hex_value.innerHTML=hex_key
    document.getElementById("myhex").value = hex_key
    body.style.backgroundColor = hex_key
    body.style.transition="1s"
})

cpy.addEventListener("click",function(){
    let hex = document.getElementById("myhex")

    hex.select()
    hex.setSelectionRange(0,999999)

    navigator.clipboard.writeText(hex.value);
    alert('Copied Hex Color: '+ hex.value);


})
