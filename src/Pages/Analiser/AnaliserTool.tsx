import Header from './Header/Header.tsx';
import { Main } from '../../components/MainP/styled.ts';
import Footer from '../../components/Footer/Footer.tsx';
import ScrollReveal from '../../components/Scroll/ScrollReveal.tsx';
import ParallaxImage from '../../components/imagesEffects/ParallaxImage.tsx';
import { VerifyDisplay } from '../../utils/verifyDisplay.ts';
import WarningMedia from '../../components/Warnings/WarningMedia.tsx';
import { useMediaQuery } from 'react-responsive';
import { TypedDescription } from './Effects/TypingEffect.tsx'

export function Analiser() {
  const isDesktop = useMediaQuery({ query: '(min-width: 576px)' });

  return (
    <>
      {isDesktop ? <WarningMedia /> : ''}
      <Header />
      <Main><ScrollReveal>
        <h1>Uma ferramenta ANTI-RUG 🥷</h1>
        <p className='txt-access'><TypedDescription /></p>
        <ScrollReveal>
        </ScrollReveal>
      </ScrollReveal>
      </Main>
      <Footer />
    </>
  )
}

export default Analiser;
