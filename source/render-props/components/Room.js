// Core
import React, { Component } from 'react';

//Components
import Tracker from './Tracker';
import Animals from './Animals';

const Content = (props) => {
    return (
        <>
        <Animals.Tile {...props} />
        <Animals.Mouse {...props} />
        <Animals.Cat {...props} />
        </>
    )
}

export default class Room extends Component {
    render () {
        return (
            <div className = 'room'>
                <h1>Поиграем в кошки-мышки!!!</h1>
                <Tracker>
                {(props_coordinates) => {
                        return <Content {...props_coordinates} />
                    }}
                </Tracker>
            </div>
        );
    }
}
