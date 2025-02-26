import { useMediaQuery } from 'react-responsive';
import grassImgMobile from '../../assets/img/grassImgMobile.webp';
import grassImgMobile2 from '../../assets/img/grass2.webp';
import grassImgDesk from '../../assets/img/desktopNode.jpeg';
import grassImgDesk2 from '../../assets/img/grassApp.jpeg';

export const VerifyDisplay = (id: number): string => {
    const isMobile = useMediaQuery({ query: '(min-width: 0px) and (max-width: 767px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

    if(isMobile && id === 1) {
      return grassImgMobile
    } else if(isDesktop && id === 1) {
      return grassImgDesk;
    } else if(isDesktop && id === 2) {
      return grassImgDesk2;
    } else if (isMobile && id === 2) {
      return grassImgMobile2;
    } else if (isDesktop && id === 3) {
      return grassImgMobile2;
    } else if(isMobile && id === 3) {
      return grassImgDesk;
    } else {
      return '';
    }
}