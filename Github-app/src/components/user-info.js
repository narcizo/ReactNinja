'use strict'

import React from 'react'

const UserInfo = () => (
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
)

export default UserInfo