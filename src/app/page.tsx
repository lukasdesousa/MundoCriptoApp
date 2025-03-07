/* eslint-disable react-refresh/only-export-components */
// pages/index.tsx
import Header from '@/components/Header/Header';
import ToolArea from '@/components/Home_components/ToolsArea/ToolArea';
import { Main } from '@/styles/components_styles/MainStyle/styled';
import Footer from '@/components/Footer/Footer';
import WeekVideos from '@/components/Home_components/VideosArea/WeekVideos';
import PostsArea from '@/components/Home_components/PostsArea/PostsArea';
import Card from '@/components/Analyser_components/bootstrap/Card/Card';
import DevComm from '@/components/Home_components/DevComments/DevComments';
import ScrollReveal from '@/components/Scroll/ScrollReveal';

export const metadata = {
  title: 'Mundo Cripto - Analise memecoins rapidamente com a ferramenta analyser',
  description:
    'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto, acompanhe airdrops e muito mais.',
  keywords: 'memecoins, análise cripto, Analyser, criptomoedas, investimento, mercado cripto, crypto, crypto market, rugcheck',
  alternates: {
    canonical: 'https://lukasdesousa.github.io/MundoCriptoApp/',
  },
  openGraph: {
    title: 'Mundo Cripto - Analise memecoins rapidamente com a ferramenta analyser.',
    description:
      'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto.',
    url: 'https://lukasdesousa.github.io/MundoCriptoApp/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundo Cripto - Analise memecoins rapidamente com a ferramenta analyser.',
    description:
      'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto.',
  },
};

function Index() {
  return (
    <>
      <Header />
      <Main>
        <ScrollReveal>
          <h1>Conteúdos Recentes</h1>
          <section className="main-texts">
            <p className="txt-access">
              Bem-vindo(a)! Nessa área você encontrará os conteúdos publicados recentemente. Todos os conteúdos são analisados cuidadosamente para evitar a propagação de notícias falsas. Nessa área você encontrará também informações sobre airdrops, acontecimentos no mundo cripto e dentre outros:
            </p>
          </section>
          <section className="card-container">
            <Card />
          </section>
        </ScrollReveal>
  
        <section className="main-texts">
          <ScrollReveal>
            <section className="tools">
              <h2>Ferramentas Mundo Cripto</h2>
              <p className="txt-access">
                Ferramentas no portal Mundo Cripto são aprimoradas constantemente, com o intuito de melhorar a experiência do usuário. Essa área ainda está em desenvolvimento, e estamos aperfeiçoando antes de qualquer interação com o público.
              </p>
              <ToolArea /><br /><br />
              <h2>Uma ferramenta de análise de risco</h2>
              <p>
                A Analyser é capaz de analisar em segundos um contrato de uma criptomoeda na rede Solana, avaliando os riscos com base nos dados da moeda, como: sua liquidez, seus holders, seus criadores, seus metadados e vários outros dados. Basta copiar e colar o endereço de uma criptomoeda da rede Solana e pronto! Você terá em mãos uma análise rápida e profunda. O que normalmente levaria cerca de 1 a 2 horas, você terá em segundos. Uma ferramenta pensada para o uso de <strong>traders de memecoins</strong> que perdem tempo analisando suas moedas manualmente. Teste agora mesmo!
              </p>
            </section>
            <br />
          </ScrollReveal>
          <ScrollReveal>
            <h1>Vídeos mais acessados da semana:</h1>
            <ScrollReveal>
              <p className="txt-access">
                As recomendações de vídeos da semana são retiradas de uma análise feita por IA e inserida manualmente no portal. Todos os vídeos são cuidadosamente selecionados.
              </p>
            </ScrollReveal>
            <WeekVideos />
            <ScrollReveal>
              <section className="week-videos">
                <p>
                  Será selecionado vídeos que estão sendo mais comentados dentro do YouTube e inseridos aqui no portal. Vídeos onde repassem informações verdadeiras e de fontes confiáveis.
                </p>
              </section>
            </ScrollReveal>
          </ScrollReveal>
          <ScrollReveal>
            <h2>Posts interessantes</h2>
            <p>
              A seleção de posts <strong>interessantes</strong> é baseada em assuntos do momento que envolvem o mercado cripto. Os posts, assim como os vídeos, são cuidadosamente selecionados antes de serem inseridos no portal.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <PostsArea />
          </ScrollReveal>
        </section>
        <DevComm />
        <section className="main-texts">
          <p>
            Outras áreas dentro do portal <em>Mundo Cripto</em> ainda estão sendo desenvolvidas. Você pode seguir o Dev no <a href="https://www.linkedin.com/in/lukasdesouza" target="_blank" rel="noopener noreferrer">LinkedIn</a> para ficar por dentro de qualquer novidade e futuras melhorias ;)
          </p>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Index;
