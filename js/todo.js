//필요한 기능
//5. todo 클릭하면 줄 그어지게

const toDoForm=document.querySelector("#js_toDoForm"),
toDoInput = document.querySelector("#js_toDoInput"),
toDoUl = document.querySelector("#js_toDoUl");
const toDos=[];

//1. form에 클릭하면 ""
toDoInput.addEventListener("click",()=>{
    toDoInput.value="";
})

function handleToDoSubmit(event){
 event.preventDefault();
 const todoLi = toDoInput.value;
 localStorage.setItem("toDo",todoLi);
 //되긴 하는데 로컬스토리지가 늘어나지 않고 한개가 내용이 계속 바뀜->괜찮음 
 appendToDo(todoLi);
}

//2. form에 할일 입력한게 로컬스토리지에 저장되게
function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos))
}

//3. form에 할일 입력하면 ul li로 나오게
function appendToDo(text){
 //처음에 createElement 없이 toDoUl.appendchild("li")로 하려니까 안됨
 const toDoList = localStorage.getItem("toDo");
 
 //createElement + appendChild 두개를 같이써야함
 const liTag = document.createElement("li");
 const delBtn = document.createElement("button");
 const newId = toDos.length;
 delBtn.innerHTML=` ✖`
 delBtn.addEventListener("click",activeDelBtn)
 toDoUl.appendChild(liTag);

 //그럼 li를 가져오는 선택자는 
 //그냥 liTag.innerHTML인가..
 liTag.innerHTML=text;
 liTag.appendChild(delBtn);
 //그렇다!!

 //+ todo를 배열로 만들고, li에 id추가하기(여기 좀어렵)
liTag.id = newId;
const toDoObj = {
    text:text,
    id:newId
}
toDos.push(toDoObj);
saveToDos(); 
}

// localStorage에서 저장된 todo 불러오기
function loadToDos(){
    const loadedToDos = localStorage.getItem("toDos");
    if(loadedToDos !== null)
    {
        const parsedToDos = JSON.parse(loadedToDos);
        //이부분 잘 이해가 안감.
        parsedToDos.forEach(function(things){
            //배열obj의 키값이 text이기때문에
            appendToDo(things.text);
        })

    }
}

//4. todo x클릭하면 없어지게
function activeDelBtn(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoUl.removeChild(li);
    const liIndex = parseInt(li.id);
    toDos.splice(liIndex,1);
    saveToDos();
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleToDoSubmit);
}

init();