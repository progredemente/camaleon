import React, { Component, createRef } from 'react';
import { Cropper } from 'react-cropper';
import './App.css';
import { GIFEncoder } from './GIFEncoder';
import 'cropperjs/dist/cropper.css';
import { Icon } from 'components/Icon';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            gif: null,
            face: null,
            crop: null,
            showModal: false
        }
        this.scaleFactor = .25;
        this.side = 1500;
        this.img = null;
        this.cropperRef = createRef();
    }

    componentDidMount(){
        this.img = new Image();
        this.img.src = './camaleon.png';
        this.img.onload = () => {
            this.setState({loaded: true});
            this.create();
        }
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
                this.clear(context, this.scaleFactor);
                this.draw( i + 10 * j, context, this.scaleFactor);
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
                    this.setState({face, showModal: true});
                }
            });
            fr.readAsDataURL(input.files[0]);
        }
        input.click();
    }

    hideModal = () => {
        let crop = new Image();
        crop.src = this.cropperRef.current.cropper.getCroppedCanvas().toDataURL();
        crop.onload = () => {
            this.setState({crop, showModal: false}, this.create);
        }
    }

    render() {
        return (
            <>
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
                                className="button"
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
                                        className="button"
                                        onClick={() => {
                                            this.setState({showModal: true});
                                        }}
                                    >
                                        Editar&nbsp;cara&nbsp;<Icon icon="E" />
                                    </div>
                                    <div
                                        className="button download"
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
                            <div
                                className={`modal${this.state.showModal ? "": " hidden"}`}
                                onClick={this.hideModal}
                                onMouseUp={() => {
                                    return false;
                                }}
                            >
                                <div
                                    className="modal-container"
                                    onClick={(evt) => {
                                        evt.stopPropagation();
                                    }}
                                >
                                    <div className="modal-title">Recortar imagen</div>
                                    <Cropper
                                        src={this.state.face.src}
                                        aspectRatio={1}
                                        style={{height: this.state.face.height * Math.min(this.state.face.width, window.innerWidth - 40) / this.state.face.width, width: Math.min(this.state.face.width, window.innerWidth - 40)}}
                                        zoomable={false}
                                        ref={this.cropperRef}
                                    />
                                    <div
                                        className="button"
                                        onClick={this.hideModal}
                                    >
                                        Aceptar
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </>
        )
    }
}

export default App;
