//check to see if twitch buttons have loaded
var count = 0;
function main(){
	var buttonExists = setInterval(function(){
		if ($('#increaseFont').length) {
			clearInterval(buttonExists);
			return;
		}
		if ($('.chat-buttons-container').length) { //if button is there
			$('a.button.button--icon-only.float-left').last().after('<a class="button button--icon-only float-left" id="increaseFont" title="Increase Font"><svg class="svg-plus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path d="M2,6.999h12v2H2V6.999z M7,1.999h2v12H7V1.999z"></path></svg></a>');
			$('a.button.button--icon-only.float-left').last().after('<a class="button button--icon-only float-left" id="decreaseFont" title="Decrease Font"><svg class="svg-minus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path d="M2,6.999h12v2H2V6.999z"></path></svg></a>');//add new buttons with svg images
			if ($('#change-chat-styles').length){
				clearInterval(buttonExists);
			} else {
				var style = document.createElement("style");
				style.id = "change-chat-styles";
				document.head.appendChild(style);
				var node = document.createTextNode(".message,.from,.colon,.chat_text_input{font-size: 12px;}");
				style.appendChild(node);//add style tag to head to change font size
			}
			clearInterval(buttonExists);//stop checking
			document.getElementById('increaseFont').addEventListener('click',increaseFont);
			document.getElementById('decreaseFont').addEventListener('click',decreaseFont);
		} else if (count < 30) {//limit checking to 150 (15secs)
			console.log("nope");
		} else {
			clearInterval(buttonExists);//stop checking
		}
		++count;
	}, 500);
}

//button functionality
var size = 12;
function increaseFont(){
	if (size < 20){
		size = size + 2;
		document.getElementById('change-chat-styles').innerHTML = ".message,.from,.colon,.chat_text_input{font-size: " + size + "px;)";
	}
}

function decreaseFont(){
	if (size > 12){
		size = size - 2;
		document.getElementById('change-chat-styles').innerHTML = ".message,.from,.colon,.chat_text_input{font-size: " + size + "px;)";
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == 'url_changed') {
    	main();
    }
});