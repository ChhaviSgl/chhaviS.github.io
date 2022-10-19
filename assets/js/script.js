const sendButton = document.querySelector('.contactSend');
const outerContainer = document.querySelector('.popup-div');
const innerContainer = document.querySelector('.popup-div-content');

sendButton.addEventListener('click', function(event){
	event.preventDefault();
	outerContainer.style.display = "flex";
	innerContainer.style.opacity = 1;
	var name = document.querySelector('.name-text').value;
	var greeting = "Hello "+name+" your message has been sent!!";
	document.querySelector('.popup-div-content h1').innerHTML = "";
	document.querySelector('.popup-div-content h1').append(greeting);
});

function closepopup() 
{
	outerContainer.style.display = "none";
	innerContainer.style.opacity = 0;
}