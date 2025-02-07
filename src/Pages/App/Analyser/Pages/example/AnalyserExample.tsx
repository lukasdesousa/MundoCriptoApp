import React from "react";
import Header from "../../../components/Header/Header";
import { Main } from "../../../../../components/MainP/styled";
import ParticleBackground from "../components/ParticleBackground";
import CustomizedTimeline from "../components/Timeline/Timeline";
import Footer from "../../../../../components/Footer/Footer";
import { TimelineStyle } from "./styles/styled";

const AnalyserExample: React.FC = () => {
    return <>
    <Header /><Main>
            <h1>Etapas de desenvolvimento</h1>
        <TimelineStyle>
                <CustomizedTimeline />
        </TimelineStyle>
        <ParticleBackground />
    </Main>
    <Footer />
        </>
}

export default AnalyserExample;