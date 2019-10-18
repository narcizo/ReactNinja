'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App extends Component{
    constructor(){
        super()
        // único momento em que se seta o state inicial
        this.state = {
            text: 'Narcizo'
        }
    }
    render (){
        return(
            <div className='container' onClick={() => this.setState({
                text: 'Outro texto'
            })}>
                {this.state.text}
            </div>
        )
        // return(
        //     <div>
        //         <div className='container' onClick={(e) => {
        //             alert('clicou')
        //         }}>
        //             {['blue', 'red', 'green'].map((square, index) => (
        //                 <Square key = {index} color = {square} />
        //             ))}
        //         </div>
        //         <div className='container'>
        //             <LikeButton/>
        //         </div>
        //     </div>
        // )
    }
}

// padrão ecma script 2015
export default App