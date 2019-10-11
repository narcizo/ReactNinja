'use strict'

import React from 'react'
import title from './title'
import Title from './title'

const App = React.createClass({
    render: function(){
        return (
        <div className='container'>
            <Title name = 'narcizo' lastname='garbiel' />
            <label htmlFor='input'>Input</label>
            <input type='text' id='input'/>
        </div>
        )
    }
})

// padrão ecma script 2015
export default App