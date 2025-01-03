import React from "react";
import { HeadAnalyserStyle } from "./styled";
import ScrollReveal from "../../../components/Scroll/ScrollReveal";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    return <>
        <HeadAnalyserStyle>
            <ScrollReveal>
                <section className="main">
                    <section className="title">
                        <h1>Mundo Cripto <br />
                        </h1>
                        <p className="sub-title">Analyser</p>
                    </section>
                    <section>
                        <ul>
                        <li><Link to={'/MundoCriptoApp'}>Home</Link></li>
                            <li><a href="https://www.linkedin.com/in/lukasdesouza/" target="_blank"><button>LinkedIn</button></a></li>
                        </ul>
                    </section>
                </section>
            </ScrollReveal>
        </HeadAnalyserStyle>
    </>
}

export default Header;