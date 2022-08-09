//입력된 링크를 전달하는 bridge function 
export default function getData(link) {
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            AndroidBridge.setData(link);
        } else if(window.isMobile.iOS()) {
            window.webkit.messageHandlers.webToApp.postMessage(link)
        }
    }
}