(function(global) {

    global.onReflow = onReflow;
    document.getElementById('button').addEventListener('click', onReflow);

    function onReflow() {
        var textNode = document.getElementById('text');
        textNode.parentNode.removeChild(textNode);
    }
}(window));
