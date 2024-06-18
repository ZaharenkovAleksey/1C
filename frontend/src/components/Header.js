import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>Корзина</li>
          
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>

       <img width="90px" src="https://upload.wikimedia.org/wikipedia/commons/0/06/1c%28copy%29.png"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
            <img width="90px" src="https://upload.wikimedia.org/wikipedia/commons/0/06/1c%28copy%29.png"></img>
    </div>

  );
}

export default Header;