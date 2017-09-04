window.twttr.ready(function () {
    var popup = document.getElementById('popup');
    var tweetButton = document.getElementById('tweet');
    var tweetLink = 'https://twitter.com/intent/tweet?text=';
    var selection = '';

    document.addEventListener('mouseup', handleSelection);

    function handleSelection() {
        if (window.getSelection) {
            selection = window.getSelection();
        } else if (document.selection) {
            selection = document.selection.createRange();
        }

        if (selection.toString()) {
            var clientRect = selection.getRangeAt(0).getBoundingClientRect();
            showPopup(clientRect.left + clientRect.width / 2, clientRect.top);
        } else {
            hidePopup();
        }
    }

    function showPopup(mouseX, mouseY) {
        popup.style.opacity = 1;
        popup.style.left = mouseX - popup.offsetWidth / 2 + 'px';
        popup.style.top = mouseY - popup.offsetHeight - 5 + 'px';
        tweetButton.href = tweetLink + encodeURI(selection.toString());
    }

    function hidePopup() {
        popup.style.opacity = 0;
        popup.style.left = null;
        popup.style.top = null;
        tweetButton.href = '';
    }
});
