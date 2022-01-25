import React from "react";
import Logo from "./logo";
import MenuBar from "./MenuBar";

class Header extends React.Component{
    state={
        searchTerm: '',
    }
    onChangeHandler = event => {
        this.setState({ searchTerm: event.target.value });
    }
    render(){
        return (
            <header className="section">
                <div className="container">
                    <input type="checkbox" className="menu-btn" id="menu-btn"/>
                    <label className="navbar-burger" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <Logo />
                    <ul className="navbar-menu">
                        <MenuBar />
                    </ul>
                    <input type="text" name="search" className="navbar-search" placeholder="أبحث عن ألفيلم أو ألمسلسل" onChange={this.onChangeHandler}/>
                </div>
            </header>
        )
    }
}

export default Header;