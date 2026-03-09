const createElements= (arr) =>{
 const htmlElemeents= arr.map((el)=>`<span class="btn">${el}</span>`)
 console.log(htmlElemeents.join(" "));
};

const synonyms =["hello","hi", "know"];
createElements(synonyms);