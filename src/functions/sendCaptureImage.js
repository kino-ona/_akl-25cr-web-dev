export default function sendCaptureImage() {
    window.windowCapture();
    if(window.isMobile.any()) {
        if(window.isMobile.Android()) {
            AndroidBridge.sendCaptureImage(window.captureData);
        } else if(window.isMobile.iOS()) {
            console.log("IOS Capture Image Data :::::::::::: ", window.captureData)
            return window.captureData
        }
    } else {
        console.log("Web Capture Image Data :::::::: ", window.captureData);
        return window.captureData;
    }
}
