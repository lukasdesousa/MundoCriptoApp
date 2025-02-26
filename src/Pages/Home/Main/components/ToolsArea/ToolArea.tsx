import React from "react";
import { ContainerTools } from "../toolsBg/styled";
import ScrollReveal from "../../../../../components/Scroll/ScrollReveal";
import { Link } from "react-router-dom";

export const ToolArea: React.FC = () => {
    return <>
                        <ScrollReveal>
                <ContainerTools>
            <Link to={'/MundoCriptoApp/analyserTool/v1'}>
            <section className="warning">
                <p>ANALYSER</p>
            </section>
                            <section className='infos'>
                              <div>
                               
                                    <ScrollReveal>
                                        <p>Uma ferramenta ágil e eficaz, capaz de analisar criptomoedas e potenciais riscos em segundos. Focada em criptomoedas da rede solana.</p>
                                    </ScrollReveal>
                                    
                              </div>
                            </section>
            </Link>
                </ContainerTools>
                        </ScrollReveal>
        </>
}