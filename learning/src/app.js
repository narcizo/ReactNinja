'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false
        }
    }
    render(){
        return (
            <div>
                <form>
                    <input type='text' value={this.state.value} onChange={(e) =>{
                        this.setState({
                            value: e.target.value
                        })
                    }} />

                    <label>
                        <input type='checkbox' value='my-checkbox' checked={this.state.checked}/>
                    </label>
                </form>
            </div>
        )
    }
}

// padrão ecma script 2015
export default App