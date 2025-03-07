import { useSelector } from "react-redux";
import { RootState } from "../../src/store/store";

export const VerifyScore = () => {
  const data = useSelector((state: RootState) => state.data.data);
  let score: number = 100;

    if (data && data.risks) {
      data.risks.forEach((item: { level: string }) => {
        if (item.level === 'danger') {
          score -= 30;
          if(score < 0) {
            return score = 0
          }
        }
        if (item.level === 'warn' ) {
          score -= 20;
          if(score < 0) {
            return score = 0
          }
        } else {
          return score;
        }
      });
    }
    return score;
  };

  export const VerifyToken = (type: string) => {
    const data = useSelector((state: RootState) => state.data.data);
    if(type === 'name') {
      if(data && data.tokenMeta) {
        return data.tokenMeta.name
      } else if(data) {
        return data.token;
      }
      return 'Nome não identificado'
    }
  
    if (type === "liquidity") {
      if (data && data.totalMarketLiquidity) {
        return '$' + Number(data.totalMarketLiquidity).toLocaleString("en", {
          minimumFractionDigits: 0,
        });
      } else if (!data) {
        return "Não foi possível identificar a liquidez do token";
      }
      return 'A liquidez do token';
    }
   }

export const VerifyWarn = () => {
  const data = useSelector((state: RootState) => state.data.data);
  const score = VerifyScore();
  let warn: string = 'Bom';

  if(score <= 50) {
    if(data && data.risks) {
      return warn = `⚠️ Perigo, riscos identificados: ${data.risks.length}`;
    }
    return warn = 'Muito perigoso';
  } else if (score > 50 && score <= 70) {
    if(data && data.risks) {
      return warn = `⚠️ Cuidado, riscos identificados: ${data.risks.length}`;
    }
    return warn = 'Perigoso';
  } else if(score > 70 ) {
    if(data && data.risks) {
      return warn = `Riscos identificados: ${data.risks.length}`;
    }
    return warn = 'Qualidade do token';
  } 

  return warn;
}