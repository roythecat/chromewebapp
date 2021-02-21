
const js_form = document.querySelector("#js_form");
const js_input = document.querySelector("#js_input");
const js_greet = document.querySelector("#js_greet");
var userName;

js_input.addEventListener("click",(event)=>{
    js_input.value="";
})

js_form.addEventListener("submit",handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("name",js_input.value);
    greetUser(js_input.value);
}

function greetUser(userName){
    js_input.style.display="none";
    js_greet.style.display="block";
    console.log(userName);
    js_greet.innerHTML=`Hello, ${userName}!<br> How are you today?`
}

function loadName(){
         userName=localStorage.getItem("name");
        if(userName){
           greetUser(userName);
           js_input.style.display="none";

        }else{
            js_input.style.display="block";
            js_greet.style.display="none";

        }
    
}

function init(){
    loadName();
}

init();