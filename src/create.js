export function create(encoder, context, image, customImage, scaleFactor, side, clear) {
    encoder.setRepeat(0);
    encoder.setDelay(100);
    for(let j = 0; j < 3; j++){
        for(let i = 0; i < 360; i+=30) {
            clear(context);
            draw( i + 10 * j, context, image, customImage, scaleFactor, side);
            encoder.addFrame(context);
        }
    }
}

export function draw(frameNumber, context, image, customImage, scaleFactor, side) {
    if(customImage){
            context.drawImage(customImage, 0, 0, customImage.width, customImage.height, 112 * scaleFactor, 473 * scaleFactor, 598 * scaleFactor, 598 * scaleFactor);
    }
    drawBody(frameNumber, context, image, scaleFactor, side);
    context.drawImage(image, 0, 0, side, side, 0, 0, side * scaleFactor, side * scaleFactor);
    drawUrl(context, scaleFactor, side);
}

export function drawBody(frameNumber, context, image, scaleFactor, side) {
    const canvas = new OffscreenCanvas(side * scaleFactor, side * scaleFactor)
    const context2 = canvas.getContext('2d');
    context2.fillStyle = `hsl(${frameNumber}, 100%, 50%)`;
    context2.fillRect(0, 0, side, side);
    context2.globalCompositeOperation = "destination-in";
    context2.drawImage(image, side, 0, side, side, 0, 0, side * scaleFactor, side * scaleFactor);
    context2.globalCompositeOperation = "source-over";
    context.drawImage(canvas, 0, 0);
}

export function drawUrl(context, scaleFactor, side) {
    context.font = `${80 * scaleFactor}px ComicTypo`;
    context.textAlign = "center";
    context.fillStyle = "rgba(0, 0, 0, .5)";
    context.fillText("progredemente.com/camaleon", side * scaleFactor / 2 , 70 * scaleFactor);
}