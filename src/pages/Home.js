import React from 'react'
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function Home() {
    const myFunction = () => {
        var y = document.getElementById("home1").className;
        if (y.length === 4) {
            document.getElementById("home1").classList.add("dark-mode");
        }
        else {
            document.getElementById("home1").classList.remove("dark-mode");
        }
    }

    return (
        <div className="home" id="home1">
            <div className="home__header">
                <div className="home__headerLeft">
                    <button onClick={myFunction}>Toggle dark mode</button>
                </div>
                <div className="home__headerRight">
                    <Link to="/LogIn">
                        LogIn
                    </Link>
                    <div/>
                    <div className="vertical"></div>
                    <Link to="/SignUp">
                        SignUp
                    </Link>
                </div>
            </div>
            <div className="home__body">
                <img src="https://cdn.discordapp.com/attachments/1123095896989642854/1135484139714379777/bird.png" alt="Logo" />
                <img src="https://cdn.discordapp.com/attachments/1123095896989642854/1135483320772333688/Screenshot_8.png" alt="Logo" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
