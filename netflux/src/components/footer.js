import React from "react";
import Logo from "./logo";
import MenuBar from "./MenuBar";

const Footer = () => {
        return (
            <footer className="section">
                <div className="container">
                    <section className="footer-nav" role="navigation">
                        <Logo classes="grayscale"/>
                        <div className="navbar-menu">
                            <ul className="navbar-menu">
                                <MenuBar />
                            </ul>
                        </div>
                        <a href="#/" className="logout">تسجيل الخروج</a>
					</section>
				</div>
			</footer>
        )
}

export default Footer;