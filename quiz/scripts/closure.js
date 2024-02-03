function setColor() {
    let toggle = true; // Assuming toggle is meant to control whether the color change is allowed
    return function() {
        if (toggle) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    };
}

window.onload = function() {
    document.getElementById('btn').onclick = setColor();
}
