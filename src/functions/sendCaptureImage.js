export default function sendCaptureImage() {
    return window.captureData;
    // if(window.isMobile.any()) {
    //     if(window.isMobile.Android()) {
    //         AndroidBridge.sendCaptureImage(window.captureData);
    //     } else if(window.isMobile.iOS()) {
    //     }
    // } else {
    //     console.log("SendCapture Image :::::::: ", window.captureData);
    //     return window.captureData;
    // }
}
