import Header from './Header/Header.tsx';
import { Main } from '../../components/MainP/styled.ts';
import Footer from '../../components/Footer/Footer.tsx';
import ScrollReveal from '../../components/Scroll/ScrollReveal.tsx';
import WarningMedia from '../../components/Warnings/WarningMedia.tsx';
import { useMediaQuery } from 'react-responsive';
import { TypedDescription } from './Effects/TypingEffect.tsx'
import { Section } from './MainStyle/styled.ts';

export function Analiser() {
  const isDesktop = useMediaQuery({ query: '(min-width: 576px)' });

  return (
    <>
      {isDesktop ? <WarningMedia /> : ''}
      <Header />
      <Main><ScrollReveal>
        <h1>Uma ferramenta ANTI-RUG 🥷</h1>
          <Section>
            <p className='txt-access'><TypedDescription /></p> 
          </Section>
        <p>Esta ferramenta está em desenvolvimento. Acompanhe as atualizações e novidades no meu LinkedIn ou confira mais detalhes no <a href='https://github.com/lukasdesousa/MundoCriptoApp/blob/main/README.md'>README</a> do projeto.</p>
        </ScrollReveal>
      </Main>
      <Footer />
    </>
  )
}

export default Analiser;
