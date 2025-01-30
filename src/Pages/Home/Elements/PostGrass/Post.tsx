import React, { useEffect } from "react";
import { StylePost } from "./PostStyle";

const TwitterEmbed: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <StylePost>
                    <section className="gradient-shadow">
            <blockquote className="twitter-tweet">
                        <p lang="pt" dir="ltr">
                            Quando a IA dá conselhos ruins, isso pode ter consequências reais.
                            <br />
                            <br />
                            A Grass está melhorando a maneira como a IA interage com informações ao fornecer ferramentas que permitem acesso a dados da web precisos e verificáveis. Junte-se a milhões de usuários e baixe a Grass hoje mesmo.{" "}
                            <a href="https://t.co/lHG0dqxZXw">pic.twitter.com/lHG0dqxZXw</a>
                        </p>
                        &mdash; Grass (@getgrass_io){" "}
                        <a href="https://twitter.com/getgrass_io/status/1841955321369026814?ref_src=twsrc%5Etfw">
                            October 3, 2024
                        </a>
            </blockquote>
                    </section>
        </StylePost>
    );
};

export default TwitterEmbed;
