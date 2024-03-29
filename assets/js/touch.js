var touch = document.getElementById("touch");
var debug = document.getElementById("debug");
var hammertime = new Hammer(document.body, {});
var ofLeft = touch.offsetLeft;
var ofTop = touch.offsetTop;

hammertime.get('pinchin').set({ enable: true });
hammertime.get('pinchout').set({ enable: true });
hammertime.on('pan pinch', function (event) {
    console.dir(touch.offsetLeft);
    touch.offsetLeft = ofLeft;

    let distance = event.distance;
    let additionalEvent = event.additionalEvent;
    console.log(additionalEvent, distance);
    // "panright" "panleft" "panup" "pandown"
    switch (additionalEvent) {
        case "panright":
            offsetLeft =  (distance + ofLeft)/2;
            touch.style.left = distance + ofLeft + "px";
            break;
        case "panleft":
            offsetLeft =  (distance - ofLeft)/2;
            touch.style.left = "-" + ofLeft-distance + "px";
            break;
            case "panup":
                touch.style.transform = "translateY(-" + distance + "px)"
                break;
            case "pandown":
                touch.style.transform = "translateY(-" + distance + "px)"
                break;
        default:
            break;
    }
});