function scrollContact(){

document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});

}

function sendMessage(){

let input=document.getElementById("chatInput");
let message=input.value;

let chat=document.getElementById("chatBody");

chat.innerHTML+= "<div>User: "+message+"</div>";

let reply="AI Assistant: Thank you for contacting AIRANDD.";

chat.innerHTML+= "<div>"+reply+"</div>";

input.value="";

}