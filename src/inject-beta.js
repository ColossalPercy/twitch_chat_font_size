/*jshint esversion: 6 */
function betaSite() {
    var setSize;
    var loaded;
    var config = {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
    };
    const htmlStrucP = `
		<button class="tw-button-icon" id="increaseFont">
			<span class="tw-button-icon__icon">
				<figure class="svg-figure">
					<svg class="svg svg--inherit" height="16" viewbox="0 0 16 16" width="16">
						<path d="M2,6.999h12v2H2V6.999z M7,1.999h2v12H7V1.999z"></path>
					</svg>
				</figure>
			</span>
		</button>
	`;
    const htmlStrucM = `
		<button class="tw-button-icon" id="decreaseFont">
			<span class="tw-button-icon__icon">
				<figure class="svg-figure">
					<svg class="svg svg--inherit" height="16" viewbox="0 0 16 16" width="16">
						<path d="M2,6.999h12v2H2V6.999z"></path>
					</svg>
				</figure>
			</span>
		</button>
	`;

    chrome.storage.sync.get("tcfs_size", function(result) {
        setSize = result.tcfs_size;
        if (typeof setSize === "undefined") {
            setSize = 13.3333;
            console.log("No size stored.");
        } else {
            console.log("Loaded size as " + setSize);
        }
    });

    var buttonsLoaded = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var chatSelector = $('.chat-buttons-container');
            if (chatSelector.length > 0) {
                buttonsLoaded.disconnect();
                loaded = true;
            }
        });
        if (loaded) {
            addButton();
            chatReload.observe($('title')[0], config);
            console.log('Font size buttons loaded.');
        }
    });
    buttonsLoaded.observe($("body")[0], config);

    var chatReload = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log(mutation);
            if ($('#increaseFont').length === 0) {
                addButton();
            }
        });
    });

    function addButton() {
        $('.chat-buttons-container > div').append(htmlStrucP);
        document.getElementById('increaseFont').addEventListener('click', increaseFont);
        $('.chat-buttons-container > div').append(htmlStrucM);
        document.getElementById('decreaseFont').addEventListener('click', decreaseFont);
        $('.chat-list').css('font-size', setSize);
    }
    //button functionality
    function increaseFont() {
        if (setSize < 20) {
            setSize = setSize + 2;
            $('.chat-list').css('font-size', setSize);
            chrome.storage.sync.set({
                "tcfs_size": setSize
            });
        }
    }

    function decreaseFont() {
        if (setSize > 12) {
            setSize = setSize - 2;
            $('.chat-list').css('font-size', setSize);
            chrome.storage.sync.set({
                "tcfs_size": setSize
            });
        }
    }
}
