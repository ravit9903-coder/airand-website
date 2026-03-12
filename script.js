function scrollContact(){

document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});

}


function sendMessage(){

let input=document.getElementById("chat-input")

let msg=input.value

let chat=document.getElementById("chat-body")

chat.innerHTML += "<div>User: "+msg+"</div>"

chat.innerHTML += "<div>AI: Welcome to AIRANDD</div>"

input.value=""

}


particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3}
}

});