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
          <a href="https://app.getgrass.io/register/?referralCode=tu4BPIdwQvUG96c" target='_blank'><button>Acessar a Grass</button></a>
        </ScrollReveal>
      </ScrollReveal>

        <ScrollReveal>
          <h2>Como funciona?</h2>
          <p className='txt-access'>
            Ao se cadastrar na <strong>Grass</strong>, você permite que a plataforma compartilhe a largura de banda da sua conexão de forma segura e controlada. Esse compartilhamento é utilizado para tarefas como navegação anônima, e você recebe uma compensação por isso. O melhor? Você continua usando a sua internet normalmente, sem interrupções!</p>
        </ScrollReveal>
        <ScrollReveal>
          <h1>Por que usar a Grass?</h1>
          <ScrollReveal>
            <p>
              A Grass oferece uma solução inovadora e vantajosa para quem busca ganhar tokens de forma simples e sem custos, utilizando a largura de banda não utilizada de sua conexão de internet</p>
          </ScrollReveal>
          <ScrollReveal>
            <p>Ao instalar a extensão da Grass e compartilhar sua largura de banda não utilizada, você começa a acumular pontos automaticamente. Esses pontos podem ser convertidos em tokens $GRASS, sem que você precise fazer nada além de manter a extensão ativa enquanto navega. Isso transforma a utilização da sua conexão em uma fonte de renda passiva.</p>
          </ScrollReveal>
          <ScrollReveal>
            <p>
              A plataforma é extremamente fácil de usar. Tudo o que você precisa fazer é se registrar, instalar a extensão no seu navegador e ativar o compartilhamento de largura de banda. Não há complexidade no processo, e você pode começar a ganhar tokens praticamente no momento em que configurar a extensão.
            </p>
          </ScrollReveal>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className='opn-H1'>Opniões de investidores</h1>
          <p className='opn-P'>Arraste para o lado</p>
        </ScrollReveal>
        <ParallaxImage
          classNameProp='container-2'
          imageSrc={VerifyDisplay(2)}
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
            <ParallaxImage
              imageSrc={VerifyDisplay(3)}
              altText="Imagem Parallax"
              classNameProp='container-3'
            />
          </ScrollReveal>
        </ScrollReveal>
        <ScrollReveal>
          <p>O token da <strong>Grass</strong> experimentou um crescimento impressionante nos últimos tempos, e esse aumento tem gerado uma enorme expectativa entre os investidores e usuários da plataforma. Com uma valorização consistente, o token se tornou uma das opções mais atraentes no mercado de criptomoedas, e o melhor é que você pode fazer parte desse movimento agora mesmo. </p>
        </ScrollReveal>

        <ScrollReveal>
          <h1>Qual o intuito da Grass?</h1>
          <p>A seguir, veja o video retirado das redes socias da Grass, que aborda sobre a IA e de como ela deve ser treinada para dar informações corretas. O video ressalta a importância dos treinamentos da Inteligência Artificial (que é o intuito da Grass), e como a informação errada pode trazer confusão:</p>
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

export default Analiser;
