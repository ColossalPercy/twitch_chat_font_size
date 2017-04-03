var count = 0;
//chrome.storage.sync.clear();
var setSize;

main();
function main(){
	chrome.storage.sync.get("tcfs_size", function(result) {
		setSize = result.tcfs_size;
		console.log(setSize);
		if (typeof setSize === "undefined") {
			setSize = 13.3333;
			console.log("no size stored.")
		} else {
			console.log("loaded size as " + setSize);
		}
	});


	var buttonExists = setInterval(function(){
		if ($('#increaseFont').length) {
			clearInterval(buttonExists);
			return;
		}
		if ($('.chat-buttons-container').length) { //if button is there
			$('a.button.button--icon-only.float-left').last().after('<a class="button button--icon-only float-left" id="increaseFont" title="Increase Font"><span class="ember-view"><figure class="icon"><svg class="svg-plus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path d="M2,6.999h12v2H2V6.999z M7,1.999h2v12H7V1.999z"></path></svg></figure></span></a>');
			$('a.button.button--icon-only.float-left').last().after('<a class="button button--icon-only float-left" id="decreaseFont" title="Decrease Font"><span class="ember-view"><figure class="icon"><svg class="svg-minus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path d="M2,6.999h12v2H2V6.999z"></path></svg></figure></span></a>');//add new buttons with svg images
			if ($('#change-chat-styles').length){
				clearInterval(buttonExists);
			} else {
				var style = document.createElement("style");
				style.id = "change-chat-styles";
				document.head.appendChild(style);
				var node = document.createTextNode(".message,.from,.colon,.chat_text_input{font-size: " + setSize + "px;}");
				style.appendChild(node);//add style tag to head to change font size
			}
			clearInterval(buttonExists);//stop checking
			document.getElementById('increaseFont').addEventListener('click',increaseFont);
			document.getElementById('decreaseFont').addEventListener('click',decreaseFont);
		} else if (count < 30) {//limit checking to 150 (15secs)
			console.log("Could not load Twitch Chat Font Size.");
		} else {
			clearInterval(buttonExists);//stop checking
		}
		++count;
	}, 500);
}

//button functionality
function increaseFont(){
	if (setSize < 20){
		setSize = setSize + 2;
		document.getElementById('change-chat-styles').innerHTML = ".message,.from,.colon,.chat_text_input{font-size: " + setSize + "px;)";
		chrome.storage.sync.set({"tcfs_size": setSize});
	}
}

function decreaseFont(){
	if (setSize > 12){
		setSize = setSize - 2;
		document.getElementById('change-chat-styles').innerHTML = ".message,.from,.colon,.chat_text_input{font-size: " + setSize + "px;)";
		chrome.storage.sync.set({"tcfs_size": setSize});
	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == 'url_changed') {
    	main();
    }
});
