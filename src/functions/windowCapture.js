import html2canvas from 'html2canvas';
export default function windowCapture() {
    window.setTimeout(function(){
        html2canvas(document.getElementById("app")).then(canvas => {
            window.captureData = canvas.toDataURL();
            console.log("window.captureData >>>>>>>>>>>>", window.captureData)
        });
    }, 1000)
}
