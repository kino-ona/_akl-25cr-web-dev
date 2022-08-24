// 공유 관련 버튼 클릭 시 호출해야 하는 함수
// import sendMessage from './sendMessage';
export default function sendCaptureImage() {
    const captureData = sessionStorage.getItem("captureData");
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            AndroidBridge.sendCaptureImage(captureData);
        } else if(window.isMobile.iOS()) {
            return captureData;
        }
    } else {
        console.log("SendCapture Image :::::::: ", captureData);
        return captureData;
    }
}

