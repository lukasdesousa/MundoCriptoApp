import React from "react";
import { HeadStyle } from "../../styles/components_styles/Header/styled";
import ScrollReveal from "../Scroll/ScrollReveal";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return <>
        <HeadStyle>
            <ScrollReveal>
                <section className="main">
                    <h1>Mundo Cripto</h1>
                    <section>
                        <ul>
                            <li><Link to={'/analyserTool/v1'}>Analyser</Link></li>
                            <li><a href="https://www.linkedin.com/in/lukasdesouza/" target="_blank"><button>LinkedIn</button></a></li>
                        </ul>
                    </section>
                </section>
            </ScrollReveal>
        </HeadStyle>
    </>
}

export default Header;