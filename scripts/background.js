chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (/docs[.]google[.]com/.test(tab.url)) {
        chrome.pageAction.show(tab.id);
    }else{
        chrome.pageAction.hide(tab.id);
    }
})
