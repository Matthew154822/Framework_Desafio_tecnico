let num3 = 0;
let table;
let UserId;
let Id;
let title;
let template;
let completed;
let array;
function adiciona(){
let num3 = JSON.parse(localStorage.getItem("num3"));
++num3;

fetch('https://jsonplaceholder.typicode.com/todos/'+num3)
.then(function (response){
    return response.json();
})
.then((response) => {
    table = document.querySelector('table');
    UserId = response.userId;
    Id = response.id;
    title = response.title;
    completed = response.completed;
    template = 
    `
    <tr>
      <td>${UserId}</td>
      <td>${Id}</td>
      <td>${title}</td>
      <td>${completed}</td>
    </tr> 
    `
    
    table.innerHTML += template;
    if(num3 == 1){
      array = [{UserId,Id,title,completed}];
        console.log(array);
        localStorage.setItem('list3', JSON.stringify(array));
    }
    else{
      let array = JSON.parse(localStorage.getItem('list3'));
      let objeto = {UserId,Id,title,completed};
      array.push(objeto);
      localStorage.setItem('list3', JSON.stringify(array));
      console.log(array);
    }
    localStorage.setItem('num3', JSON.stringify(num3));
} ) 
}

function remove(){
let list3 = JSON.parse(localStorage.getItem('list3'));
let num3 = JSON.parse(localStorage.getItem('num3'));  
list3.pop();
num3 = num3 - 1;
localStorage.setItem('list3', JSON.stringify(list3));
localStorage.setItem('num3', JSON.stringify(num3));
window.location.reload();
}

let i = 0;
function LocalS(){
let num3 = JSON.parse(localStorage.getItem("num3"));

if(num3 > 0){
while(i < num3){
table = document.querySelector('table');
let list3 = JSON.parse(localStorage.getItem('list3'));  

template = 
`
<tr>
<td>${list3[i].UserId}</td>
<td>${list3[i].Id}</td>
<td>${list3[i].title}</td>
<td>${list3[i].completed}</td>
</tr> 
`
table.innerHTML += template;
++i;
}
}
}


