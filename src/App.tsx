import Header from './components/Header/Header.tsx';
import { Main } from './components/MainP/styled.ts';
import grassImgMobile from './assets/img/grassImgMobile.webp';
import grassImgMobile2 from './assets/img/grass2.webp';
import grassImgDesk from './assets/img/desktopNode.jpeg';
import grassImgDesk2 from './assets/img/grassApp.jpeg';
import Footer from './components/Footer/Footer.tsx';
import men01 from './assets/img/men01.jpg';
import woman01 from './assets/img/pexels-emmy-e-1252107-2381069.jpg';
import men02 from './assets/img/men02.jpg';
import woman02 from './assets/img/woman03.jpg';
import woman03 from './assets/img/woman04.jpg';
import ScrollReveal from './components/Scroll/ScrollReveal.tsx';
import LineChart from './components/Chart/LineChart.tsx';
import ParallaxImage from './components/imagesEffects/ParallaxImage.tsx';
import { useMediaQuery } from 'react-responsive';
import Post from './components/PostGrass/Post.tsx';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 575px) and (max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const verifyDisplay = (id: number): string => {
    if(isMobile && id === 1) {
      return grassImgMobile
    } else if(isDesktop && id === 1) {
      return grassImgDesk;
    } else if(isDesktop && id === 2) {
      return grassImgDesk2;
    } else if (isMobile && id === 2) {
      return grassImgMobile2;
    } else if (isDesktop && id === 3) {
      return grassImgMobile2;
    } else if(isMobile && id === 3) {
      return grassImgDesk;
    } else {
      return '';
    }
}

  return (
    <>
      <Header />
      <Main><ScrollReveal>
        <h1>Ganhe criptomoedas sem esforço</h1>
        <p className='txt-access'>Como a GRASS pode te ajudar a conquistar uma renda passiva sem a esforço algum. Somente compartilhando a sua banda ociosa da internet.</p><br />
        <ParallaxImage
        imageSrc={verifyDisplay(1)}
        altText="Imagem Parallax"
        classNameProp='container-1'
      />
        <ScrollReveal>
        <button>Acessar a Grass</button>
        </ScrollReveal>
      </ScrollReveal>
      
        <ScrollReveal>
          <h2>Como funciona?</h2>
          <p className='txt-access'>
            Ao se cadastrar na <strong>Grass</strong>, você permite que a plataforma compartilhe a largura de banda da sua conexão de forma segura e controlada. Esse compartilhamento é utilizado para tarefas como navegação anônima, e você recebe uma compensação por isso. O melhor? Você continua usando a sua internet normalmente, sem interrupções!</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1>Por que usar a Grass?</h1>
          <ul>
            <li>Renda Passiva: Ganhe dinheiro todos os dias com algo que você já tem: sua internet.</li>
            <li>Simples e Seguro: O processo é fácil, e sua privacidade é nossa prioridade.</li>
            <li>Ganhos Diários: Com a <strong>Grass</strong>, você pode ganhar até $10 por dia!</li>
            <li>Sem Complicação: Cadastre-se, conecte-se e comece a ganhar sem esforço.</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className='opn-H1'>Opniões de investidores</h1>
          <p className='opn-P'>Arraste para o lado</p>
          <section className='opn-inv'>
            <section className='opn-cards'>
              <section className='opn'>
                <div>
                  <section className='text-opn'>
                    <p className='txt-access'><small>"Sensacional, gostei muito!"</small></p>
                  </section>
                  <section className='photo-inv'>
                    <img src={men01} alt="Homem de negócios" />
                    <section className='details'>
                      <p className='details-name'><strong>João F.</strong></p>
                      <p className='details-desc'>Software engineer</p>
                    </section>
                  </section>
                </div>
              </section>
              <section className='opn'>
                <div>
                  <section className="text-opn">
                    <p className='txt-access'><small>"Uma grande promessa para o mercado"</small></p>
                  </section>
                  <section className='photo-inv'>
                    <img src={men02} alt="Homem de negócios" />
                    <section className='details'>
                      <p className='details-name'><strong>Andrew H.</strong></p>
                      <p className='details-desc'>CEO of J.W Foundation</p>
                    </section>
                  </section>
                </div>
              </section>
              <section className='opn'>
                <div>
                  <section className="text-opn">
                    <p className='txt-access'><small>"Ideia bem inovadora"</small></p>
                  </section>
                  <section className='photo-inv'>
                    <img src={woman01} alt="Mulher de negócios" />
                    <section className='details'>
                      <p className='details-name'><strong>Mariane N.</strong></p>
                      <p className='details-desc'>
                        Finance analyst</p>
                    </section>
                  </section>
                </div>
              </section>
              <section className='opn'>
                <div>
                  <section className="text-opn">
                    <p className='txt-access'><small>"Já estou dentro! #Grass"</small></p>
                  </section>
                  <section className='photo-inv'>
                    <img src={woman03} alt="Mulher de negócios" />
                    <section className='details'>
                      <p className='details-name'><strong>Débora P.</strong></p>
                      <p className='details-desc'>Professional investor</p>
                    </section>
                  </section>
                </div>
              </section>
              <section className='opn'>
                <div>
                  <section className="text-opn">
                    <p className='txt-access'><small>"Sensacional, gostei muito!"</small></p>
                  </section>
                  <section className='photo-inv'>
                    <img src={woman02} alt="" />
                    <section className='details'>
                      <p className='details-name'><strong>Ana F.</strong></p>
                      <p className='details-desc'>Investment analyst</p>
                    </section>
                  </section>
                </div>
              </section>
            </section>
          </section>
        </ScrollReveal>
        <ParallaxImage
        classNameProp='container-2'
        imageSrc={verifyDisplay(2)}
        altText="Imagem Parallax"
      />
        <ScrollReveal>
          <h2>Como Funciona a Monetização da Sua Internet?</h2>
          <p>
            O processo é simples, transparente e totalmente seguro. Ao se cadastrar na <strong>Grass</strong>, você vai autorizar a plataforma a compartilhar parte da sua conexão de internet não utilizada. Isso acontece de forma totalmente automatizada e sem impacto no seu uso diário.</p>
        </ScrollReveal>
        <ScrollReveal>
          <ul>
            <li><strong>Fácil de Usar</strong>: Não há necessidade de fazer ajustes técnicos ou complicados. Uma vez cadastrado, basta deixar sua internet ativa e você começará a receber a compensação automaticamente.</li>
            <li><strong>Segurança em Primeiro Lugar</strong>: Toda a navegação feita via sua conexão é criptografada, garantindo total privacidade e segurança. A plataforma cumpre com as mais rigorosas normas de proteção de dados.</li>
            <li><strong>Sem Interrupções</strong>: A sua navegação diária não será impactada. Você continua usando a internet para navegar, assistir vídeos e jogar, enquanto ganha dinheiro com a largura de banda não utilizada.</li>
          </ul>
        </ScrollReveal>
        <ScrollReveal>
          <p><strong>Não há nenhum segredo</strong>: você compartilha o que já não está utilizando e a plataforma recompensa você por isso. A <strong>Grass</strong> permite que você ganhe até $10 por dia, simplesmente deixando sua conexão ativa. O melhor de tudo é que você não precisa se preocupar com a segurança de seus dados ou com complicações técnicas. A plataforma usa criptografia avançada para proteger a sua privacidade e garantir que o compartilhamento da sua internet seja feito de forma anônima e segura.</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2>O crescimento da Grass</h2>
          <ScrollReveal>
            <LineChart />
          </ScrollReveal>
        </ScrollReveal>
          <ParallaxImage
        imageSrc={verifyDisplay(3)}
        altText="Imagem Parallax"
        classNameProp='container-3'
      />
        <ScrollReveal>
          <p>O token da <strong>Grass</strong> experimentou um crescimento impressionante nos últimos tempos, e esse aumento tem gerado uma enorme expectativa entre os investidores e usuários da plataforma. Com uma valorização consistente, o token se tornou uma das opções mais atraentes no mercado de criptomoedas, e o melhor é que você pode fazer parte desse movimento agora mesmo. </p><br />
        </ScrollReveal>

          <h1>Qual o intuito da Grass?</h1>
        <ScrollReveal>
          <p>A seguir, veja o video retirado das redes socias da Grass, que aborda sobre a IA e de como ela deve ser treinada para dar informações corretas. O video ressalta a importância dos treinamentos da Inteligência Artificial (que é o intuito da Grass), e como a informação errada pode trazer confusão:</p>
        </ScrollReveal>

        <ScrollReveal>
          <Post />
        </ScrollReveal>
        <ScrollReveal>
          <p>O que podemos extrair de aprendizado do video é que uma IA precisa ser bem treinada para evitarmos dor de cabeça tanto no presente, quanto no futuro. O treinamento de uma Inteligência Artificial (IA), envolve um processo longo e duradouro, que a cada dia, deve sempre aperfeiçoar a IA.</p>
        </ScrollReveal>
        <ScrollReveal>
          <p>Se você ainda não conhece a <strong>Grass</strong>, agora é o momento perfeito para entrar. O token está em plena ascensão, e as oportunidades de ganhos são mais vantajosas do que nunca. A plataforma não apenas oferece uma maneira simples e segura de monetizar sua internet, mas também oferece um token que se valoriza a cada dia, potencializando ainda mais seus lucros.</p>
        </ScrollReveal>

        <ScrollReveal>
          <p>Ao se envolver com a <strong>Grass</strong>, você não está apenas monetizando sua largura de banda ociosa, mas também pode aproveitar o crescimento do token, que tem mostrado sinais claros de valorização. Isso significa que, além de ganhar dinheiro com a sua internet, você também tem a chance de se beneficiar diretamente do crescimento do token.</p>
        </ScrollReveal>

        <ScrollReveal>
          <p>O mercado está reagindo positivamente ao potencial da <strong>Grass</strong>, e quem entra agora, enquanto o token ainda está em crescimento, tem a chance de maximizar seus ganhos. Não perca essa oportunidade de se envolver com uma plataforma que está no caminho do sucesso.</p>
        </ScrollReveal>
      </Main>
      <Footer />
    </>
  )
}

export default App;
