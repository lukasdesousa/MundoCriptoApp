import React from "react";
import { ContainerTools } from "../toolsBg/styled";
import ScrollReveal from "../../../../../components/Scroll/ScrollReveal";

export const ToolArea: React.FC = () => {
    return <>
                        <ScrollReveal>
            <ContainerTools>
                <section className="warning">
                    <p>Em desenvolvimento</p>
                </section>
                        <section className='infos'>
                          <div>
                            <h2>Analyser</h2>
                                <ScrollReveal>
                                    <p>Uma ferramenta ágil e eficaz, capaz de analisar criptomoedas e potenciais riscos em segundos.</p>
                                </ScrollReveal>
                          </div>
                        </section>
            </ContainerTools>
                        </ScrollReveal>
        </>
}