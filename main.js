/*MDN check if storage API is available*/
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}



/*This makes sure any JS inside is run AFTER the website loaded*/
document.addEventListener('DOMContentLoaded', () => {
    
    /*Checks if there is a localStorage entry to hide the footer*/
    if (storageAvailable('localStorage')) {
      // Yippee! We can use localStorage awesomeness
        let isFooterHidden = localStorage.getItem('hiddenFooter');
        if (isFooterHidden == true) {
            footerToHide.style.display = "none";
        };
    } else {
    }
    /*This hides the footer when tapping the x*/
    const footerToHide = document.getElementById("footer");
    const xbtn = document.getElementById("footerx");
    xbtn.onclick = function () {
        footerToHide.style.display = "none";
        localStorage.setItem('hiddenFooter', true)
    }
});
