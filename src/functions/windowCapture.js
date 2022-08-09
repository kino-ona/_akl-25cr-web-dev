import html2canvas from 'html2canvas';
export default function windowCapture() {
    html2canvas(document.getElementById("captureArea")).then(canvas => {
        window.captureData = canvas.toDataURL();
    });
}
