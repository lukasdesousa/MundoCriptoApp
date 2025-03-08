import { VerifyScore } from "./VerifyToken";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const ScoreSummary = (type: string) => {
    const data = useSelector((state: RootState) => state.data.data);
    const score = VerifyScore();
    if(type === 'tittle') {
            if(score <= 50) {
                return 'Esse token tem um índice muito baixo';
            } else if(score > 50 && score <= 70) {
                return 'Esse token tem um índice médio';
            } else if(score > 70 && score <= 100 && data && data.risks) {
                return 'Esse token tem um bom índice';
            } else {
                return 'Não foi possível buscar o índice do token'
            }
    }

    if(type === 'sub-tittle') {
        if(score) {
            if(score <= 50) {
                return 'A ferramenta Analyser buscou profundamente os dados do token inserido e as informações do tokens são caracteristicas de um token perigoso, entenda:';
            } else if(score > 50 && score <= 70) {
                return 'A ferramenta Analyser buscou profundamente os dados do token inserido e as informações do tokens são caracteristicas de um token duvidoso, entenda:';
            } else if(score > 70 && data) {
                if(data.risks) {
                    if(Array.isArray(data.risks) && data.risks.length > 0) {
                        return 'A ferramenta Analyser buscou profundamente os dados do token inserido e as informações do tokens são caracteristicas de um token bom, mas apresenta algum risco, entenda:';
                    }
                }
            } else {
                return 'A ferramenta Analyser buscou profundamente os dados do token inserido e as informações do tokens são caracteristicas de um token seguro, entenda:';
            }
        }
        
        if(data) {
            if(!data.risks) {
                return 'Não foi possível buscar o resumo dos riscos do token';
            }
        }
    }

}

