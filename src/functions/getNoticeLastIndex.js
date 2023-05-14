// 공유 관련 버튼 클릭 시 호출해야 하는 함수
export default function getNoticeLastIndex(message) {
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            AndroidBridge.sendCaptureImage(message);
        } else if(window.isMobile.iOS()) {
            return message
        }
    } else {
        console.log("getNoticeLastIndex :::::::: ", message);
        return message;
    }
}