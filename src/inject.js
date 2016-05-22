//check to see if twitch buttons have loaded
var count = 0
var buttonExists = setInterval(function(){
	if ($('a.button.glyph-only.float-left').length) { //if button is there
		$('a.button.glyph-only.float-left').last().after('<a class="button glyph-only float-left" title="Increase Font"><svg class="svg-plus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M6.321,6.314V1.25h3.358v5.064h5.071v3.359H9.679v5.076H6.321V9.674H1.25V6.314H6.321z" fill-rule="evenodd"></path></svg></a>');
		$('a.button.glyph-only.float-left').last().after('<a class="button glyph-only float-left" title="Decrease Font"><svg class="svg-minus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M1.25,9.674V6.314h13.5v3.359H1.25z" fill-rule="evenodd"></path></svg></a>');//add new buttons with svg images
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