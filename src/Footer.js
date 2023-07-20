import React, { useEffect } from "react"


const Footer = () => {

    return (
        <>
            <footer className="uni-footer uk-section uk-section-xlarge@m">
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
                                    <p className="uk-text-xlarge@m uk-margin-medium-top@m">We make it easy to swap your NFTs for other NFTs or ETH.</p>
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
        </>
    )
}

export default Footer;