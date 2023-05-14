export default class isMobile {
    Android = function() { 
        return navigator.userAgent.match(/Android/i) == null ? false : true; 
    } 
    iOS = function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true; 
    }
    any = function() {
        return (this.Android() || this.iOS());
    }
};