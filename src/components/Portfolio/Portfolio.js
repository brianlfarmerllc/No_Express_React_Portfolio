import React from "react"
import "./Portfolio.css"
import PortfolioTiles from "../PortfolioTiles/PortfolioTiles"

function Portfolio() {
    return (
        // section for portfolio
        <section className="container-fluid" id="portfolioSection">
            <div className="row justify-content-center">
                <div className="col">
                    <h2 style={{ fontFamily: "'Merriweather', serif" }}>Portfolio</h2>
                </div>
                <div className="w-100"></div>
                <img alt="icon brackets" className="codingIcon"
                    src="https://img.icons8.com/ios/50/000000/source-code.png" />
            </div>

            <div className="row justify-content-center ml-1 mr-1 ml-m-0 mr-m-0">
                {/* line of text above the icons */}
                <ul className="nav justify-content-md-end justify-content-center">
                    <span style={{paddingRight: "1em"}}>var navBar = [</span>
                    <li> <a className="list-item" href="#aboutMe">About Me</a> </li>
                    <li> <a className="list-item" href="#portfolioSection">My Portfolio</a> </li>
                    <li> <a className="list-item" href="#contactSection">Contact Me</a> </li>
                    <span style={{paddingLeft: "1em"}}>]</span>
                </ul>
            </div>
            <div className="row justify-content-center text-center ml-0 mr-0 ml-xl-2 mr-xl-2">
                {/* Force next columns to break to new line */}
                <div className="w-100 d-none d-md-block"></div>
                <PortfolioTiles />
            </div>
        </section>
    )
}

export default Portfolio