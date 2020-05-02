import React from 'react';
import './Header.css';

function Header() {
    return (
        <div >
            {/* <nav className="navbar navbar-light" id="nav1">
                <a className="navbar-brand" href="#">
                    <img src={require("./mylist1.png")} width="70" height="70" alt="DOIT" />
                </a>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 id="mainTitle">
                            My List
            </h1>
                    </div>
                </div>
            </div> */}
            <nav className="navbar navbar-light" id="nav1">
            <h1 id="mainTitle">
                            My List
            </h1>
            </nav>
        </div>
    );
}
export default Header;