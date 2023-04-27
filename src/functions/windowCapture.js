import html2canvas from 'html2canvas';
export default function windowCapture() {
    window.setTimeout(function(){
        html2canvas(document.getElementById("app")).then(canvas => {
            var extra_canvas = document.createElement("canvas");
            extra_canvas.setAttribute('width',canvas.width);
            extra_canvas.setAttribute('height',canvas.height);

            var ctx = extra_canvas.getContext('2d');
            ctx.drawImage(canvas,0,0,canvas.width, canvas.height,0,0,canvas.width + 10,canvas.height + 10);
            window.captureData =  extra_canvas.toDataURL();
            console.log("######### window.captureData #########")
            console.log(window.captureData)

            //window.getData('webImageCaptureFinish');
            //function호출
            getDataCall({
                 'func': 'webImageCaptureFinish'
             });

            //let webToAppUrl = {'func' : 'webImageCaptureFinish', 'callback' : 'null', 'param' : 'null'}
            //window.getData(webToAppUrl);
            //window.getData('webImageCaptureFinish');

        });
    }, 1000)

}
