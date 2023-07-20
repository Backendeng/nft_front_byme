import React from "react";

const Header = () => {
    return (
        <>
            <header className="uni-header uk-position-top">
                <div className="uni-header-navbar" data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 0;">
                    <div className="uk-container">
                        <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                            <div className="uk-navbar-top">
                                <div className="uk-navbar-left">
                                    <img src="https://cdn.discordapp.com/attachments/1129749362461913159/1129821912466460853/logo1.png" style={{ marginRight: '-2rem', marginTop: '-0.5rem' }} alt="logo" width="40" height="440" />
                                    <a className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="./"> Sano Swap </a>
                                </div>

                                <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                                    <ul className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80" data-uk-navbar-bound>
                                        <li><a href="#uni_minting">Swap</a></li>
                                        <li><a href="#uni_about">About</a></li>
                                    </ul>
                                    <div className="uk-navbar-item">
                                        <ul className="uk-subnav uk-subnav-small uk-visible@m">
                                            <li>
                                                <a href=""><i className="uk-icon uk-icon-medium unicon-logo-twitter dark:uk-text-gray-10"></i></a>
                                            </li>
                                        </ul>

                                        <a href="#uni_connect_wallet" className="uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left uk-visible@l" data-uk-toggle="">
                                            <span>Connect wallet</span>
                                        </a>
                                    </div>

                                    <div className="uk-navbar-item uk-hidden@m">
                                        <a style={{ position: 'absolute', top: '15px', right: '20px' }} href="#" className="uk - button uk- button - medium@m uk-button-icon uk-hidden@m uk-margin-small-right" data-uk-toggle="">
                                            <i className="uk-icon uk-icon-medium unicon-logo-twitter dark:uk-text-gray-10"></i>
                                        </a>
                                        <a style={{ position: 'absolute', top: '15px', right: '-20px' }} href="#uni_connect_wallet" className="uk - button uk- button - medium@m uk-button-icon uk-hidden@m uk-margin-small-right" data-uk-toggle="">
                                            <i className="uk-icon unicon-wallet"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div >
            </header >
        </>
    )
}
export default Header;