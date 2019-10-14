'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App extends Component{
    render (){
        return(
            <div className='container' onClick={(e) => {
                alert('clicou')
            }}>
                {['blue', 'red', 'green'].map((square, index) => (
                    <Square key = {index} color = {square} />
                ))}
                <LikeButton/>
            </div>
        )
    }
}

// padrão ecma script 2015
export default App