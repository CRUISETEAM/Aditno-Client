import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/find">
            <img 
              src="/images/logo.png" 
              alt="Aditno" 
              style={{ 
                width: '32px', 
                height: '30px',
                marginTop: '14px',
                marginLeft: '30px'
              }}
            />
          </Link>
        </div>
        <div className="nav-login">
          <nav className="nav">
            <Link to="/find"><h6>홈</h6></Link>
            <Link to="/here"><h6>여기있어요</h6></Link>
          </nav>
          <div className="login">
            <Link to="/login"><h6>로그인</h6></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;