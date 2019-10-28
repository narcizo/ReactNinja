'use strict'

import React from 'react'
import Search from './components/search'

const App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <Search />

        <div className='user-info'>
          <img src='https://avatars2.githubusercontent.com/u/13771978?v=4' />
          <h1 className='username'>
            <a href='https://github.com/narcizo'>
              Narcizo Gabriel
                        </a>
          </h1>

          <ul className='repos-info'>
            <li>- Repositórios: 15</li>
            <li>- Seguidores: 10</li>
            <li>- Seguindo: 8</li>
          </ul>
        </div>

        <div className='actions'>
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className='repos'>
          <h2>Repositórios:</h2>
          <ul>
            <li><a href='#'>Nome do repositório</a></li>
            <li><a href='#'>Nome do repositório</a></li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Favoritos:</h2>
          <ul>
            <li><a href='#'>Nome do repositório</a></li>
            <li><a href='#'>Nome do repositório</a></li>
          </ul>
        </div>

      </div>
    )
  }
})

// padrão ecma script 2015
export default App