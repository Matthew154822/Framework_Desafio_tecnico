let num = 0;
let table;
let UserId;
let Id;
let title;
let Body;
let template;
let array;
function adiciona(){
let num = JSON.parse(localStorage.getItem("num"));
++num;

fetch('https://jsonplaceholder.typicode.com/posts/'+num)
.then(function (response){
    return response.json();
})
.then((response) => {
  
    table = document.querySelector('table');
    UserId = response.userId;
    Id = response.id;
    title = response.title;
    Body = response.body;
    template = 
    `
    <tr>
      <td>${UserId}</td>
      <td>${Id}</td>
      <td>${title}</td>
      <td>${Body}</td>
    </tr> 
    `
    
    table.innerHTML += template;
    if(num == 1){
      array = [{UserId,Id,title,Body}];
        console.log(array);
        localStorage.setItem('list', JSON.stringify(array));
    }
    else{
      let array = JSON.parse(localStorage.getItem('list'));
      let objeto = {UserId,Id,title,Body};
      array.push(objeto);
      localStorage.setItem('list', JSON.stringify(array));
      console.log(array);
    }
    localStorage.setItem('num', JSON.stringify(num));
  

} ) 
}

function remove(){
let list = JSON.parse(localStorage.getItem('list'));
let num = JSON.parse(localStorage.getItem('num'));  
list.pop();
num = num - 1;
localStorage.setItem('list', JSON.stringify(list));
localStorage.setItem('num', JSON.stringify(num));
window.location.reload();
}


let i = 0;
function LocalS(){
let num = JSON.parse(localStorage.getItem("num"));

if(num > 0){
while(i < num){
table = document.querySelector('table');
let list = JSON.parse(localStorage.getItem('list'));  

template = 
  `
  <tr>
    <td>${list[i].UserId}</td>
    <td>${list[i].Id}</td>
    <td>${list[i].title}</td>
    <td>${list[i].Body}</td>
  </tr> 
  `
  table.innerHTML += template;
  ++i;
}
}
}
