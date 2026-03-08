const btnAll=document.getElementById("btn-all")
const btnOpen=document.getElementById("btn-open")
const btnClosed=document.getElementById("btn-closed")

btnAll.addEventListener("click", function() {
    loadLevel("all");
});
 
btnOpen.addEventListener("click", function() {
const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
fetch(url)
 .then((res) => res.json())
.then((data) => {
    
    const openIssues = data.data.filter(issue => issue.status === 'open');

            displayLevel(openIssues);
        })
});
btnClosed.addEventListener("click", function() {
const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
fetch(url)
 .then((res) => res.json())
.then((data) => {

 const closedIssues = data.data.filter(issue => issue.status ==='closed');

            displayLevel(closedIssues);
        })
    })


const loadLevel=(id)=>{
 const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues `;
 fetch(url)
 .then((res)=> res.json())
 .then((data)=>displayLevel(data.data));
};
const loadDetail=(id)=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}`;
    console.log(url)
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
    card.innerHTML = `
     <div class="bg-white rounded-xl shadow-sm  py-10 px-10 space-y-4">
    <div class="flex justify-between text-center  items-center shad">
      <img src="./assets/Open-Status.png" alt="">
      <button class="bg-gray-200 shadow-xl">${word.priority}</button>
    </div>
        <h2 class="text-2xl font-bold">${word.title}</h2>
        <p>${word.description}</p>
        <div class="flex justify-between">
            <button onclick="loadDetail(${word.id})" class="btn bg-[#FDE68A] hover:bg-[rgba(253,230,138,0.5)]">Bug</button>
            <button  class="btn bg-[#FDE68A] hover:bg-[#FDE68A80]">help wanted</button>
        </div>
        <p>${word.author}</p>
        <p>${word.createdAt}</p>
     </div>
`;
        wordContainer.appendChild(card);
    });
};

// loadLevel();