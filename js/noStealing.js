document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        alert("No stealing");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        alert("No stealing");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        alert("No stealing");
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        alert("No stealing");
        return false;
    }
} 