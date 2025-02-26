import React from "react";
import { WarningStyle } from "../../styles/components_styles/Warnings_styles/styled";
import { MdWarning } from 'react-icons/md';


const WarningMedia: React.FC = () => {
    return <>
        <WarningStyle>
            <section>
                <div>
                    <MdWarning />
                </div>
                <p>Essa aplicação ainda está sendo atualizada e adaptada para telas maiores</p>
            </section>
        </WarningStyle>
    </>
}

export default WarningMedia;