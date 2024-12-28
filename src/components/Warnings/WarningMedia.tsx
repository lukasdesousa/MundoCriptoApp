import React from "react";
import { WarningStyle } from "./styled";
import { MdWarning } from 'react-icons/md';


const WarningMedia: React.FC = () => {
    return <>
        <WarningStyle>
            <section>
                <MdWarning />
                <p>Essa aplicação ainda está sendo atualizada e adaptada para telas maiores</p>
            </section>
        </WarningStyle>
    </>
}

export default WarningMedia;