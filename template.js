function popupTemplate(popId) {

    var wrapper = document.createElement('div');
    wrapper.setAttribute('id', popId);
    wrapper.setAttribute('class', 'extend-popup-styles');
    wrapper.innerHTML = '<span id="close-popUp">&times;</span>\
                       <div class="popup-wrapper"></div>';

    return wrapper;
}

module.exports = popupTemplate;