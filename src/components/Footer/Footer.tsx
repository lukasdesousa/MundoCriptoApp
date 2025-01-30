import React from "react";
import { FooterStyle } from "./styled";
import ScrollReveal from "../Scroll/ScrollReveal";

const Footer: React.FC = () => {
    return <>
        <FooterStyle><ScrollReveal>
                <footer>
                    <section className="details-footer">
                        <section>
                            <p className="footer-tittle">Mundo cripto</p>
                            <p className="information">A nossa missão é repassar informações úteis e verídicas. Sempre analisando com cautela. Este site é exclusivamente informativo, comprometido com a imparcialidade, a transparência e a entrega de conteúdos livres de influências políticas ou ideológicas, oferecendo informações baseadas em fatos para que você forme suas próprias opiniões com autonomia e confiança. </p>
                        </section>
                        <section className="links">
                            <p><a href="https://github.com/lukasdesousa/MundoCriptoApp">GitHub</a></p>
                            <p><a href=""></a></p>
                            <p><a href="https://github.com/lukasdesousa/MundoCriptoApp">Saiba mais</a></p>
                        </section>
                    </section>
                    <section className="social-media">
                        <a href="www.linkedin.com/in/lukasdesouza" target="_blank"><img src='https://cdn-icons-png.flaticon.com/128/25/25320.png' alt="Icone do LinkedIn" /></a>
                        <a href="https://github.com/lukasdesousa/MundoCriptoApp" target="_blank"><img src='https://cdn-icons-png.flaticon.com/128/25/25657.png' alt="Icone do instagram" /></a>
                    </section>
                </footer>
        </ScrollReveal>
        </FooterStyle>
    </>
}

export default Footer;