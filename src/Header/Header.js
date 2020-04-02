import React from 'react';
import './Header.css';

function Header() {
    return (
        <div >
            <nav className="navbar navbar-light" id="nav1">
                <a className="navbar-brand" href="#">
                    <img src={require("./mylist1.png")} width="70" height="70" alt="DOIT" />
                </a>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 id="mainTitle">
                            My List
            </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;