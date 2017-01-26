(function(global) {

    global.triggerReflow = triggerReflow;
    document.getElementById('button').addEventListener('click', triggerReflow);

    function triggerReflow() {
        var textNode = document.getElementById('text');
        textNode.parentNode.removeChild(textNode);
    }
}(window));
