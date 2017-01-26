(function(global) {

    global.onRepaint = onRepaint;
    document.getElementById('button').addEventListener('click', onRepaint);

    function onRepaint() {
        var textNode = document.getElementById('text');
        textNode.style.color = 'red';
    }
}(window));
