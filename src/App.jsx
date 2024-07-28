import LikeButton from "./LikeButton";
import "./App.css";

import pfp from "./ressources/img/pfp.jpg"
import throne from "./ressources/img/Throne.svg"
import twitter from "./ressources/img/Twitter.svg"


function App(){
    return(
        <div className="App">
            <div className="Container">
                <div className="SmallContainer">
                    <div className="column">
                        <img src={pfp} className="pfp" alt="logo"/>
                    </div>
                    <div className="column">
                        <h1 className="Titlename">claymorwan</h1>
                    </div>
                </div>
                <div className="SmallContainer">
                    <div className="column">
                        <ul>
                            <a href="https://x.com/claymorwan">
                                <div className="Link" >
                                    <img src={twitter} className="LinkLogo" alt="Twitter-logo"/>
                                    <span> Twitter</span>
                                </div>
                            </a>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <a href="https://throne.com/claymorwan">
                                <div className="Link">
                                    <img src={throne} className="LinkLogo" alt="Throne-logo"/>
                                    <span> Throne</span>
                                </div>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>

            <footer>
            </footer>
        </div>
    );
}


export default App;