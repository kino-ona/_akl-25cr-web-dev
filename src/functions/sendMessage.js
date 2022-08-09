// 공유 관련 버튼 클릭 시 호출해야 하는 함수
export default function sendMessage(message) {
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            Android.sendCaptureImage(message);
        } else if(window.isMobile.iOS()) {
            window.webkit.messageHandlers.webToApp.postMessage(message);
        }
    }
}