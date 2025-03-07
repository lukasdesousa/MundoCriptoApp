// app/AnalyserV1.tsx
import React from "react";
import AnalyserGrid from "@/components/Analyser_components/AnalyserV1-interface/AnalyserV1-interface";
import Header from "@/components/Analyser_components/Header/Header";

export const metadata = {
    title: 'Analyser - Analise de riscos para criptomoedas',
    description:
      'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto.',
    keywords: 'memecoins, análise cripto, Analyser, criptomoedas, investimento, mercado cripto, crypto, crypto market, rugcheck',
    alternates: {
      canonical: 'https://lukasdesousa.github.io/MundoCriptoApp/analyser',
    },
    openGraph: {
      title: 'Analyser - Analise memecoins rapidamente',
      description:
        'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto.',
      url: 'https://lukasdesousa.github.io/MundoCriptoApp/analyser',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Analyser - Analise de risco para criptomoedas',
      description:
        'Utilize a ferramenta Analyser para analisar memecoins de forma rápida e eficiente. Descubra insights, dados e tendências do mercado cripto.',
    },
  };

const AnalyserV1: React.FC = () => {
    return (
        <>
        <Header />
        <AnalyserGrid />
        </>
    );
};

export default AnalyserV1;
