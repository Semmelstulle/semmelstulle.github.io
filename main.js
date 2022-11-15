document.addEventListener('DOMContentLoaded', () => {
    const footerToHide = document.getElementById("footer");
    const xbtn = document.getElementById("footerx");
    xbtn.onclick = function () {
        footerToHide.style.display = "none";
    }
});
