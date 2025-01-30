import React, { useEffect } from "react";
import {ContentStyle} from "./style";

export const WeekPost: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <ContentStyle>
        <div className="box">
          <blockquote className="twitter-tweet">
              <p lang="pt">
                Consultas públicas do BC beneficiam investidores de criptoativos, defende Pinheiro Neto
                <a href="https://t.co/8hXXxLFy0G">https://t.co/8hXXxLFy0G</a>
              </p>
              &mdash; CriptoFacil (@criptofacil)
              <a href="https://twitter.com/criptofacil/status/1878760625582600263?ref_src=twsrc%5Etfw">
                January 13, 2025
              </a>
          </blockquote>
        </div>
      </ContentStyle>
  );
};

export const WeekPost2: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ContentStyle>
      <div className="box">
        <blockquote className="twitter-tweet">
            <p lang="pt">
              Número caixas eletrônicos de Bitcoin volta a subir
              <a href="https://t.co/0Y7sZs5rVh">https://t.co/0Y7sZs5rVh</a>
            </p>
            &mdash; CriptoFacil (@criptofacil)
            <a href="https://twitter.com/criptofacil/status/1878097415498064232?ref_src=twsrc%5Etfw">
              January 11, 2025
            </a>
          </blockquote>
      </div>
    </ContentStyle>
  );
};

export const WeekPost3: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <ContentStyle>
        <div className="box">
          <blockquote className="twitter-tweet"><p lang="pt">Receita Federal avança na regulamentação de operações com criptoativos<a href="https://t.co/o5Oo9j35Su">https://t.co/o5Oo9j35Su</a></p>&mdash; CriptoFacil (@criptofacil) <a href="https://twitter.com/criptofacil/status/1877039414238470629?ref_src=twsrc%5Etfw">January 8, 2025</a></blockquote>
        </div>
      </ContentStyle>
  );
};
