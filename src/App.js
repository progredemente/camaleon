import React, { Component } from 'react';
import './App.css';
import { GIFer } from 'components/GIFer';


class App extends Component {

    create(encoder, context, image, customImage, scaleFactor, side, clear) {
        encoder.setRepeat(0);
        encoder.setDelay(100);
        for(let j = 0; j < 3; j++){
            for(let i = 0; i < 360; i+=30) {
                clear(context);
                this.draw( i + 10 * j, context, image, customImage, scaleFactor, side);
                encoder.addFrame(context);
            }
        }
    }
    
    draw(frameNumber, context, image, customImage, scaleFactor, side) {
        if(customImage){
                context.drawImage(customImage, 0, 0, customImage.width, customImage.height, 112 * scaleFactor, 473 * scaleFactor, 598 * scaleFactor, 598 * scaleFactor);
        }
        this.drawBody(frameNumber, context, image, scaleFactor, side);
        context.drawImage(image, 0, 0, side, side, 0, 0, side * scaleFactor, side * scaleFactor);
        this.drawUrl(context, scaleFactor, side);
    }

    drawBody(frameNumber, context, image, scaleFactor, side) {
        let canvas = document.createElement('canvas');
        canvas.width = side * scaleFactor;
        canvas.height = side * scaleFactor;
        let context2 = canvas.getContext('2d');
        context2.fillStyle = `hsl(${frameNumber}, 100%, 50%)`;
        context2.fillRect(0, 0, side, side);
        context2.globalCompositeOperation = "destination-in";
        context2.drawImage(image, side, 0, side, side, 0, 0, side * scaleFactor, side * scaleFactor);
        context2.globalCompositeOperation = "source-over";
        context.drawImage(canvas, 0, 0);
    }

    drawUrl(context, scaleFactor, side) {
        context.font = `${80 * scaleFactor}px ComicTypo`;
        context.textAlign = "center";
        context.fillStyle = "rgba(0, 0, 0, .5)";
        context.fillText("progredemente.com/camaleon", side * scaleFactor / 2 , 70 * scaleFactor);
    }

    render() {
        return (
            <GIFer
                appId="camaleon"
                loadingImageUrl={`${process.env.RESOURCES_URL}/camaleon.png`}
                sourceImageUrl="./camaleon.png"
                title='Camaleón'
                create={this.create.bind(this)}

                lang='es'
                loadButtonText='Elegir&nbsp;cara'
                withCropper={true}
                editButtonText='Editar&nbsp;cara&nbsp;'
                defaultImgs={[
                    './macarena.jpg',
                    './echenique.jpg',
                    './toni_canto.jpg'
                ]}
                
            />
        )
    }
}

export default App;
