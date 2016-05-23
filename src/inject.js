//check to see if twitch buttons have loaded
var count = 0
var buttonExists = setInterval(function(){
	if ($('a.button.glyph-only.float-left').length) { //if button is there
		$('a.button.glyph-only.float-left').last().after('<a class="button glyph-only float-left" title="Increase Font"><svg class="svg-plus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path d="M2,6.999h12v2H2V6.999z M7,1.999h2v12H7V1.999z"></path></svg></a>');
		$('a.button.glyph-only.float-left').last().after('<a class="button glyph-only float-left" title="Decrease Font"><svg class="svg-minus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path d="M2,6.999h12v2H2V6.999z"></path></svg></a>');//add new buttons with svg images
		var style = document.createElement("style");
		style.id = "change-chat-styles";
		document.head.appendChild(style);
		var node = document.createTextNode(".message,.from,.colon,.chat_text_input{font-size: 12px;}")
		style.appendChild(node);//add style tag to head to change font size
		clearInterval(buttonExists);//stop checking
	} else if (count < 150) {//limit checking to 150 (15secs)
		console.log("nope");
	} else {
		clearInterval(buttonExists);//stop checking
	}
	++count
}, 100);
//button functionality
var size = 12;
$('a.button.glyph-only.float-left').click(function(){//when button clicked
	if ($(this).attr("title") == "Increase Font" && size < 20) {
		size = size + 2;//if plus, increase fony by 2, limit to 20
	}
	else if ($(this).attr("title") == "Decrease Font" && size > 12) {
		size = size - 2;//if minus, crease font by 2, limit to 12
	};
	style.innerHTML = ".message,.from,.colon,.chat_text_input{font-size: " + size + "px;)";//modify style tag created earlier
});