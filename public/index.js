window.onload = randomBackgroundColor();

function randomBackgroundColor() {

    minColor = 33;
    maxColor = 68;

    red = (maxColor - minColor)*Math.random() + minColor;
    green = (maxColor - minColor)*Math.random() + minColor;
    blue = (maxColor - minColor)*Math.random() + minColor;

    colorString = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = colorString;
}