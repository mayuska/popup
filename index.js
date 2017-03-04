var popupTemplate = require('./createPopup');

var popUp;
var hash;
var overflow;
var popOpen = false;

/** OPEN PHOTO */

function openPopUp(popId, closeButton, template, hashUrl) {

    if (popOpen === true) { // exceptions
        throw 'error';
    }

    popUp = popupTemplate(popId);
    document.body.appendChild(popUp);

    // start overflow value. (Before changing it to hidden)
    // When popup is closed this value is returned to overflow
    overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    hash = hashUrl ? hashUrl : '';

    document.getElementsByClassName('popup-wrapper')[0].innerHTML = template;

    var closeBtn = document.getElementById(closeButton);
    closeBtn.addEventListener('click', closePopup, false);
    popOpen = true;
}

/** CLOSE PHOTO */

function closePopup(){
    document.body.removeChild(popUp);
    // returning overflow on start value (before opening popup)
    document.body.style.overflow = overflow;
    window.location.hash = hash;
    popOpen = false;
}

function esc(event) {
    var x = event.which || event.keyCode; // Get the unicode value
    if (x == 27) { // escape key
        closePopup();
    }

}
document.addEventListener('keydown', esc, false);

module.exports =
{
    open: openPopUp,
    close: closePopup
};