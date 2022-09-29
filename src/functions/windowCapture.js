import html2canvas from 'html2canvas';
export default function windowCapture() {
    window.setTimeout(function(){
        html2canvas(document.getElementById("app")).then(canvas => {
            var extra_canvas = document.createElement("canvas");
            extra_canvas.setAttribute('width',canvas.width);
            extra_canvas.setAttribute('height',canvas.height);

            var ctx = extra_canvas.getContext('2d');
            ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,canvas.width - 5,canvas.height - 5);
            window.captureData =  extra_canvas.toDataURL();
            console.log("######### window.captureData #########")
            console.log(window.captureData)
        });
    }, 1000)
}
