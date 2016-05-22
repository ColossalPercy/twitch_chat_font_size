setTimeout(function(){
	$('a.button.glyph-only.float-left').last().after('<a class="button glyph-only float-left" title="Increase Font"><svg class="svg-plus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M6.321,6.314V1.25h3.358v5.064h5.071v3.359H9.679v5.076H6.321V9.674H1.25V6.314H6.321z" fill-rule="evenodd"></path></svg></a>');
	$('a.button.glyph-only.float-left').last().after('<a class="button glyph-only float-left" title="Decrease Font"><svg class="svg-minus" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M1.25,9.674V6.314h13.5v3.359H1.25z" fill-rule="evenodd"></path></svg></a>');

	var style = document.createElement("style");
	style.id = "change-chat-styles";
	document.head.appendChild(style);
	var node = document.createTextNode(".message,.from,.colon,.chat_text_input{font-size: 12px;}")
	style.appendChild(node);


	var size = 12;
	$('a.button.glyph-only.float-left').click(function(){
		if ($(this).attr("title") == "Increase Font" && size < 20) {
			size = size + 2;
		}
		else if ($(this).attr("title") == "Decrease Font" && size > 12) {
			size = size - 2;
		};
		style.innerHTML = ".message,.from,.colon,.chat_text_input{font-size: " + size + "px;)";
	});
}, 5000);