'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component{
    render (){
        return(
            <div className='container'>
                <Title name = 'narcizo' lastname='gabriel' />
            </div>
        )
    }
}

// const App = React.createClass({
//     render: function(){
//         return (
//         <div className='container'>
//             <Title name = 'narcizo' lastname='garbiel' />
//             <label htmlFor='input'>Input</label>
//             <input type='text' id='input'/>
//         </div>
//         )
//     }
// })

// padrão ecma script 2015
export default App