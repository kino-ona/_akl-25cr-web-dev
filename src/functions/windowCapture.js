import html2canvas from 'html2canvas';
export default function windowCapture() {
    html2canvas(document.getElementById("app")).then(canvas => {
        sessionStorage.setItem("captureData", canvas.toDataURL());
    });
}
