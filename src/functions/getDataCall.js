//입력된 링크를 전달하는 bridge function 
export default function getDataCall(link) {
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            console.log("###getDataCall android###");
            AndroidBridge.webImageCaptureFinish();      //이미지 완료되었다고 알림 
        } else if(window.isMobile.iOS()) {
            console.log("###getDataCall ios###");
            window.webkit.messageHandlers.webToApp.postMessage(link)
        }
    }
}