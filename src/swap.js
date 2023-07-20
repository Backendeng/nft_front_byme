import React, { useEffect, useState } from "react"

import "https://www.googletagmanager.com/gtag/js?id=G-B5JJP7FY91"
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'https://cdn.jsdelivr.net/npm/web-vitals@2.1.2/dist/web-vitals.js';
import { Link } from "react-router-dom";

const Swap = () => {

    const [DLflag, setDLflag] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#200945');
    const [color, setColor] = useState('white');

    const handleClick = () => {
        setDLflag(!DLflag)
        if (DLflag) {
            setBackgroundColor('#200945');
            setColor('white')
        }
        else {
            setBackgroundColor('#f7f4ff');
            setColor("black")
        }
    };
    useEffect(() => {

    })
    return (
        // <h1>sdds</h1>
        <div style={{ backgroundColor }}>
            <div className=" darkmode-trigger uk-position-bottom-right uk-position-small uk-position-fixed uk-box-shadow-large uk-radius-circle" data-darkmode-toggle="">
                <label className="switch">
                    {/* <button onClick={handleClick}>Click</button> */}
                    <span className="sr-only">Dark mode toggle</span>
                    <div>
                        {DLflag ? <button type="button" onClick={handleClick} class="btn btn-light" data-mdb-ripple-color="dark">
                            <svg
                                class="moon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button> : <button type="button" onClick={handleClick} class="btn btn-light" data-mdb-ripple-color="dark">
                            <svg
                                class="sun"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                                    fill="currentColor"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>}
                    </div>
                    {/* <input type="checkbox" /> */}
                    {/* <span className="slider"></span> */}
                </label>
            </div>

            <div id="uni_mobile_menu" className="uni-mobile-menu uk-offcanvas" data-uk-offcanvas="mode: push; overlay: true; flip: true; selPanel: .uk-offcanvas-bar-panel;">
                <div className="uk-offcanvas-bar-panel uk-panel dark:uk-background-gray-100">
                    <div className="uni-mobile-menu-wrap uk-flex-column uk-flex-between" data-uk-height-viewport="offset-bottom: true;">
                        <div className="uni-mobile-menu-content">
                            <header className="uk-card uk-card-2xsmall uk-flex-middle uk-flex-between">
                                <div className="uk-flex-1">
                                    <button aria-label="Close Menu" className="uk-offcanvas-close uk-button uk-button-small uk-button-icon uk-button-default uk-button-outline uk-radius-circle" type="button">
                                        <i className="uk-icon-small" data-feather="arrow-left"></i>
                                    </button>
                                </div>
                                <div>
                                    <h5 className="uk-h5 uk-text-uppercase uk-margin-remove">Navigation</h5>
                                </div>
                                <div className="uk-flex-1"></div>
                            </header>
                            <hr className="uk-margin-remove" />
                            <div className="uk-card uk-card-small">
                                <div className="uk-panel">
                                    <ul className="uk-nav uk-nav-default">
                                        <li className="uk-nav-header">Homepages</li>
                                        <li><a href="landing-01.html">Landing 01</a></li>
                                        <li><a href="landing-02.html">Landing 02</a></li>
                                        <li><a href="landing-03.html">Landing 03</a></li>
                                        <li><a href="landing-04.html">Landing 04</a></li>
                                        <li><a href="landing-05.html">Landing 05</a></li>
                                        <li className="uk-nav-header">Inner pages</li>
                                        <li><a href="base.html">Base components</a></li>
                                        <li><a href="connect-wallet.html">Connect wallet</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="404.html">404 page</a></li>
                                        <li><a href="coming-soon.html">Coming soon</a></li>
                                        <li className="uk-nav-header">Content &amp; Privacy</li>
                                        <li><a href="terms.html">Terms of use</a></li>
                                        <li><a href="privact.html">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="uni_connect_wallet" className="uk-dark uk-modal-full" data-uk-modal>
                <div className="uk-modal-dialog">
                    <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport="">
                        <div className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden" data-src="assets/images/gradient-01.png" data-uk-img></div>
                        <div className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible" data-src="assets/images/gradient-01.png" data-uk-img></div>
                    </div>
                    <button className="uk-modal-close-full uk-close-large uk-position-small" type="button" data-uk-close></button>
                    <div className="uk-container">
                        <div className="uk-grid uk-flex-center uk-flex-middle uk-child-width-1-2@m uk-section" data-uk-grid data-uk-height-viewport>
                            <div>
                                <div className="uk-panel uk-text-center" >
                                    <h2 className="uk-h5 uk-h3@s uk-h2@l uk-margin-remove">Connect your wallet</h2>
                                    <div className="uk-grid uk-grid-xsmall uk-grid-small@m uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m" data-uk-grid="">
                                        <div>
                                            <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                                <a href="#metamask" className="uk-position-cover"></a>
                                                <img src="assets/images/icon-metamask.svg" alt="metamask" />
                                                <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">Metamask</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                                <a href="#bitgo" className="uk-position-cover"></a>
                                                <img src="assets/images/icon-bitgo.svg" alt="bitgo" />
                                                <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">BitGo</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                                <a href="#trustwallet" className="uk-position-cover"></a>
                                                <img src="assets/images/icon-trustwallet.svg" alt="trustwallet" />
                                                <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">Trust Wallet</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-radius-medium uk-radius-large@m uk-box-shadow-hover-small hover:uk-border-primary">
                                                <a href="#coinbase" className="uk-position-cover"></a>
                                                <img src="assets/images/icon-coinbase.svg" alt="coinbase" />
                                                <h4 className="uk-text-bold uk-h5@m uk-margin-small-top uk-margin-medium-top@m">Coinbase</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap">
                <header className="uni-header uk-position-top uk-dark" style={{ color: '#7b7583' }}>
                    <div className="uni-header-navbar" data-uk-sticky="top: 70; show-on-up: false; animation: uk-animation-slide-top" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 0;">
                        <div className="uk-container">
                            <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                                <div className="uk-navbar-top" style={{ color: '#7b7583' }}>
                                    <div className="uk-navbar-left">
                                        <img src="https://cdn.discordapp.com/attachments/1129749362461913159/1129821912466460853/logo1.png" style={{ marginRight: '-2rem', marginTop: '-0.5rem' }} alt="logo" width="40" height="440" />
                                        <a style={{ color }} className="uk-logo uk-navbar-item uk-h4 uk-h3@m uk-margin-remove" href="./"> Sano Swap </a>
                                    </div>

                                    <div className="uk-navbar-right uk-flex-1 uk-flex-right">
                                        <ul style={{ color }} className="uk-navbar-nav dark:uk-text-gray-10 uk-visible@m" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 80" data-uk-navbar-bound>
                                            <li style={{ color }}><a href="#uni_minting" >Swap</a></li>
                                            <li style={{ color }}><a href="#uni_about">About</a></li>
                                        </ul>
                                        <div className="uk-navbar-item">
                                            <ul className="uk-subnav uk-subnav-small uk-visible@m">
                                                <li style={{ color }}>
                                                    <a href=""><i className="uk-icon uk-icon-medium unicon-logo-twitter dark:uk-text-gray-10"></i></a>
                                                </li>
                                            </ul>

                                            <a href="#uni_connect_wallet" className="uk-button uk-button-medium@m uk-button-default uk-button-outline uk-margin-left uk-visible@l" data-uk-toggle="">
                                                <span style={{ color }}>Connect wallet</span>
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
                {/* Header end */}
                <style dangerouslySetInnerHTML={{ __html: "\n.dark:uk-background-dark-5 {\n background-color: #1c1c1c;\n\n" }} />

                <div id="uni_hero" className="uni-hero uk-section uk-section-xlarge uk-padding-remove-bottom uk-panel">
                    <div className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay" data-uk-height-viewport="">
                        <img className="uk-position-top-left uk-position-fixed uk-blur-large" style={{ left: "-4%", top: " -4%" }} width="500" src="assets/images/gradient-circle.svg" alt="Circle" />
                        <img className="uk-position-bottom-right uk-position-fixed uk-blur-large" style={{ right: "-4%", bottom: "-4%" }} width="500" src="assets/images/gradient-circle.svg" alt="Circle" />
                    </div>
                    <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport="">
                        <div className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden" data-src="assets/images/gradient-01.png" data-uk-img></div>
                        <div className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible" data-src="assets/images/gradient-01.png" data-uk-img></div>
                    </div>
                    <div className="uk-panel uk-position-z-index">
                        <div className="uk-container">
                            <div className="uk-panel">
                                <div className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between" data-uk-grid data-uk-height-viewport="offset-top: true; offset-bottom: 20;">
                                    <div className="uk-width-5-12@m">
                                        <div className="uk-panel uk-position-z-index uk-text-center uk-text-left@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                            <img className="uk-position-top-left" width="44" src="assets/images/objects/ethereum-01.png" alt="object" style={{ top: '-20', left: ' 50%' }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                            <img className="uk-position-left" width="16" src="assets/images/objects/circle-01.png" alt="object" style={{ top: '16%', left: '-16%' }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;" />
                                            <img className="uk-position-bottom-left" width="24" src="assets/images/objects/circle-03.png" alt="object" style={{ bottom: "-16%", left: "16%" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 440;" />
                                            <h4 className="uk-h4 uk-margin-small uk-margin@m margintopplss" style={{ color }}>Swap your NFTs in a safe and secure way, your way!</h4>
                                            <p className="uk-text-xlarge uk-width-xlarge@m uk-text-muted">Sano Swap provides a secure escrow to let you swap your NFTs with others. At no point in time does sano or anyone else have access to your NFTs or funds.</p>
                                            <Link to="/swap" className="uk-button uk-button-medium@m uk-button-gradient uk-margin-small-top" >
                                                <span>Swap Now</span>
                                                <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                            </Link>
                                            {/* <a href="swap.html" className="uk-button uk-button-medium@m uk-button-gradient uk-margin-small-top">
                                                <span>Swap Now</span>
                                                <i className="uk-icon-small unicon-arrow-right uk-text-bold"></i>
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="uk-width-6-12@m uk-flex-center">
                                        <div className="uk-panel" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                                            <img className="uk-position-left uk-text-primary" width="44" src="assets/images/objects/bitcoin-01.png" alt="object" style={{ top: '75%', left: '-20%' }} data-uk-svg="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;" />
                                            <img className="uk-position-right" width="28" src="assets/images/objects/x.png" alt="object" style={{ top: "-4%", right: "16%" }} data-uk-svg="" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 480;" />
                                            <div className="uk-grid uk-grid-xlarge uk-child-width-1-2" data-uk-grid="masonry: true;" style={{ width: '250%', height: '250%', marginLeft: '5rem' }}>
                                                <div>
                                                    <div className="uni-item uk-card uk-overflow-hidden uk-radius uk-radius-large@m uk-box-shadow-hover-medium uk-visible-toggle uk-transition-toggle">
                                                        <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                            <div className="uk-panel uk-image-middle floating">
                                                                <img id="idklol" src="https://cdn.discordapp.com/attachments/1129749362461913159/1129833235581517885/Screenshot_238-removebg-preview.png" alt="Artwork" className="uk-radius-large" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uni-brands uk-padding-3xlarge-top uk-padding-medium-bottom uk-padding-remove-top@m uk-padding-xlarge-bottom@m uk-panel uk-overflow-hidden" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;">
                    <div className="uk-container uk-container-small">
                        <div className="uk-panel uk-text-center dark:uk-text-white">
                            <header className="uk-panel uk-flex-center uk-flex-middle uk-text-center">
                                <span className="uk-text-overline uk-text-bold uk-text-muted">Powered by amazing investors:</span>
                            </header>
                            <div className="uk-grid uk-grid-xlarge@m uk-child-width-1-2 uk-child-width-expand@m uk-flex-middle uk-flex-center uk-grid uk-margin-medium-top" data-uk-grid>
                                <div><img className="uk-width-xsmall" src="assets/images/wallets/wallet-01.svg" alt="Metamask" data-uk-svg /></div>
                                <div><img className="uk-width-xsmall" src="assets/images/wallets/wallet-02.svg" alt="BitGo" data-uk-svg /></div>
                                <div><img className="uk-width-xsmall" src="assets/images/wallets/wallet-03.svg" alt="Coinbase" data-uk-svg /></div>
                                <div><img className="uk-width-xsmall" src="assets/images/wallets/wallet-04.svg" alt="Trust Wallet" data-uk-svg /></div>
                                <div><img className="uk-width-xsmall" src="assets/images/wallets/wallet-05.svg" alt="Exodus" data-uk-svg /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m" src="assets/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 100;" />
                <div id="uni_minting" className="uni-minting uk-section uk-section-xlarge@m uk-panel">
                    <div className="uk-container uk-container-small">
                        <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                            <div className="uk-panel uk-text-center">
                                <h2 className="uk-h3 uk-h1@m" style={{ color }}>How to swap</h2>
                            </div>
                        </header>
                        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;" style={{ color }}>
                            <img className="uk-position-top-left uk-text-secondary" width="16" src="assets/images/objects/circle-01.png" alt="Object" style={{ top: '-16%', left: ' 8%' }} />
                            <img className="uk-position-bottom-right uk-text-primary" width="24" src="assets/images/objects/circle-02.png" alt="Object" style={{ bottom: '16%', right: '-8%' }} />
                            <img className="uk-position-bottom-left uk-text-muted" width="28" src="assets/images/objects/x.png" alt="Object" style={{ bottom: '16%', left: '-8%' }} />
                            <div className="uk-grid uk-child-width-1-2@s uk-grid-match" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);" >
                                <div>
                                    <div className="uk-dark uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                                            <div className="uk-width-1-3 uk-width-1-4@m">
                                                <img src="assets/images/icon-01.png" alt="Icon" />
                                            </div>
                                            <div className="uk-panel uk-width-expand">
                                                <h3 style={{ color }} className="uk-h5 uk-h4@m" >Connect your wallet</h3>
                                                <p>Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-dark uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                                            <div className="uk-width-1-3 uk-width-1-4@m">
                                                <img src="assets/images/icon-02.png" alt="Icon" />
                                                <div hidden className="uk-card uk-card-xsmall uk-radius-medium uk-background-gradient uk-flex-middle uk-flex-center uk-margin-medium-bottom@m">
                                                    <i className="uk-icon-medium uk-icon-medium@m unicon-select-window"></i>
                                                </div>
                                            </div>
                                            <div className="uk-panel uk-width-expand">
                                                <h3 style={{ color }} className="uk-h5 uk-h4@m">Create your trade</h3>
                                                <p>Upload your NFTs and set a title, description and price.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-dark uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                                            <div className="uk-width-1-3 uk-width-1-4@m">
                                                <img src="assets/images/icon-03.png" alt="Icon" />
                                                <div hidden className="uk-card uk-card-xsmall uk-radius-medium uk-background-gradient uk-flex-middle uk-flex-center uk-margin-medium-bottom@m">
                                                    <i className="uk-icon-medium uk-icon-medium@m unicon-select-window"></i>
                                                </div>
                                            </div>
                                            <div className="uk-panel uk-width-expand">
                                                <h3 style={{ color }} className="uk-h5 uk-h4@m">Confirm transaction</h3>
                                                <p>Wait for the blockchain confirmations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-dark uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <div className="uk-grid uk-grid-medium@m" data-uk-grid="">
                                            <div className="uk-width-1-3 uk-width-1-4@m">
                                                <img src="assets/images/icon-04.png" alt="Icon" />
                                                <div hidden className="uk-card uk-card-xsmall uk-radius-medium uk-background-gradient uk-flex-middle uk-flex-center uk-margin-medium-bottom@m">
                                                    <i className="uk-icon-medium uk-icon-medium@m unicon-select-window"></i>
                                                </div>
                                            </div>
                                            <div className="uk-panel uk-width-expand">
                                                <h3 style={{ color }} className="uk-h5 uk-h4@m">Receive your NFTs</h3>
                                                <p>Once the transaction is confirmed,partner nfts will be available in your wallet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m" src="assets/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" />
                <div id="uni_numbers" className="uni-numbers uk-section uk-section-large@m">
                    <div className="uk-container">
                        <div className="uk-panel">
                            <img className="uk-position-bottom-left uk-text-secondary uni-animation-delay-large" width="32" src="assets/images/objects/bitcoin-01.png" alt="Object" style={{ bottom: "-32%", left: '30%' }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                            <img className="uk-position-top-right" width="24" src="assets/images/objects/ethereum-01.png" alt="Object" style={{ top: "-25%", right: "25%" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                            <div className="uk-grid uk-grid-large uk-grid-2xlarge@m uk-child-width-expand@m uk-text-center uk-text-muted" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);">
                                <div>
                                    <div className="uk-panel">
                                        <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">4,500+</h4>
                                        <span>Succesfully Swaps</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-panel">
                                        <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">20,000+</h4>
                                        <span>Wallet Connects.</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-panel">
                                        <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">2.5x</h4>
                                        <span>Faster than normal swap sites</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m" src="assets/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 400;" />
                <div id="uni_about" className="uni-about uk-section uk-section-xlarge@m uk-panel">
                    <div className="uk-container">
                        <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <div className="uk-panel uk-text-center">
                                <h2 className="uk-h3 uk-h1@m" style={{ color }}>About our Platform</h2>
                            </div>
                        </header>
                        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                            <div className="uk-grid uk-grid-2xlarge uk-grid-3xlarge@m uk-child-width-1-1" data-uk-grid="">
                                <div>
                                    <div className="uk-panel">
                                        <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m" data-uk-grid="">
                                            <div>
                                                <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;">
                                                    <img src="assets/images/features-03.png" alt="Swap Your NFTs fast & secure" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-panel" data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;" style={{ color }}>
                                                    <span className="uk-text-overline uk-text-gradient">Swap and Trade</span>
                                                    <h3 className="uk-h3 uk-h1@m" style={{ color }}>Swap Your NFTs fast & secure</h3>
                                                    <p className="uk-text-large@m">Swap your NFTs with other users in a secure and fast way. We use the latest technology to make sure your NFTs are safe.</p>
                                                    <div className="uk-grid uk-grid-large@m uk-grid-match uk-child-width-1-2 uk-margin-large-top@m" data-uk-grid="">
                                                        <div>
                                                            <div className="uk-panel">
                                                                <h5 style={{ color }} className="uk-h4 uk-h2@m uk-margin-xsmall">4,500+</h5>
                                                                <span className="uk-text-small@m"
                                                                >NFTs Swapped.</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="uk-panel">
                                                                <h5 style={{ color }} className="uk-h4 uk-h2@m uk-margin-xsmall">5.2x</h5>
                                                                <span className="uk-text-small@m">Value Increased.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-panel">
                                        <div className="uk-grid uk-grid-3xlarge@m uk-flex-middle uk-child-width-1-2@m" data-uk-grid="">
                                            <div>
                                                <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-large@m" data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;">
                                                    <img src="assets/images/features-02.png" alt="Swap Your NFTs fast & secure" />
                                                </div>
                                            </div>
                                            <div className="uk-flex-first@m">
                                                <div className="uk-panel" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;">
                                                    <span className="uk-text-overline uk-text-gradient">Sync and Track</span>
                                                    <h3 style={{ color }} className="uk-h3 uk-h1@m">Sync and Track your NFTs</h3>
                                                    <p style={{ color }} className="uk-text-large@m">Sync your NFTs from different platforms and track their value in real time. We use the latest technology to make sure your NFTs are safe.</p>
                                                    <div className="uk-grid uk-grid-large@m uk-grid-match uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m" data-uk-grid="">
                                                        <div>
                                                            <div className="uk-panel">
                                                                <div className="uk-grid uk-grid-xsmall uk-grid-small@m" data-uk-grid="">
                                                                    <div>
                                                                        <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                                                            <i className="uk-icon-small uk-icon-medium@m unicon-select-02 uk-text-white"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <span style={{ color }} className="uk-text-small@m"
                                                                        >Sync your NFTs from <br />
                                                                            different platforms</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="uk-panel">
                                                                <div className="uk-grid uk-grid-xsmall uk-grid-small@m" data-uk-grid="">
                                                                    <div>
                                                                        <div className="uk-card uk-card-xsmall uk-radius-medium uk-radius-large@m uk-background-gradient uk-flex-middle uk-flex-center">
                                                                            <i className="uk-icon-small uk-icon-medium@m unicon-select-window uk-text-white"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <span style={{ color }} className="uk-text-small@m"
                                                                        >Track the value of your
                                                                            NFTs in real time</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m" src="assets/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; translateY:[-24, 0]; onview: true; delay: 100;" />
                <div id="uni_faq" className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m">
                    <div className="uk-container">
                        <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <div className="uk-panel">
                                <h2 className="uk-h3 uk-h1@m" style={{ color }}>FAQ</h2>
                            </div>
                        </header>
                        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                            <ul className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto uk-box-shadow-xsmall dark:uk-background-white-5" data-uk-accordion="collapsible: false" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                <li>
                                    <a className="uk-accordion-title uk-h5@m" href="#" style={{ color, textDecoration: 'none' }}>What is Sano Swap?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">A trustless p2p OTC NFT trading protocol focused on security and community.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">How does it work?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">Please read our How To Trade and check our Discord.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">Which browser is best to use and can we use on mobile?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">Sano Swap is responsive and works on all browsers but we do recommend Chrome on PC.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">Which wallet can I use to trade?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">You are able to use Metamask, Coinbase, Wallet Connect, and Fortmatic. New wallets will continue to be added in the future.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">Should I speed up trx to make the trade?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">We recommend applying the gas amount suggested from the wallet you are trading with and check current gas prices (gwei) at EthGasStation website.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">What is the Service fee?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">There is a flat fee of 0.01 ETH (or 5 MATIC) when bartering NFT for NFT or a 0.5% fee only to the counterparty when in the situation native tokens are involved in the deal. *Because every trx is onchain there will also need to be paid a gas amount for the approval of NFTs, cancel, and closing of a trade.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">What are Creator Fees?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">Sano Swap uses the Manifold royalty registry standard which most other NFT markets use and through this system creators of collections can establish their own on-chain royalty %. Meaning creators will earn that revenue % every time their NFT's are sold through any of the registered markets.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">I can’t find the trade which I created or which I want to close?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">Go to Your Hub & Trades page and there you can find all deals including the pending ones.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">I am trying to trade an NFT which is in my wallet but I do not see it in the list of collections?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">If you cannot find the collection of NFTs which you are trying to trade then you can manually add it by inputting the Collection Address in the Add NFT Collection box.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">Can I cancel a trade?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">Yes, any party now can cancel a trade but before the counterparty Trader of the deal closes it.</p>
                                    </div>
                                </li>

                                <li>
                                    <a style={{ color, textDecoration: 'none' }} className="uk-accordion-title uk-h5@m" href="#">Are ERC20 supported?</a>
                                    <div className="uk-accordion-content uk-padding-small-bottom">
                                        <p className="uk-text-small uk-text-large@m uk-text-muted">No, currently we support only native tokens. New token announcements will be made once available.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m" src="assets/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" />
                <div className="uni-cta uk-section uk-section-2xlarge@m uk-panel uk-overflow-hidden">
                    <img className="uk-cover uk-opacity-10" data-uk-cover src="assets/images/collection-cta.png" alt="arrow" />
                    <div className="uk-container">
                        <div className="uk-card uk-flex-center uk-text-center">
                            <div className="uk-panel uk-width-xlarge@m uk-position-z-index" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                <img className="uk-position-top-left" width="24" src="assets/images/objects/circle-01.png" alt="Object" style={{ top: "0%", left: "-16%" }} />
                                <img className="uk-position-bottom-right" width="24" src="assets/images/objects/x.png" alt="Object" style={{ bottom: "16%", right: "-8%" }} />
                                <img className="uk-position-top-right" width="40" src="assets/images/objects/ethereum-02.png" alt="Object" style={{ top: "0%", right: "-16%" }} />
                                <img className="uk-position-bottom-left" width="48" src="assets/images/objects/bitcoin-01.png" alt="Object" style={{ bottom: '16%', left: "-8%" }} />
                                <h2 className="uk-h3 uk-heading-d1@m" style={{ color }}>Let's start swapping</h2>
                                <a href="#" className="uk-button uk-button-small uk-button-large@m uk-button-gradient uk-margin-small-top uk-margin-large-top@m">Swap Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto uk-margin-medium uk-margin-large@m" src="assets/images/divider-01.svg" alt="Divider" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;" />
            </div >
            <footer className=" uni-footer uk-section uk-section-xlarge@m uk-dark ">
                <div className="uk-container">
                    <div className="uk-panel">
                        <img className="uk-position-top-left" width="32" src="assets/images/objects/ethereum-01.png" alt="object" style={{ top: "32%", left: "16%" }} />
                        <img className="uk-position-top-right" width="16" src="assets/images/objects/x.png" alt="object" style={{ top: ' 8%', right: '16%' }} />
                        <img className="uk-position-bottom-right" width="16" src="assets/images/objects/circle-01.png" alt="object" style={{ bottom: "24%", right: '40%' }} />
                        <img className="uk-position-bottom-left" width="24" src="assets/images/objects/circle-03.png" alt="object" style={{ bottom: "-8%", left: "30%" }} />
                        <div className="uk-grid uk-flex-center uk-text-center" data-uk-grid>
                            <div className="uk-width-large@m">
                                <div className="uk-panel">
                                    <a href="./" className="uk-logo">
                                        <h1>Sano Swap</h1>
                                    </a>
                                    <p className="uk-text-xlarge@m uk-margin-medium-top@m" style={{ color }}>We make it easy to swap your NFTs for other NFTs or ETH.</p>
                                    <ul className="uk-subnav uk-subnav-small uk-flex-center uk-text-gray-40 uk-margin-top uk-margin-medium-top@m">
                                        <li>
                                            <a href="#"><span className="uk-icon uk-icon-medium unicon-logo-twitter dark:uk-text-gray-10"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="uk-margin-medium uk-margin-3xlarge-top@m" />
                        <div className="uk-panel uk-text-small">
                            <div className="uk-grid uk-child-width-auto@m uk-flex-center uk-flex-between@m uk-text-center uk-text-left@m" data-uk-grid>
                                <div>
                                    <ul className="uk-subnav uk-subnav-small uk-text-muted uk-flex-center">
                                        <li><a href="privacy.html">Privacy policy</a></li>
                                        <li><a href="terms.html">Terms of use</a></li>
                                        <li className="uk-margin-small-left">
                                            <a href="#" data-uk-totop="" data-uk-scroll><i className="uk-icon uk-icon-small unicon-chevron-up"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="uk-flex-first@m uk-flex-center">
                                    <p className="uk-text-muted">© <script>document.write(new Date().getFullYear())</script> Sano Swap. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Swap;