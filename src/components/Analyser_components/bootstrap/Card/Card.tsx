import React from 'react';
import grassBanner from '../../../../assets/img/grassBannerContent.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardStyle } from '../../../../styles/analyser_styles/Card/style';
import { Link } from 'react-router-dom';

const Card: React.FC = () => {
  return (
    <CardStyle>
       <Link to={'/MundoCriptoApp/grass'}>
         <div className="card">
               <img src={grassBanner} className="card-img" alt="Card image" />
               <div className="card-img-overlay">
          <h5 className="card-title text-dark">Grass Airdrop</h5>
          <p className="sub-tittle card-text">
            Aprenda como ganhar criptomoedas enquanto trabalha, estuda ou apenas se diverte. Com a grass, isso é totalmente possível!
          </p>
          <p className="card-text text-dark">
            <small>Última atualização há 15 dias atrás</small>
          </p>
               </div>
             </div>
       </Link>
    </CardStyle>
  );
};

export default Card;
