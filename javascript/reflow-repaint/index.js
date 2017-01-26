(function(global) {

    global.onReflowRepaint = onReflowRepaint;
    document.getElementById('button').addEventListener('click', onReflowRepaint);

    function onReflowRepaint() {
        var textNode = document.getElementById('text');
        textNode.style.fontSize = '2em';
    }
}(window));
