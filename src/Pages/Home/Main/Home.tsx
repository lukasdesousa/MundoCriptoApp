import Header from '../../../components/Header/Header.tsx';
import { ToolArea } from './components/ToolsArea/ToolArea.tsx';
import { Main } from '../../../styles/components_styles/MainStyle/styled.ts';
import Footer from '../../../components/Footer/Footer.tsx';
import ScrollReveal from '../../../components/Scroll/ScrollReveal.tsx';
import WarningMedia from '../../../components/Warnings/WarningMedia.tsx';
import { useMediaQuery } from 'react-responsive';
import WeekVideos from './components/VideoArea/WeekVideos.tsx';
import PostsArea from './components/PostsArea/PostsArea.tsx';
import Card from '../../../components/Analyser_components/bootstrap/Card/Card.tsx';
import DevComm from './components/DevComments/DevComments.tsx';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 576px)' });

  return (
    <>
      {isDesktop ? <WarningMedia /> : ''}
      <Header />
      <Main><ScrollReveal>
        <h1>Conteúdos Recentes</h1>
          <section className='card-container'>
            <Card />
          </section>
      </ScrollReveal>

        <section className='main-texts'>
          <ScrollReveal>
            <section className="tools">
            <h2>Ferramentas Mundo Cripto</h2>
            <p className='txt-access'>
              Ferramentas no portal Mundo Cripto são aprimoradas constatemente, com o intuito de melhorar a experiência do usuário. Essa área da Mundo Cripto ainda está em desenvolvimento, estamos aperfeiçoando antes de qualquer interação com o público.
            </p>
              <ToolArea />
            </section>
            <br />
          </ScrollReveal>
          <ScrollReveal>
            <h1>Vídeos mais acessados da semana:</h1>
            <ScrollReveal>
              <p className='txt-access'>
                As recomendações de vídeos da semana são retiradas de uma análise feita por IA e inserida manualmente no portal. Todos os vídeos são cuidadosamente selecionados.</p>
            </ScrollReveal>
            <WeekVideos />
            <ScrollReveal>
              <section className="week-videos">
                <p>Será selecionado vídeos que estão sendo mais comentados dentro do youtube e inserido aqui no portal. Vídeos onde repassem informações verdadeiras e de fontes confiáveis.</p>
              </section>
            </ScrollReveal>
          </ScrollReveal>
          <ScrollReveal>
            <h2>Posts interessantes</h2>
            <p>
             A seleção de posts <strong>interessantes</strong> são baseadas em assuntos do momento que envolvem o mercado cripto. Os posts, assim como os vídeos, são cuidadosamente selecionados antes de serem inseridos no portal.</p>
          </ScrollReveal>
          <ScrollReveal>
            <PostsArea />
          </ScrollReveal>
        </section>
      <DevComm />
          <section className='main-texts'>
            <p>Outras áreas dentro do portal <em>Mundo Cripto</em> ainda estão sendo desenvolvidas. Você pode seguir o Dev no <a href="www.linkedin.com/in/lukasdesouza">LinkedIn</a> para ficar por dentro de qualquer novidade e futuras melhorias ;)</p>
          </section>
      </Main>
      <Footer />
    </>
  )
}

export default App;
