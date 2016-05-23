chrome.tabs.onUpdated.addListener(function(tabid, changeinfo, tab) {
    if (changeinfo.status == 'complete') {
        chrome.tabs.sendMessage(tabid, {
            method: 'url_changed'
        }, function(response) {});
    }
});