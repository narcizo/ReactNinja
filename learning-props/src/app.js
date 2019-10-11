'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component{
    render (){
        return(
            <div className='container'>
                {['blue', 'red', 'green'].map((square) => (
                    <Square key = {square} color = {square} />
                ))}
                <Square color = 'blue'/>
            </div>
        )
    }
}

// padrão ecma script 2015
export default App