"use client";

import React, { useEffect } from "react";

const GrassInf: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
      <section>
        <div className="coinmarketcap-currency-widget" data-currencyid="32956" data-base="BRL" data-secondary="USD" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
      </section>
    );
};

export default GrassInf;
