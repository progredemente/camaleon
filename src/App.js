import React, { Component, createRef } from 'react';
import './App.css';
import { GIFEncoder } from 'components/GIFEncoder';
import { Icon } from 'components/Icon';
import { ImageCropperModal } from 'components/ImageCropperModal';
import { AppsBar } from 'components/AppsBar';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            gif: null,
            face: null,
            crop: null
        }
        this.scaleFactor = .25;
        this.side = 1500;
        this.img = null;
        this.cropperModalRef = createRef();
    }

    componentDidMount(){
        this.img = new Image();
        this.img.src = './camaleon.png';
        this.img.onload = () => {
            this.setState({loaded: true});
            this.create();
        }
    }

    setCrop(crop) {
        this.setState({crop}, this.create);
    }

    create() {
        let encoder = new GIFEncoder();
        encoder.setRepeat(0);
        encoder.setDelay(100);
        encoder.start();
        let canvas = document.createElement('canvas');
        canvas.width = this.side * this.scaleFactor;
        canvas.height = this.side * this.scaleFactor;
        let context = canvas.getContext('2d', { willReadFrequently: true });
        for(let j = 0; j < 3; j++){
            for(let i = 0; i < 360; i+=30) {
                this.clear(context);
                this.draw( i + 10 * j, context);
                encoder.addFrame(context);
            }
        }
        encoder.finish();
        let binaryGif = encoder.stream().getData();
        this.setState({ gif: `data:image/gif;base64,${window.btoa(binaryGif)}`})
    }

    
    draw(frameNumber, context) {
        if(this.state.crop){
                context.drawImage(this.state.crop, 0, 0, this.state.crop.width, this.state.crop.height, 112 * this.scaleFactor, 473 * this.scaleFactor, 598 * this.scaleFactor, 598 * this.scaleFactor);
        }
        this.drawBody(frameNumber, context);
        context.drawImage(this.img, 0, 0, this.side, this.side, 0, 0, this.side * this.scaleFactor, this.side * this.scaleFactor);
        this.drawUrl(context, this.scaleFactor);
    }

    drawBody(frameNumber, context) {
        let canvas = document.createElement('canvas');
        canvas.width = this.side * this.scaleFactor;
        canvas.height = this.side * this.scaleFactor;
        let context2 = canvas.getContext('2d');
        context2.fillStyle = `hsl(${frameNumber}, 100%, 50%)`;
        context2.fillRect(0, 0, this.side, this.side);
        context2.globalCompositeOperation = "destination-in";
        context2.drawImage(this.img, this.side, 0, this.side, this.side, 0, 0, this.side * this.scaleFactor, this.side * this.scaleFactor);
        context2.globalCompositeOperation = "source-over";
        context.drawImage(canvas, 0, 0);
    }

    drawUrl(context) {
        context.font = `${80 * this.scaleFactor}px ComicTypo`;
        context.textAlign = "center";
        context.fillStyle = "rgba(0, 0, 0, .5)";
        context.fillText("progredemente.com/camaleon", this.side * this.scaleFactor / 2 , 70 * this.scaleFactor);
    }

    clear(context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, this.side * this.scaleFactor, this.side * this.scaleFactor);
    }

    download() {
        let link = document.createElement('a');
        link.download = 'camaleon.gif';
        link.href = this.state.gif;
        link.click();
    }

    upload() {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/png, image/jpeg';
        input.onchange = () => {
            let fr = new FileReader();
            fr.addEventListener('load', (e) => {
                let face = new Image();
                face.src = e.target.result;
                face.onload = () => {
                    this.setState({face}, () => {
                        this.cropperModalRef.current.showModal();
                    });
                }
            });
            fr.readAsDataURL(input.files[0]);
        }
        input.click();
    }

    render() {
        return (
            <AppsBar current='camaleon'>
                {
                    !this.state.loaded &&
                    <div className="loading">
                        <img src={`${process.env.RESOURCES_URL}/camaleon.png`} alt="Cargando" />
                        Cargando
                    </div>
                }
                {
                    this.state.loaded && this.state.gif &&
                    <div className="app">
                        <div
                            className="title"
                        >
                            <img
                                src="./camaleon.png"
                                alt="Camaleón"
                            />
                            <div>por <a href="/" target="_blank">progredemente</a></div>
                        </div>
                        <img
                            src={this.state.gif}
                            alt="gif"
                            className="gif"
                        />
                        <div className="buttons">
                            <div
                                className="prg-button"
                                onClick={() => {
                                    this.upload()
                                }}
                            >
                                Elegir&nbsp;cara&nbsp;<Icon icon="F" />
                            </div>
                            {
                                this.state.face &&
                                <>
                                    <div
                                        className="prg-button"
                                        onClick={() => {
                                            this.cropperModalRef.current.showModal();
                                        }}
                                    >
                                        Editar&nbsp;cara&nbsp;<Icon icon="E" />
                                    </div>
                                    <div
                                        className="prg-button download"
                                        onClick={() => {
                                            this.download()
                                        }}
                                    >
                                        Descargar&nbsp;<Icon icon="D" />
                                    </div>
                                </>
                            }
                        </div>
                        {
                            this.state.face && 
                            <ImageCropperModal
                                setCrop={(crop) => this.setCrop(crop)}
                                face={this.state.face}
                                ref={this.cropperModalRef}
                            />
                        }
                    </div>
                }
            </AppsBar>
        )
    }
}

export default App;
