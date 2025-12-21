import { text } from "stream/consumers";

export default function BodyPage(){
   
    
    return(
        <div>
        <section className="Games">
            <h2 className="title" >Favorite Games</h2>
            <hr className="separador"/>
            <div id="card">
                <div className="wrapper-card">
                    <div className="box-area">
                        <div className="box">
                        <img src={"./csgo.jpg"} alt="csgo image"/>
                        <div className="overlay">
                            <h3 className="title-card">Counter Strike 2</h3>
                            <p className="des-card">CSGO is one of my favorite games because it requires aiming skills, teamwork, and strategy, and I enjoy improving and winning matches.</p>
                        </div>
                        </div>
                        <div className="box">
                        <img src={"./border.jpg"} alt="borderlands2 image"/>
                        <div className="overlay">
                            <h3 className="title-card">Borderlands 2</h3>
                            <p className="des-card">Borderlands 2 is one of my favorite games because it's my childhood game, this game means a lot to me, I love this game.</p>
                        </div>
                        </div>
                        <div className="box">
                        <img src={"./fornai.jpg"} alt="Fortnite image"/>
                        <div className="overlay">
                            <h3 className="title-card">Fortnite</h3>
                            <p className="des-card">Fortnite is one of my favorite games because it's fun to play with my brothers, I enjoy the gameplay and collecting skins and emotes.</p>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
        <section className="clip-favorite">
            <h2 className="title" >Character favorites</h2>
            <hr className="separador"/>
        |   <div id="card">
                <div className="wrapper-card">
                    <div className="box-area">
                            <div className="box2">
                            <video src={"./yuta.mp4"} about="Edit durisimo de yuta" autoPlay muted loop controls/>
                    </div>
                       <div className="box2">
                            <video src={"./gj.mp4"} about="Edit durisimo de yuta" autoPlay muted loop controls/>
                    </div>
                    </div>
                </div>
        </div>
        </section>
        </div>
    );

}