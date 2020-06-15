document.body.onload = function() {
    bike = document.getElementById('onload')
    bike.style["opacity"] = "0%";
}

document.onscroll = function() {
    flower = document.getElementById('backimage')
    var distToTop = window.pageYOffset/10;

    var message = (-distToTop + window.outerHeight/10).toString() + "px";
    flower.style["top"] = message;
}