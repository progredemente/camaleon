import React, { Component } from 'react';
import './App.css';
import { GIFer } from 'components/GIFer';
import { create, draw, drawBody, drawUrl } from './create';


class App extends Component {

    render() {
        return (
            <GIFer
                appId="camaleon"
                loadingImageUrl={`${process.env.RESOURCES_URL}/camaleon.png`}
                sourceImageUrl="./camaleon.png"
                title='Camaleón'
                create={create}
                deps={[draw, drawBody, drawUrl]}
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
