const controlSpinner=(status)=>{
    if(status==true){
     document.getElementById("spinner").classList.remove("hidden")
     document.getElementById("word-container").classList.add("hidden")
    }

    else{
     document.getElementById("word-container").classList.remove("hidden")
     document.getElementById("spinner").classList.add("hidden")
    }
}
const btnAll=document.getElementById("btn-all")
const btnOpen=document.getElementById("btn-open")
const btnClosed=document.getElementById("btn-closed")

btnAll.addEventListener("click", function() {
    controlSpinner(true);
    btnAll.classList.add("btn-primary");
    btnOpen.classList.remove("btn-primary");
    btnClosed.classList.remove("btn-primary");
    loadLevel("all");
   
});
 
btnOpen.addEventListener("click", function() {
    controlSpinner(true);
    btnAll.classList.remove("btn-primary");
    btnOpen.classList.add("btn-primary");
    btnClosed.classList.remove("btn-primary");

const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
fetch(url)
 .then((res) => res.json())
.then((data) => {
    

    const openIssues = data.data.filter(issue => issue.status === 'open');
     
            displayLevel(openIssues);
             createNumber()
        })
});

btnClosed.addEventListener("click", function() {
    controlSpinner(true);
     btnAll.classList.remove("btn-primary");
    btnOpen.classList.remove("btn-primary");
    btnClosed.classList.add("btn-primary");
const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
fetch(url)
 .then((res) => res.json())
.then((data) => {

 const closedIssues = data.data.filter(issue => issue.status ==='closed');
            displayLevel(closedIssues);
            createNumber()
        })
    })

const numberContainer=document.getElementById("number-container")
const wordContainer= document.getElementById("word-container");
function createNumber(){
    numberContainer.innerText=wordContainer.children.length
}

const loadLevel=(id)=>{
    controlSpinner(true);
 const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues `;
 fetch(url)
 .then((res)=> res.json())
 .then((data)=>displayLevel(data.data))
};

// {
//     "id": 5,
//     "title": "Add user authentication system",
//     "description": "Implement JWT-based authentication with login, registration, and password reset functionality.",
//     "status": "open",
//     "labels": [
//         "enhancement"
//     ],
//     "priority": "high",
//     "author": "security_sam",
//     "assignee": "john_doe",
//     "createdAt": "2024-01-20T09:00:00Z",
//     "updatedAt": "2024-01-20T09:00:00Z"
// }

const loadDteails= async(id)=>{
     
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    const res= await fetch(url)
    const details=await res.json();
    displayDetail(details.data);
}
const displayDetail=(word)=>{
     console.log(word)
     const cardBox=document.getElementById("card-container");
     cardBox.innerHTML= `
      <div class="">
    <h1 class="text-3xl font-bold">.${word.title}</h1>
   </div>
   <div class="">
    <span class="text-xl bg-[#00A96E] text-[#FFFFFF] rounded-md">${word.status}</span>
    <span class="text-[#64748B]">  .Opened by Fahim Ahmed</span>
    <span class="text-[#64748B]"> ${word.updatedAt}</span>
   </div>
   <br>
    <div class=" flex gap-10">
    <button class="btn bg-[#FDE68A] hover:bg-[#FDE68A80]]">Bug</button>
    <button  class="btn bg-[#FDE68A] hover:bg-[#FDE68A80]">help wanted</button>
   </div>
   <br>
   <div class="">
    <h1 class="text-xl text-[#64748B]">${word.description}</h1>
   </div>
   <br>
     <div class="flex justify-between items-center">
      <div>
        <p class="text-[#64748B]">${word.author}</p>
        <h1 class=" font-bold">${word.assignee}</h1>
      </div>
    <div>
      <p class="text-[#64748B]">Priority:</p>
      <span class="bg-[#EF4444] text-white rounded-lg">${word.priority}</span>
    </div>
   </div>
     `;
     document.getElementById("my_modal").showModal();
}
    const displayLevel=(words)=>{
    const wordContainer= document.getElementById("word-container");
    wordContainer.innerHTML="";


//     {
//     "id": 44,
//     "title": "Add favorites/bookmarks feature",
//     "description": "Allow users to bookmark frequently accessed          pages or items for quick access.",
//     "status": "open",
//     "labels": [
//         "enhancement",
//         "good first issue"
//     ],
//     "priority": "low",
//     "author": "fav_frank",
//     "assignee": "",
//     "createdAt": "2024-02-07T10:30:00Z",
//     "updatedAt": "2024-02-07T10:30:00Z"
// }


    words.forEach((word)=>{
        // console.log(word)
        const card=document.createElement("div");

        card.onclick=()=>loadDteails(word.id)
        
      
    card.innerHTML = `
     <div class="bg-white rounded-xl shadow-sm  py-10 px-10 space-y-4">
    <div class="flex justify-between text-center  items-center shad">
      <img src="./assets/Open-Status.png" alt="">
      <button class="bg-gray-200 shadow-xl">${word.priority}</button>
    </div>
        <h2 class="text-2xl font-bold">${word.title}</h2>
        <p>${word.description}</p>
        <div class="flex justify-between">
            <button class="btn bg-[#FDE68A] hover:bg-[#FDE68A80]]">Bug</button>
            <button  class="btn bg-[#FDE68A] hover:bg-[#FDE68A80]">help wanted</button>
        </div>
        <p>${word.author}</p>
        <p>${word.createdAt}</p>
     </div>
`;
        wordContainer.appendChild(card);
    });
     controlSpinner(false);
     createNumber()
     
};

loadLevel();


document.getElementById("btn-issues").addEventListener("click",()=>{
 const input=document.getElementById("input-search")
 const searchValue = input.value.trim().toLowerCase();
//  console.log(searchValue);

 fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
  .then((res)=>res.json())
  .then((data) => {
     const allWords=data.data;
     console.log(allWords);
     const filterWords=allWords.filter((word)=>
    word.title.toLowerCase().includes(searchValue)
    )
   displayLevel(filterWords);
    
  });
});