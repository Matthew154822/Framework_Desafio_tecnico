let num2 = 0;
let table;
let UserId;
let Id;
let title;
let template;
let array;
function adiciona(){
let num2 = JSON.parse(localStorage.getItem("num2"));
++num2;

fetch('https://jsonplaceholder.typicode.com/albums/'+num2)
.then(function (response){
    return response.json();
})
.then((response) => {
    table = document.querySelector('table');
    UserId = response.userId;
    Id = response.id;
    title = response.title;
    template = 
    `
    <tr>
      <td>${UserId}</td>
      <td>${Id}</td>
      <td>${title}</td>
    </tr> 
    `
    
    table.innerHTML += template;
    if(num2 == 1){
      array = [{UserId,Id,title}];
        console.log(array);
        localStorage.setItem('list2', JSON.stringify(array));
    }
    else{
      let array = JSON.parse(localStorage.getItem('list2'));
      let objeto = {UserId,Id,title};
      array.push(objeto);
      localStorage.setItem('list2', JSON.stringify(array));
      console.log(array);
    }
    localStorage.setItem('num2', JSON.stringify(num2));
} ) 
}

function remove(){
let list2 = JSON.parse(localStorage.getItem('list2'));
let num2 = JSON.parse(localStorage.getItem('num2'));  
list2.pop();
num2 = num2 - 1;
localStorage.setItem('list2', JSON.stringify(list2));
localStorage.setItem('num2', JSON.stringify(num2));
window.location.reload();
}

let i = 0;
function LocalS(){
let num2 = JSON.parse(localStorage.getItem("num2"));

if(num2 > 0){
while(i < num2){
table = document.querySelector('table');
let list2 = JSON.parse(localStorage.getItem('list2'));  

template = 
`
<tr>
<td>${list2[i].UserId}</td>
<td>${list2[i].Id}</td>
<td>${list2[i].title}</td>
</tr> 
`
table.innerHTML += template;
++i;
}
}
}


