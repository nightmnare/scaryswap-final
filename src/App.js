import "./App.css";
import Aos from "aos";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  Aos.init();
  useEffect(() => {
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    } else {
      window.addEventListener("load", () => setIsLoading(false));
      return () => window.removeEventListener("load", () => setIsLoading(false));
    }
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-wrapper">
          <img alt="loader" src="./img/animation04.gif" />
        </div>
      ) : (
        <article>
          {/*Main Navigation*/}
          <header>
            {/*Navbar*/}
            <nav className="navbar navbar-expand-lg navbar-dark scrolling-navbar">
              <div className="container">
                {/* Navbar brand */}
                {/* <a className="navbar-brand" href="/">
                <img
                  src="img/favicon.png"
                  width="75px"
                  height="100%"
                  alt="Logo"
                />
              </a> */}
                {/* Collapse button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#basicExampleNav"
                  aria-controls="basicExampleNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="basicExampleNav">
                  {/* Links */}
                  <ul className="navbar-nav ml-auto smooth-scroll d-flex align-items-center align-items-md-center">
                    <li className="nav-item">
                      <a className="nav-link" href="#introduction">
                        Introduction
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#howitworks">
                        How It Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="btn btn-warning rounded-pill"
                        href="https://app.scaryswap.com"
                        id="button"
                      >
                        DApp
                      </a>
                    </li>
                  </ul>
                  {/* Links */}
                </div>
                {/* Collapsible content */}
              </div>
              {/* <div className="header-overlap"></div> */}
            </nav>
            {/* Navbar */}

            <div className="animation-container" data-aos="fade-down">
              <img
                src="./img/animation01.gif"
                alt="Loading"
                className="anim-img"
              />
            </div>

            {/*Mask*/}
            <div id="intro" className="view lazyload">
              <div className="mask">
                <div className="container d-flex justify-content-center align-items-center h-100">
                  <div
                    className="container-introduction d-flex text-center justify-content-center align-items-center flex-column"
                    data-aos="fade-up"
                  >
                    <h1 className="text-warning">ScarySwap</h1>
                    <h5 className="mt-2 text-orange t-bold hero-intro-bg">
                      First ever zero swapping fees DEX on the fantom chain
                    </h5>
                    <div className="container-button">
                      <a className="btn btn-danger rounded-pill" href="https://app.scaryswap.com">
                        DApp
                      </a>
                      <a className="btn btn-danger rounded-pill" href="https://docs.scaryswap.com">
                        Docs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.Mask*/}
          </header>
          {/*Main Navigation*/}
          <main>
            <section
              className="community-token pt-5"
              id="introduction"
              data-aos="fade-up"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center sp">
                    <img
                      src="./img/animation02.gif"
                      alt="animation02"
                      className="webkit-show"
                    />
                  </div>
                  <div className="col-md-6 mb-4 d-flex justify-content-center align-items-start flex-column">
                    <h1>Introduction to ScarySwap</h1>
                    <p className="mt-4">
                      ScarySwap is the first ever swapping dex offering
                      completely zero fees swaps on certain pairs , users can
                      currently swap FTM , WBNB , WETH with zero fees and more
                      pairs will be added as the DEX grows. zero fees pairs are
                      added by the core team of ScarySwap while other users can
                      add pairs with the default 0.1% fees system , ScarySwap
                      offers the cheapest and scariest liquidity farming pools
                      on fantom where users can deposit their SLp to earn USDC ,
                      PUMPKIN , FTM ., users can also deposit a single token
                      like USDC , FTM instead of SLp to earn scary rewards.
                    </p>
                    <a
                      className="btn rounded-pill"
                      href="https://app.scaryswap.com"
                    >
                      Open Dapp
                    </a>
                  </div>
                  <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center pc">
                    <img
                      src="./img/animation02.gif"
                      alt="animation02"
                      className="webkit-show"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              className="community-units pt-5"
              id="howitworks"
              data-aos="fade-up"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    {/* <video src="./img/animation3.mp4" className="webkit-unshow" autoPlay muted loop playsInline /> */}
                    <img
                      src="./img/animation03.gif"
                      alt="animation02"
                      className="webkit-show"
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
                    <h1>How It Works?</h1>
                    <p className="mt-4">
                      We manually add certain pairs and enable our scary model
                      which is a way to reward users indirectly from the pair
                      instead of rewarding liquidity providers from swapping
                      fees , we offer rewards from investing your staked tokens
                      into other farming pools protocols like Binance , Bifi ,
                      YieldWolf etc the scary model helps us maintain liquidity
                      for our zero fees pairs without the need of new liquidity
                      providers coming in , making the liquidity for each pair
                      constantly growing.
                      <br />
                      <br />
                      The current active 0% fees pairs are :
                    </p>
                    <ul className="list-unstyled mt-2">
                      <li>FTM / USDC</li>
                      <li>WBNB / USDC</li>
                      <li>WETH / USDC</li>
                    </ul>
                    <a className="btn rounded-pill" href="mailto:jb.mouny@yahoo.com">
                      contact us to list your 0% fees pair
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-4" id="download">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-12 mb-4">
                    <h1>Socials</h1>
                    <ul className="list-unstyled mt-4 d-flex flex-column flex-md-row">
                      <li className="d-flex align-items-center flex-column flex-md-row">
                        <a href="https://discord.com/invite/pumpkins">
                          <i className="fab fa-discord fa-lg mr-2"></i>
                          Discord
                        </a>
                      </li>
                      <li className="d-flex align-items-center flex-column flex-md-row">
                        <a href="https://twitter.com/Scary_swap">
                          <i className="fab fa-twitter fa-lg mr-2"></i>
                          Twitter
                        </a>
                      </li>
                      <li className="d-flex align-items-center flex-column flex-md-row">
                        <a href="https://docs.scaryswap.com">
                            <img alt="gitbook icon" src="/svg/gitbook.svg" className="fab fa-gitbook fa-lg mr-2" />
                            GitBook
                        </a>
                      </li>
                      <li className="d-flex align-items-center flex-column flex-md-row">
                        <a href="https://solidity.finance/audits/ScarySwap/">
                          <img alt="Audit icon" src="/img/audit_paper.png" className="fab fa-audit fa-lg mr-2" />
                          Audit Paper
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="py-4 py-md-5 page-footer font-small">
            <div className=" container">
              <div className="row">
                <div className="col-12 col-md-4 d-flex align-items-center flex-column">
                  <a className="navbar-brand" href="/">
                    <i className="mb-2 logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="534"
                        height="456"
                        viewBox="0 0 534 456"
                        version="1.1"
                      >
                        <path
                          d="M 415.500 59.056 C 372.600 91.518, 336.938 118.821, 336.250 119.730 C 334.313 122.290, 334.635 122.971, 340.250 128.210 C 352.026 139.197, 372.681 151.305, 388.405 156.437 C 419.815 166.691, 452.542 158.544, 474.286 135.058 C 481.858 126.879, 485.374 121.598, 490.519 110.678 C 501.583 87.193, 505.637 53.028, 501.527 17.896 C 499.655 1.891, 498.974 0.027, 495 0.033 C 494.175 0.034, 458.400 26.595, 415.500 59.056 M 21.067 53.937 C 17.389 56.265, 17.933 86.189, 22.040 107.471 C 30.310 150.322, 53.615 181.797, 87.556 195.953 C 126.388 212.150, 164.676 207.962, 199.906 183.667 C 208.363 177.835, 222.910 164.386, 230.159 155.698 C 235.878 148.843, 236.362 145.756, 232.065 143.534 C 229.521 142.218, 53.270 65.624, 31.530 56.386 C 22.617 52.599, 23.029 52.696, 21.067 53.937 M 517.005 211.761 C 491.685 229.597, 451.198 251.272, 421.015 263.149 C 407.973 268.281, 404.811 269.904, 404.361 271.697 C 403.984 273.198, 406.597 279.958, 412.481 292.705 C 417.252 303.042, 421.233 311.877, 421.328 312.338 C 421.489 313.122, 339.095 337.459, 338.497 336.803 C 338.345 336.636, 336.566 327.725, 334.544 317 C 329.607 290.819, 329.671 291, 325.412 291 C 323.523 291, 317.683 291.691, 312.432 292.536 C 283.226 297.236, 232.325 299.302, 200.500 297.079 C 126.682 291.924, 53.731 272.334, 13.329 246.818 C 9.578 244.449, 6.137 242.984, 4.776 243.177 C 2.784 243.460, 2.462 244.157, 2.197 248.767 C 1.816 255.400, 5.046 274.289, 8.907 288 C 25.365 346.450, 66.221 393.763, 125.500 423.022 C 141.147 430.745, 161.817 439, 165.509 439 C 169.840 439, 170.013 436.822, 167.538 413.445 C 166.261 401.375, 165.400 391.304, 165.627 391.064 C 165.972 390.698, 235.157 394.953, 235.672 395.372 C 235.767 395.449, 235.151 408.042, 234.302 423.358 L 232.759 451.204 234.890 453.334 C 236.960 455.405, 237.800 455.465, 264.760 455.482 C 281.643 455.493, 296.610 454.990, 303 454.196 C 432.041 438.170, 515.459 356.707, 530.496 232.030 C 533.006 211.216, 532.437 204.934, 528.050 205.036 C 527.197 205.056, 522.227 208.082, 517.005 211.761"
                          stroke="none"
                          fill="black"
                          fillRule="evenodd"
                        />
                      </svg>
                    </i>
                  </a>
                  <small className="d-block mb-3 text-muted">
                    2022 – ScarySwap
                  </small>
                </div>
                <div className="col-6 col-md-3">
                  <h5 className="font-weight-bold">Links</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="/#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#introduction">
                        Introduction
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="#howitworks">
                        How it works?
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <h5 className="font-weight-bold">BOOOO!!!</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className="text-muted" href="https://discord.com/invite/pumpkins">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="https://twitter.com/Scary_swap">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="https://docs.scaryswap.com">
                        GitBook
                      </a>
                    </li>
                    <li>
                      <a className="text-muted" href="/#">
                        Audit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </article>
      )}
    </div>
  );
};

export default App;
