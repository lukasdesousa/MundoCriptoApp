import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { VerifyScore } from "./VerifyToken";


const risksDescription_vars = {

  // NOT SAFE

  withLowLiquidity: '⚠️ - Esse token apresenta uma baixa liquidez, o que significa que ele pode ser difícil de vender. Tokens com baixa liquidez podem ser mais arriscados devido à dificuldade de vender em momentos de crise.',

  withLpUnlocked: '⚠️ - Uma grande quantidade de LP tokens está desbloqueada. Isso significa que o dono pode remover a liquidez a qualquer momento, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

  withAfewUserLiquidity: '⚠️ - Poucos usuários fornecem liquidez. Isso significa que um pequeno grupo de pessoas pode controlar o preço do token, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

  topUsersMoreThan70: '⚠️ Risco alto - Os top holders possuem mais de 70% do token supply. Isso significa que esses usuários podem manipular o preço do token, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

  oneUserLargeAmount: '⚠️ - Um único usuário possui uma grande quantidade do token. Isso significa que este mesmo usuário pode manipular o preço do token significativamente, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

  top10ThanMore50: '⚠️ Risco alto - Os top 10 holders possuem mais de 50% do token supply. Isso significa que esses usuários podem manipular o preço do token, o que pode resultar em alta volatilidade ou até mesmo em um rug pull (golpe onde os fundos são drenados da pool).',

  mutableMetadata: '⚠️ Risco alto - O contrato do token possui metadados mutáveis. Isso significa que o dono do contrato pode alterar as informações do token a qualquer momento, o que pode resultar em perda de confiança dos investidores.',

  creatorHistory: '⚠️ Risco alto - O criador desse token tem um histórico de rug-pulls! Isso significa que este mesmo criador, já drenou fundos de outros tokens.',

  feeConfigEnable: '⚠️ Risco - O criador pode alterar as taxas a qualquer momento, isso significa que as taxas podem ser modificadas pelo proprietário sem aviso prévio, impactando os custos das transações.',

  nameMismatch: '⚠️ Risco alto - O nome do token não corresponde aos metadados do arquivo, indicando possível golpe em breve e/ou tentar enganar investidores se passando por outro token.',

  symbolMismatch: '⚠️ Risco alto - O símbolo deste token não corresponde aos metadados do arquivo (Token Symbol Mismatch), o que pode indicar um erro na configuração ou uma tentativa de enganar investidores ao imitar outro ativo. Sempre verifique o contrato oficial antes de qualquer transação.',

  copyCatToken: '⚠️ Risco - Este token está usando o símbolo de um token verificado (Copycat Token), o que pode indicar uma tentativa de enganar investidores ao se passar por um ativo legítimo. Verifique sempre o contrato antes de qualquer transação.',

  lowAmountOfHolders: '⚠️ Poucos investidores possuem este token, o que pode indicar baixa liquidez, falta de adoção ou possível risco de manipulação de mercado por grandes detentores. Tokens com poucos holders podem ser mais voláteis e suscetíveis a esquemas como rug pulls.',

  highCorrelation: '⚠️ Risco alto - Os principais detentores possuem quantidades semelhantes do token, o que pode indicar possível manipulação de mercado. Isso aumenta o risco de grandes despejos (dumping), causando alta volatilidade.',

  // SAFE

  highIndex: 'Bom - Esse token tem um índice alto, isso significa que ele passou pelos testes de riscos da ferramenta Analyser e é considerado seguro. Tokens com um alto índice contém: Uma boa liquidez, criadores sem históricos de rug-pulls, os principais holders da moeda não contém uma enorme quantidade de tokens, e dentre vários outros fatores.'
  ,
}

function verifyDescriptions(warnings: string, score: number, data: object) {
  if (!warnings && score === 100 && data) {
    return risksDescription_vars.highIndex;
  }

  switch (warnings) {
    case 'Large Amount of LP Unlocked':
      return risksDescription_vars.withLpUnlocked;
    case 'Low Liquidity':
      return risksDescription_vars.withLowLiquidity;
    case 'Fee config enabled':
      return risksDescription_vars.feeConfigEnable;
    case 'Top 10 holders high ownership':
      return risksDescription_vars.topUsersMoreThan70;
    case 'Single holder ownership':
      return risksDescription_vars.oneUserLargeAmount;
    case 'Creator history of rugged tokens':
      return risksDescription_vars.creatorHistory;
    case 'High holder concentration':
      return risksDescription_vars.top10ThanMore50;
    case 'Mutable metadata':
      return risksDescription_vars.mutableMetadata;
    case 'Name Mismatch':
      return risksDescription_vars.nameMismatch;
    case 'Symbol Mismatch':
      return risksDescription_vars.symbolMismatch;
    case 'Low amount of LP Providers':
      return risksDescription_vars.withAfewUserLiquidity;
    case 'Low Amount of holders':
      return risksDescription_vars.lowAmountOfHolders;
    case 'High holder correlation':
      return risksDescription_vars.highCorrelation;
    case 'Copycat token': 
      return risksDescription_vars.copyCatToken;
  }

}

export const RisksDescriptions: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);
  console.log(data)
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