import React from "react";
import { HeadAnalyserStyle } from "./styled";
import ScrollReveal from "../../../components/Scroll/ScrollReveal";


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
                            <li><a href="/MundoCriptoApp">Home</a></li>
                            <li><a href="https://www.linkedin.com/in/lukasdesouza/" target="_blank"><button>LinkedIn</button></a></li>
                        </ul>
                    </section>
                </section>
            </ScrollReveal>
        </HeadAnalyserStyle>
    </>
}

export default Header;