import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { VerifyScore } from "./VerifyToken";


export const risksDescription_vars = {

    // NOT SAFE

    withLowLiquidity: '⚠️ - Esse token apresenta uma baixa liquidez, o que significa que ele pode ser difícil de vender. Tokens com baixa liquidez podem ser mais arriscados devido à dificuldade de vender em momentos de crise.',
    
    withLpUnlocked: '⚠️ - Uma grande quantidade de LP tokens está desbloqueada. Isso significa que o dono pode remover a liquidez a qualquer momento, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',
    
    withAfewUserLiquidity: '⚠️ - Poucos usuários fornecem liquidez. Isso significa que um pequeno grupo de pessoas pode controlar o preço do token, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',
    
    topUsersMoreThan70: '⚠️Risco alto - Os top holders possuem mais de 70% do token supply. Isso significa que esses usuários podem manipular o preço do token, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',
    
    oneUserLargeAmount: '⚠️ - Um único usuário possui uma grande quantidade do token. Isso significa que este mesmo usuário pode manipular o preço do token significativamente, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

    top10ThanMore50: '⚠️Risco alto - Os top 10 holders possuem mais de 50% do token supply. Isso significa que esses usuários podem manipular o preço do token, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

    mutableMetadata: '⚠️Risco alto - O contrato do token possui metadados mutáveis. Isso significa que o dono do contrato pode alterar as informações do token a qualquer momento, o que pode resultar em perda de confiança dos investidores.',

    // SAFE

    highIndex: 'Bom - Esse token tem um índice alto, isso significa que ele passou pelos testes de riscos da ferramenta Analyser e é considerado seguro.',
    
    withNoLowLiquidty: 'Bom - Esse token não apresenta baixa liquidez, o que significa que ele pode ser facilmente vendido. Tokens com alta liquidez são menos arriscados devido à facilidade de vender em momentos de crise.',

    topUsersNoMoreThan70: 'Bom - Este token não apresenta um risco significativo, pois os top holders possuem menos de 70% do token supply. Isso significa que esses usuários não podem manipular o preço do token significativamente, o que resulta em menor volatilidade e menor risco de rug pull (golpe onde os fundos são drenados da pool).',
  }
  
  function verifyDescriptions(warnings: string, score: number, data: object) {
    if(!warnings && score === 100 && data) {
      return risksDescription_vars.highIndex;
    }

    switch (warnings) {
      case 'Large Amount of LP Unlocked':
        return risksDescription_vars.withLpUnlocked;
      case 'Low Liquidity':
        return risksDescription_vars.withLowLiquidity;
      case 'Top 10 holders high ownership':
        return risksDescription_vars.topUsersMoreThan70;
      case 'Single holder ownership':
        return risksDescription_vars.oneUserLargeAmount;
      case 'High holder concentration':
        return risksDescription_vars.top10ThanMore50;
      case 'Mutable metadata':
        return risksDescription_vars.mutableMetadata;
        case 'Low amount of LP Providers': 
        return risksDescription_vars.withAfewUserLiquidity;
    }

}

export const RisksDescriptions: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);
  const score = VerifyScore();

  // Se não houver riscos, retorna um array com um objeto vazio
  const risksArray =
    data && data.risks && data.risks.length > 0 ? data.risks : [{ name: "" }];

  return (
    <>
      {risksArray.map((item, index: number) => (
        <CardContent key={index}>
          <Typography variant="h6">
            {data && verifyDescriptions(item.name, score, data.risks)}
          </Typography>
        </CardContent>
      ))}
    </>
  );
};