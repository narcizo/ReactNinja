'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Timer from './timer'

class App extends Component{
    constructor(){
        console.log('constructor')
        super()
        this.state = {
            time: 0,
            color: 'green',
            showTimer: true
        }
    }

    componentWillMount(){
        console.log('componentWillMount app')
    }

    componentDidMount(){
        console.log('componentDidMount app')
    }

    render (){
        console.log('render app')
        return(
            <div>
                <button onClick={() => {
                    this.setState({time: this.state.time + 10 })
                }}>Change Props</button>
                <Timer time={this.state.time}/>
            </div>
        )
    }
}

// padrão ecma script 2015
export default App