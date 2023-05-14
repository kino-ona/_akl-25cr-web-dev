//입력된 링크를 전달하는 bridge function 
export default function getData(link) {
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            console.log("###android###");
            AndroidBridge.setData(link);
        } else if(window.isMobile.iOS()) {
            console.log("###ios###");
            window.webkit.messageHandlers.webToApp.postMessage(link)
        }
    }
}