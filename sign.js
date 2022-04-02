document.querySelector("#btno").addEventListener('click',myfunc)
function myfunc(){
    console.log("hello")
document.querySelector(".container").classList.add("active");
}

document.querySelector(".closebtn").addEventListener('click',function(){
document.querySelector(".container").classList.remove("active");
})
document.querySelector('#submitbtn').addEventListener('click',signdata);
// document.querySelector("form").addEventListener('submit',myfunction)
var userData=JSON.parse(localStorage.getItem('userCreds'))||[]
function signdata(){
event.preventDefault();
var userObj={
  name:document.querySelector("#name").value,
  email:document.querySelector("#email").value,
  number:document.querySelector("#number").value,
  
}

userData.push(userObj);
console.log(userData)
localStorage.setItem('userCreds',JSON.stringify(userData));
}