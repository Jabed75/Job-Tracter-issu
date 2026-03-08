const loadLevelWord=(id)=>{
 const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues `;
 fetch(url)
 .then((res)=> res.json())
 .then((data)=>displayLevelword(data.data));
};
const displayLevelword=(words)=>{
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
        console.log(word)
        const card=document.createElement("div");
  card.innerHTML = `
 <div class="bg-white rounded-xl shadow-sm  py-10 px-10 space-y-4">
        <h2 class="text-2xl font-bold">${word.title}</h2>
        <p>${word.description}</p>
        <div class="flex justify-between">
            <button class="btn bg-[#FDE68A10] hover:bg-[#FDE68A80]">Bug</button>
            <button class="btn bg-[#FDE68A10] hover:bg-[#FDE68A80]">help wanted</button>
        </div>
        <p>#1 by john_doe</p>
        <p>${word.updatedAt}</p>
     </div>
`;
        wordContainer.appendChild(card);
    });
};

loadLevelWord();