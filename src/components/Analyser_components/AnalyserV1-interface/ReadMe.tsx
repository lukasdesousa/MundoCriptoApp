import React from 'react';
import { Typography, Box } from '@mui/material';

const ReadmeContent: React.FC = () => {
  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Analyser V<em>1.0</em>
      </Typography>
      <Typography>
  Olá, seja bem-vindo(a) à primeira versão da ferramenta <em>Analyser</em>. Assim como todas as primeiras versões de ferramentas, podem ocorrer muitos bugs temporários, que em breve serão corrigidos! Estamos constantemente trabalhando para aprimorar cada detalhe e tornar sua experiência mais fluida e intuitiva. Sua opinião é fundamental para nós: sinta-se à vontade para enviar sugestões e reportar eventuais problemas através do <a href="www.linkedin.com/in/lukasdesouza" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Agradecemos imensamente sua paciência e confiança enquanto evoluímos o <em>Analyser</em> para oferecer uma solução cada vez melhor e mais robusta para atender às suas necessidades.
</Typography><br />
      <Typography variant="body1" paragraph>
        Saiba mais sobre a ferramenta no reposítorio da API: <a href="https://github.com/lukasdesousa/MundoCriptoAnalyserAPI" target="_blank" rel="noopener noreferrer">README</a>
      </Typography>
    </Box>
  );
};

export default ReadmeContent;
