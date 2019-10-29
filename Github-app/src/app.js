'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'


const App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos'
          title='Repositórios:'
          repos={[{
            name: "Nome do repositório",
            link: '#'
          }]} />

        <Repos
          className='starred'
          title='Favoritos:'
          repos={[{
            name: "Nome do repositório",
            link: '#'
          }]} />

      </div>
    )
  }
})

// padrão ecma script 2015
export default App