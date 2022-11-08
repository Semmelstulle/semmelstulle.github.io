window.onscroll = function() {stickyTopFunction()};

var header = document.getElementById("mainHeader");
var sticky = header.offsetTop;

function stickyTopFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
