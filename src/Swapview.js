import React, { useState, useEffect } from 'react';
import "https://www.googletagmanager.com/gtag/js?id=G-B5JJP7FY91"
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'https://cdn.jsdelivr.net/npm/web-vitals@2.1.2/dist/web-vitals.js';

const SwapView = () => {
    const [DLflag, setDLflag] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#200945');
    const [color, setColor] = useState('white');
    const [Swapflag, setSwapflag] = useState(true);

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
    const SwapView = () => {
        setSwapflag(!Swapflag)
    }
    useEffect(() => {

    })

    return (
        <div style={{ backgroundColor, height: '1200px' }}>
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
                {/* <header className="uni-header uk-position-top uk-dark" style={{ color: '#7b7583' }}>
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
                </header > */}
                {/* Header end */}
                <style dangerouslySetInnerHTML={{ __html: "\n.dark:uk-background-dark-5 {\n background-color: #1c1c1c;\n\n" }} />
                <div id="uni_hero" className="uni-hero uk-section uk-section-xlarge uk-padding-remove-bottom uk-panel">
                    <div className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay" data-uk-height-viewport>
                        <img className="uk-position-top-left uk-position-fixed uk-blur-large" style={{ left: '-4%', top: '-4%' }} width={500} src="assets/images/gradient-circle.svg" alt="Circle" />
                        <img className="uk-position-bottom-right uk-position-fixed uk-blur-large" style={{ right: '-4%', bottom: '-4%' }} width={500} src="assets/images/gradient-circle.svg" alt="Circle" />
                    </div>
                    <div className="uk-position-top uk-position-z-index-negative" data-uk-height-viewport>
                        <div className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden" data-src="assets/images/gradient-01.png" data-uk-img />
                        <div className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible" data-src="assets/images/gradient-01.png" data-uk-img />
                    </div>
                    {/* ... existing code ... */}
                    <div id="uni_newsletter" className="uni-newsletter uk-section uk-section-xlarge@m uk-panel" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;">
                        <div className="uk-width-expand@m" id="tab_content">
                            <div className="uk-container">
                                {Swapflag ?
                                    <div className="container tab-content" id="normal_trades">
                                        <div className="mb-8 flex flex-wrap items-center justify-between">
                                            <ul className="flex flex-wrap items-center">
                                                <h2 className="text-center font-display text-3xl dark:text-white" style={{ color }}>
                                                    Open Swaps
                                                </h2>
                                            </ul>
                                            <div className="dropdown my-1 cursor-pointer menu" style={{ marginTop: '30px' }} >
                                                <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <a style={{ textDecoration: 'none !important' }} id="create_swaps" data-tab="create_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500  dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                        <span style={{ color: 'black' }}>Create Swaps</span>
                                                    </a>
                                                </div>
                                                <div className="transition-colors hover:border-transparent hover:bg-accent hover:text-white inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <a style={{ textDecoration: 'none !important' }} id="normal_trades" data-tab="normal_trades" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                        </svg>
                                                        <span style={{ color: 'blue' }}>Open Swaps</span>
                                                    </a>
                                                </div>
                                                <div className="transition-colors hover:border-transparent hover:bg-accent hover:text-white inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <a style={{ textDecoration: 'none !important' }} id="recent_swaps" data-tab="recent_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                        </svg>
                                                        <span style={{ color: 'black' }}>Recent Swaps</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-2lg border border-jacarta-100 bg-white p-8 dark:border-jacarta-600 dark:bg-jacarta-700">
                                            <div className="mb-8 sm:flex sm:flex-wrap">
                                                {/* Highest bid */}
                                                <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                                                    <figure className="relative">
                                                        <a href="item.html">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 5" width={150} height={150} load="lazy" style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
                                                        </a>
                                                        <div className="top-3 right-3 flex items-center space-x-1 rounded-md">
                                                            <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                                                                <span className="text-sm text-jacarta-400 dark:text-jacarta-300">From </span>
                                                                <h4 className="text-sm text-jacarta-400" style={{ color: 'black' }}>0x695d2ef170ce69e794707eeef9497af2de25df82</h4>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                                {/* Countdown */}
                                                <div className="sm:w-1/2 sm:pr-4 lg:pr-8" style={{ marginBottom: '15px' }} id="fuckindian">
                                                    <figure className="relative">
                                                        <a href="item.html">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_7.jpg" alt="item 5" width={150} height={150} load="lazy" style={{ objectFit: 'cover', borderRadius: '0.5rem' }} />
                                                        </a>
                                                        <div className="top-3 right-3 flex items-center space-x-1 rounded-md">
                                                            <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                                                                <span className="text-sm text-jacarta-400 dark:text-jacarta-300">From </span>
                                                                <h4 className="text-sm text-jacarta-400" style={{ color: 'black' }}>0x695d2ef170ce69e794707eeef9497af2de25df82</h4>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <style dangerouslySetInnerHTML={{ __html: "\n@media (max-width: 579px) {\n#fuckindian{\n margin-top: 50px\nmargin-bottom: 30px\n}\n }\n" }} />
                                            </div>
                                            <button className="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" onClick={SwapView}>View</button>
                                            {/* <a href="#" id="view_trades_button" data-tab="view_trades" className="inline-block w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">View</a> */}
                                        </div>
                                    </div> :
                                    <div className="container tab-content" id="view_trades">
                                        <div className="mb-8 flex flex-wrap items-center justify-between">
                                            <ul className="flex flex-wrap items-center">
                                                <h2 className="text-center font-display text-3xl dark:text-white" style={{ color }}>
                                                    Open Swaps
                                                </h2>
                                            </ul>
                                            <div className="dropdown my-1 cursor-pointer menu">
                                                <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <a style={{ textDecoration: 'none !important' }} id="create_swaps" data-tab="create_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                        <span style={{ color: 'black' }}>Create Swaps</span>
                                                    </a>
                                                </div>
                                                <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <a style={{ textDecoration: 'none !important' }} id="normal_trades" data-tab="normal_trades" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                        </svg>
                                                        <span style={{ color: 'black' }}>Open Swaps</span>
                                                    </a>
                                                </div>
                                                <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <a style={{ textDecoration: 'none !important' }} href="#" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                            <path fill="none" d="M0 0H24V24H0z" />
                                                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                        </svg>
                                                        <span style={{ color: 'black' }}>Recent Swaps</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-8 flex flex-wrap items-center justify-between" style={{ marginTop: '6%' }}>
                                            <ul className="flex flex-wrap items-center">
                                                <h2 className="text-center font-display text-3xl dark:text-white" style={{ color }}>
                                                    From: 0x122c...a4f3
                                                </h2>
                                            </ul>
                                            <div className="dropdown my-1 cursor-pointer">
                                                <div className="inline-flex w-38 items-center justify-between">
                                                    <div className="text-center">
                                                        <button className="inline-block square-full bg-accent py-2 px-4 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark rounded-lg" onClick={SwapView}>Back</button>
                                                        {/* <a id="normal_trades" data-tab="normal_trades" className="inline-block square-full bg-accent py-2 px-4 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark rounded-lg">Back</a> */}
                                                    </div>
                                                </div>
                                                <div className="inline-flex w-38 items-center justify-between">
                                                    <div className="text-center ml-2">
                                                        <button className="inline-block square-full bg-accent py-2 px-4 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark rounded-lg">Accept Swap</button>
                                                        {/* <a href="#" className="inline-block square-full bg-accent py-2 px-4 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark rounded-lg">Accept Swap</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="button button-area mt-4">
                                            <style dangerouslySetInnerHTML={{ __html: "\n@media (max-width: 1025px) { \n.offeringitem{\nmargin-left: 0 !important;\nmargin-top: calc(70px + 2rem);\n  }\n                                      #offering{\n position: absolute\nfloat: left !important;\nmargin-top: 22rem !important\n }\n.mdrr{\n width: 175px !important;\n height: 260px !important;\n  }\n}\n " }} />
                                            {/* TODO: ici */}
                                            <h2 className="text-2xl font-semibold text-jacarta-700 dark:text-white" style={{ color }}>Requesting</h2>
                                            <h2 className="text-2xl font-semibold text-jacarta-700 dark:text-white text-white" style={{ float: 'right', marginTop: '-2rem', color }} id="offering">Offering</h2>
                                        </div>
                                        <br />
                                        <div className="grid grid-cols-2 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4" style={{ width: '90%' }}>
                                            <article>
                                                <div className="mdrr block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                    <figure className="relative">
                                                        <a href="item.html">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 5" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                        </a>
                                                        <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                            <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                                </svg>
                                                            </span>
                                                            <span style={{ color: '#000' }} className="text-sm">15</span>
                                                        </div>
                                                    </figure>
                                                    <div className="mt-7 flex items-center justify-between">
                                                        <a href="item.html">
                                                            <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white text-white">NFT Name</span>
                                                        </a>
                                                        <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                            <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                                    <circle cx={2} cy={2} r={2} />
                                                                    <circle cx={8} cy={2} r={2} />
                                                                    <circle cx={14} cy={2} r={2} />
                                                                </svg>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions">
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    New bid
                                                                </button>
                                                                <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Refresh Metadata
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Share
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Report
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-sm">
                                                        <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">NFT name</span>
                                                        <span className="text-jacarta-500 dark:text-jacarta-300">2/8</span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article>
                                                <div className="mdrr block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                    <figure className="relative">
                                                        <a href="item.html">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 4" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                        </a>
                                                        <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                            <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                                </svg>
                                                            </span>
                                                            <span style={{ color: '#000' }} className="text-sm">188</span>
                                                        </div>
                                                    </figure>
                                                    <div className="mt-7 flex items-center justify-between">
                                                        <a href="item.html">
                                                            <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white text-white">NFT Name</span>
                                                        </a>
                                                        <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                            <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                                    <circle cx={2} cy={2} r={2} />
                                                                    <circle cx={8} cy={2} r={2} />
                                                                    <circle cx={14} cy={2} r={2} />
                                                                </svg>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions2">
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    New bid
                                                                </button>
                                                                <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Refresh Metadata
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Share
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Report
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-sm">
                                                        <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">NFT name</span>
                                                        <span className="text-jacarta-500 dark:text-jacarta-300">1/7</span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article style={{ marginLeft: '7rem', width: '100%' }} className="offeringitem">
                                                <div className="mdrr block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                    <figure className="relative">
                                                        <a href="item.html">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 7" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                        </a>
                                                        <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                            <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </figure>
                                                    <div className="mt-7 flex items-center justify-between">
                                                        <a href="item.html">
                                                            <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white text-white">NFT Name</span>
                                                        </a>
                                                        <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                            <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions3" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                                    <circle cx={2} cy={2} r={2} />
                                                                    <circle cx={8} cy={2} r={2} />
                                                                    <circle cx={14} cy={2} r={2} />
                                                                </svg>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions3">
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    New bid
                                                                </button>
                                                                <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Refresh Metadata
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Share
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Report
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-sm">
                                                        <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">NFT name</span>
                                                        <span className="text-jacarta-500 dark:text-jacarta-300">1/3</span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article style={{ marginLeft: '7rem', width: '100%' }} className="offeringitem">
                                                <div className="mdrr block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                                                    <figure className="relative">
                                                        <a href="item.html">
                                                            <img src="https://deothemes.com/envato/xhibiter/html/img/products/item_5.jpg" alt="item 6" className="w-full rounded-[0.625rem]" loading="lazy" />
                                                        </a>
                                                        <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700">
                                                            <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red">
                                                                    <path fill="none" d="M0 0H24V24H0z" />
                                                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                                                </svg>
                                                            </span>
                                                            <span style={{ color: '#000' }} className="text-sm">159</span>
                                                        </div>
                                                    </figure>
                                                    <div className="mt-7 flex items-center justify-between">
                                                        <a href="item.html">
                                                            <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white text-white">NFT Name</span>
                                                        </a>
                                                        <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                                                            <a href="#" className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm" role="button" id="itemActions4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                                    <circle cx={2} cy={2} r={2} />
                                                                    <circle cx={8} cy={2} r={2} />
                                                                    <circle cx={14} cy={2} r={2} />
                                                                </svg>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800" aria-labelledby="itemActions4">
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    New bid
                                                                </button>
                                                                <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Refresh Metadata
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Share
                                                                </button>
                                                                <button className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white text-white dark:hover:bg-jacarta-600">
                                                                    Report
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 text-sm ">
                                                        <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">NFT name</span>
                                                        <span className="text-jacarta-500 dark:text-jacarta-300">2/3</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>}

                                <div className="container tab-content" id="recent_swaps" style={{ display: 'none' }}>
                                    <div className="mb-8 flex flex-wrap items-center justify-between">
                                        <ul className="flex flex-wrap items-center">
                                            <h2 className="text-center font-display text-3xl dark:text-white">
                                                Recent Swaps
                                            </h2>
                                        </ul>
                                        <div className="dropdown my-1 cursor-pointer menu">
                                            <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a style={{ textDecoration: 'none !important' }} id="create_swaps" data-tab="create_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                    <span style={{ color: 'black' }}>Create Swaps</span>
                                                </a>
                                            </div>
                                            <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a style={{ textDecoration: 'none !important' }} id="normal_trades" data-tab="normal_trades" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                    </svg>
                                                    <span style={{ color: 'black' }}>Open Swaps</span>
                                                </a>
                                            </div>
                                            <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a style={{ textDecoration: 'none !important' }} id="recent_swaps" data-tab="recent_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span style={{ color: 'blue' }}>Recent Swaps</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container tab-content" id="create_swaps" style={{ display: 'none' }}>
                                    <div className="mb-8 flex flex-wrap items-center justify-between" style={{ marginBottom: '50px' }}>
                                        <ul className="flex flex-wrap items-center">
                                            <h2 className="text-center font-display text-3xl dark:text-white">
                                                Create Swaps
                                            </h2>
                                        </ul>
                                        <div className="dropdown my-1 cursor-pointer menu">
                                            <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a style={{ textDecoration: 'none !important' }} id="create_swaps" data-tab="create_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                    <span style={{ color: 'blue' }}>Create Swaps</span>
                                                </a>
                                            </div>
                                            <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a style={{ textDecoration: 'none !important' }} id="normal_trades" data-tab="normal_trades" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                                                    </svg>
                                                    <span style={{ color: 'black' }}>Open Swaps</span>
                                                </a>
                                            </div>
                                            <div className="inline-flex w-38 items-center justify-between rounded-lg border border-jacarta-100 bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white text-white transition-colors hover:border-transparent hover:bg-accent hover:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a style={{ textDecoration: 'none !important' }} id="recent_swaps" data-tab="recent_swaps" className="group flex h-9 items-center rounded-lg text-jacarta-500 transition-colors hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-900 dark:text-white text-white dark:hover:border-transparent dark:hover:bg-accent dark:hover:text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100">
                                                        <path fill="none" d="M0 0H24V24H0z" />
                                                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                                                    </svg>
                                                    <span style={{ color: 'black' }}>Recent Swaps</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <style dangerouslySetInnerHTML={{ __html: "\n                                      /* Dark mode styles */\n                                      .dark .container {\n                                        background-color: #1a202c; /* Set dark background color for the container */\n                                        color: #fff; /* Set text color to white in dark mode */\n                                      }\n\n                                      .dark input,\n                                      .dark textarea {\n                                        background-color: #2d3748; /* Set dark background color for inputs and textarea */\n                                        color: #fff; /* Set text color to white in dark mode */\n                                        border-color: #4a5568; /* Set border color for inputs and textarea */\n                                      }\n\n                                      .dark input::placeholder,\n                                      .dark textarea::placeholder {\n                                        color: #cbd5e0; /* Set placeholder text color for inputs and textarea */\n                                      }\n\n                                      .dark button {\n                                        background-color: #63b3ed; /* Set background color for buttons in dark mode */\n                                        color: #fff; /* Set text color to white for buttons in dark mode */\n                                        box-shadow: 0 4px 6px -1px rgba(99, 179, 237, 0.1), 0 2px 4px -1px rgba(99, 179, 237, 0.06); /* Add box shadow for buttons */\n                                      }\n\n                                      .dark button:hover {\n                                        background-color: #3182ce; /* Set darker background color for buttons on hover in dark mode */\n                                      }\n\n                                      .dark button:active {\n                                        background-color: #2c5282; /* Set active background color for buttons in dark mode */\n                                      }\n\n                                    " }} />
                                    {/* TODO: create_swaps container */}
                                    <div className="line" style={{ height: '3px', width: '95vw', marginLeft: '2.5vw', backgroundColor: 'rgba(99, 179, 237, 0.06)', transform: 'translateX(-20%)' }} />
                                    <div className="container" style={{ marginTop: '50px', transform: 'translateX(200px)' }} id="formc">
                                        <form id="form1" action style={{ marginLeft: '50%', transform: 'translateX(-50%)', marginBottom: '68.5px' }}>
                                            <h1 style={{ fontSize: '28px', marginBottom: '15px' }}>Offering</h1>
                                            {/* <span>Wallet address</span> */}
                                            <input className="ppp" type="text" placeholder="Wallet address" style={{ borderRadius: '8px', width: '100%', color: '#000', marginBottom: '10px' }} />
                                            <p />
                                            {/* <span>Amount</span> */}
                                            <input className="ppp" type="text" placeholder="Amount" style={{ borderRadius: '8px', width: '100%', color: '#000' }} />
                                            <p />
                                            <input className="nft" type="text" placeholder="NFT Contract" style={{ borderRadius: '8px', marginTop: '10px', color: '#000' }} />
                                            <input className="nft" type="text" placeholder="NFT ID" style={{ borderRadius: '8px', marginTop: '10px', color: '#000' }} />
                                            <button className="addbtn" style={{ backgroundColor: '#741ff5', borderRadius: '50vh', padding: '8px 11px' }}>ADD</button>
                                        </form>
                                        <div id="line2" className="line" style={{ height: '3px', width: '95vw', marginLeft: '2.5vw', backgroundColor: 'rgba(99, 179, 237, 0.06)', transform: 'translateX(calc(-21.25% - 200px))' }} />
                                        <form id="form2" action style={{ marginLeft: '50%', transform: 'translateX(-50%)', marginBottom: '75px' }}>
                                            <h1 style={{ fontSize: '28px', marginBottom: '15px', marginTop: '68.5px' }}>Requesting</h1>
                                            {/* <span>Counterparty address</span> */}
                                            <input className="ppp" type="text" placeholder="Counterparty address" style={{ borderRadius: '8px', width: '100%', color: '#000', marginBottom: '10px' }} />
                                            <p />
                                            {/* <span>Wallet address</span> */}
                                            <input className="ppp" type="text" placeholder="Wallet address" style={{ borderRadius: '8px', width: '100%', color: '#000' }} />
                                            <p />
                                            <input className="nft" type="text" placeholder="NFT Contract" style={{ borderRadius: '8px', marginTop: '10px', color: '#000' }} />
                                            <input className="nft" type="text" placeholder="NFT ID" style={{ borderRadius: '8px', marginTop: '10px', color: '#000' }} />
                                            <button className="addbtn" style={{ backgroundColor: '#741ff5', borderRadius: '50vh', padding: '8px 11px' }}>ADD</button>
                                        </form>
                                        <div id="line3" className="line" style={{ height: '3px', width: '95vw', marginLeft: '2.5vw', backgroundColor: 'rgba(99, 179, 237, 0.06)', transform: 'translateX(calc(-21.25% - 200px))' }} />
                                        <div id="form3" action style={{ marginLeft: '50%', transform: 'translateX(-50%)', width: '750px', marginTop: '90px' }}>
                                            <div style={{ display: 'flex' }}>
                                                <div id="dp1">
                                                    <h1 style={{ fontSize: '22px' }}>You are offering</h1>
                                                    <span>You are offering 50 Ethereum and 1 NFT's</span>
                                                </div>
                                                <div id="dp2" style={{ marginLeft: 'auto', marginRight: '-100px' }}>
                                                    <h1 style={{ fontSize: '22px' }}>You are requesting</h1>
                                                    <span>You will get 0 Ethereum and 1 NFT's</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ position: 'absolute', top: 0, left: '375px', marginTop: '245px', paddingBottom: '110px' }} id="infoc">
                                        <h1 style={{ fontSize: '26px' }}>What You Are Offering</h1>
                                        <span style={{ display: 'inline-block', maxWidth: '330px', marginTop: '5px' }}>This section determines what you are offering in the trade</span>
                                        <h1 id="info2" style={{ fontSize: '26px', marginTop: '246px' }}>What You Are Requesting</h1>
                                        <span style={{ display: 'inline-block', maxWidth: '330px', marginTop: '5px' }}>This section determines what you are requesting in the trade</span>
                                        <h1 id="info3" style={{ fontSize: '26px', marginTop: '257.5px' }}>Review Trade</h1>
                                        <span style={{ display: 'inline-block', maxWidth: '275px', marginTop: '5px' }}>Please carefully review your trade for accuracy</span>
                                        <p />
                                        <button id="create_trade" style={{ border: '1px solid #fff', borderRadius: '8px', marginTop: '200px', padding: '8px 15px' }}>CREATE TRADE</button>
                                    </div>
                                </div>
                                {/* Grid */}
                                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwapView;