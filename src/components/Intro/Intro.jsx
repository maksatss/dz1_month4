import React from 'react';
import './Intro.css'
import background from './images_intro/intro__background.png'

function Intro(props) {
    return (
            <section className="intro" style={{backgroundImage: `url(${background})`}}>
                <div className="intro_wrapper">
                    <div className="intro__span">
                <span>
                    {props.title.text}
                </span>
                    </div>
                    <div className="intro__btn">
                        <button className="More">Көбүрөөк</button>
                    </div>
                </div>
            </section>
    )
}

export default Intro;