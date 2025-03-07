import Image from 'next/image';
import { Main } from '@/styles/components_styles/MainStyle/styled';
import Footer from '@/components/Footer/Footer';
import HeaderGrass from '@/components/Grass/Header/HeaderGrass';
import ScrollReveal from '@/components/Scroll/ScrollReveal';
import GrassInf from '@/components/Chart/GrassInf';
import Post from '@/components/Grass/PostGrass/Post';
import grassImg from '../../../public/img/grass2.webp';
import grassImg2 from '../../../public/img/grassImgMobile.webp';
import men01 from '../../../public/img/men01.jpg';
import woman01 from '../../../public/img/pexels-emmy-e-1252107-2381069.jpg';
import men02 from '../../../public/img/men02.jpg';
import woman02 from '../../../public/img/woman03.jpg';
import woman03 from '../../../public/img/woman04.jpg';
import GrassButton from '@/components/Grass/Button';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'Mundo Cripto - Aprenda a ganhar dinheiro sem esforço com a grass',
  description:
    'Aprenda como ganhar criptomoedas enquanto estuda, trabalha ou apenas deixando o seu computador ligado.',
  keywords: 'memecoins, análise cripto, Analyser, criptomoedas, investimento, mercado cripto, crypto, crypto market, rugcheck, grass, tokens, cryptocurrency, get grass, grass airdrop',
  alternates: {
    canonical: 'https://lukasdesousa.github.io/MundoCriptoApp/grass',
  },
  openGraph: {
    title: 'Analyser - Analise memecoins rapidamente',
    description:
      'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto.',
    url: 'https://lukasdesousa.github.io/MundoCriptoApp/grass',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundo Cripto - Aprenda a ganhar dinheiro sem esforço com a grass',
    description:
      'Aprenda como ganhar criptomoedas enquanto estuda, trabalha ou apenas deixando o seu computador ligado.',
  },
};

const imageStyle = {
  borderRadius: '10px',
  
}

