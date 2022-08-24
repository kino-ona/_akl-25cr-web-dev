export default function sendCaptureImage() {
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            AndroidBridge.sendCaptureImage(window.captureData);
        } else if(window.isMobile.iOS()) {
            return window.captureData;
        }
    } else {
        console.log("SendCapture Image :::::::: ", window.captureData);
        return window.captureData;
    }
}
