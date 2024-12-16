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
                            <p className="information">Quaisquer informações que foram repassadas aqui podem ser encontradas no site oficial da Grass. Sempre verifique as informações de que desconfia. Recomendamos que não conecte sua carteira principal de criptomoedas (caso tenha) para evitar qualquer problema que possa ocorrer e também como um meio de se proteger, mesmo a instituição sendo confiável.</p>
                        </section>
                        <section className="links">
                            <p><a href="https://coinmarketcap.com/">Mercado</a></p>
                            <p><a href="https://coinmarketcap.com/">Token Grass</a></p>
                            <p><a href="https://coinmarketcap.com/">Saiba mais</a></p>
                        </section>
                    </section>
                    <section className="social-media">
                        <a href=""><img src='https://cdn-icons-png.flaticon.com/128/25/25320.png' alt="Icone do LinkedIn" /></a>
                        <a href=""><img src='https://cdn-icons-png.flaticon.com/128/3938/3938052.png' alt="Icone do instagram" /></a>
                    </section>
                </footer>
        </ScrollReveal>
        </FooterStyle>
    </>
}

export default Footer;