function Grass() {
  return (
    <>
      <HeaderGrass />
      <Main>
        <ScrollReveal>
          <h1>Ganhe criptomoedas sem esforço</h1>
          <p className='txt-access' style={{width: '80%', textAlign: 'center', display: 'block', margin: 'auto'}}>
            Como a GRASS pode te ajudar a conquistar uma renda passiva sem esforço algum. Somente compartilhando a sua banda ociosa da internet.
          </p>
          <br />
          <section style={{width: '80%', margin: 'auto', paddingBottom: '5px'}}>
            <Image
              src={grassImg}
              alt="Imagem Grass"
              placeholder='blur'
              layout='responsive'
              style={imageStyle}
              quality={80}
              priority={true}
            />
          </section>
          <ScrollReveal>
            <a
              href="https://app.getgrass.io/register/?referralCode=tu4BPIdwQvUG96c"
              target='_blank'
              rel="noopener noreferrer"
            >
              <GrassButton />
            </a>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal>
          <h2>Como funciona?</h2>
          <p className='txt-access'>
            Ao se cadastrar na <strong>Grass</strong>, você permite que a plataforma compartilhe a largura de banda da sua conexão de forma segura e controlada. Esse compartilhamento é utilizado para tarefas como navegação anônima, e você recebe uma compensação por isso. O melhor? Você continua usando a sua internet normalmente, sem interrupções!
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h1>Por que usar a Grass?</h1>
          <ScrollReveal>
            <p>
              A Grass oferece uma solução inovadora e vantajosa para quem busca ganhar tokens de forma simples e sem custos, utilizando a largura de banda não utilizada de sua conexão de internet.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              Ao instalar a extensão da Grass e compartilhar sua largura de banda não utilizada, você começa a acumular pontos automaticamente. Esses pontos podem ser convertidos em tokens $GRASS, sem que você precise fazer nada além de manter a extensão ativa enquanto navega. Isso transforma a utilização da sua conexão em uma fonte de renda passiva.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              A plataforma é extremamente fácil de usar. Basta se registrar, instalar a extensão no seu navegador e ativar o compartilhamento de largura de banda. Não há complexidade no processo, e você pode começar a ganhar tokens praticamente no momento da configuração.
            </p>
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal>
          <h1 className='opn-H1'>Opiniões de investidores</h1>
          <p className='opn-P'>Arraste para o lado</p>
          <section className='opn-inv'>
            <section className='opn-cards'>
              <section className='opn'>
                <div>
                  <section className='text-opn'>
                    <p className='txt-access'>
                      <small>"Sensacional, gostei muito!"</small>
                    </p>
                  </section>
                  <section className='photo-inv'>
                    <Image
                      src={men01.src}
                      alt="Homem de negócios"
                      width={80}
                      height={80}
                    />
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
                    <p className='txt-access'>
                      <small>"Uma grande promessa para o mercado"</small>
                    </p>
                  </section>
                  <section className='photo-inv'>
                    <Image
                      src={men02.src}
                      alt="Homem de negócios"
                      width={80}
                      height={80}
                    />
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
                    <p className='txt-access'>
                      <small>"Ideia bem inovadora"</small>
                    </p>
                  </section>
                  <section className='photo-inv'>
                    <Image
                      src={woman01.src}
                      alt="Mulher de negócios"
                      width={80}
                      height={80}
                    />
                    <section className='details'>
                      <p className='details-name'><strong>Mariane N.</strong></p>
                      <p className='details-desc'>Finance analyst</p>
                    </section>
                  </section>
                </div>
              </section>
              <section className='opn'>
                <div>
                  <section className="text-opn">
                    <p className='txt-access'>
                      <small>"Já estou dentro! #Grass"</small>
                    </p>
                  </section>
                  <section className='photo-inv'>
                    <Image
                      src={woman03.src}
                      alt="Mulher de negócios"
                      width={80}
                      height={80}
                    />
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
                    <p className='txt-access'>
                      <small>"Muito bacana!"</small>
                    </p>
                  </section>
                  <section className='photo-inv'>
                    <Image
                      src={woman02.src}
                      alt="Mulher de negócios"
                      width={80}
                      height={80}
                    />
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

        <ScrollReveal>
        <section style={{width: '80%', margin: 'auto', padding: '10px'}}>
            <Image
              src={grassImg2}
              alt="Imagem Grass"
              placeholder='blur'
              layout='responsive'
              style={imageStyle}
              quality={80}
              priority={true}
            />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <h2>Como Funciona a Monetização da Sua Internet?</h2>
          <p>
            O processo é simples, transparente e totalmente seguro. Ao se cadastrar na <strong>Grass</strong>, você autoriza a plataforma a compartilhar parte da sua conexão de internet não utilizada de forma automatizada, sem impactar seu uso diário.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ul>
            <li>
              <strong>Fácil de Usar</strong>: Não há necessidade de ajustes técnicos complicados. Após o cadastro, basta manter sua internet ativa para começar a receber a compensação automaticamente.
            </li>
            <li>
              <strong>Segurança em Primeiro Lugar</strong>: Toda a navegação é criptografada, garantindo privacidade e segurança total. A plataforma adota rigorosas normas de proteção de dados.
            </li>
            <li>
              <strong>Sem Interrupções</strong>: Você continua usando a internet normalmente enquanto ganha dinheiro com a largura de banda não utilizada.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            <strong>Não há nenhum segredo</strong>: você compartilha o que já não está utilizando e a plataforma recompensa você por isso. A <strong>Grass</strong> permite que você ganhe até $10 por dia, simplesmente mantendo sua conexão ativa. Tudo é feito de forma anônima e segura com criptografia avançada.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2>O crescimento da Grass</h2>
          <ScrollReveal>
            <GrassInf />
          </ScrollReveal>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            O token da <strong>Grass</strong> tem experimentado um crescimento impressionante, gerando grande expectativa entre investidores e usuários. Com uma valorização consistente, o token se torna uma das opções mais atraentes no mercado cripto.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h1>Qual o intuito da Grass?</h1>
          <p>
            A seguir, veja um vídeo retirado das redes sociais da Grass, que aborda como a IA deve ser treinada para fornecer informações corretas. O vídeo ressalta a importância de treinar bem a Inteligência Artificial para evitar informações equivocadas.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Post />
        </ScrollReveal>

        <ScrollReveal>
          <p>
            O aprendizado extraído do vídeo reforça a necessidade de um treinamento constante na IA, garantindo que ela se aperfeiçoe continuamente e evite complicações futuras.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            Se você ainda não conhece a <strong>Grass</strong>, agora é o momento perfeito para entrar. A plataforma não só permite monetizar sua internet, mas também oferece um token em ascensão que pode potencializar seus ganhos.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            Ao participar da <strong>Grass</strong>, você transforma sua largura de banda ociosa em uma fonte de renda e pode se beneficiar do crescimento do token, maximizando seus lucros.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p>
            O mercado está reagindo positivamente ao potencial da <strong>Grass</strong>. Quem entra agora tem a chance de aproveitar um cenário de valorização crescente.
          </p>
        </ScrollReveal>
      </Main>
      <Footer />
    </>
  );
}

export default Grass;

