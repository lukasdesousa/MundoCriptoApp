import { VerifyScore } from "./VerifyToken";

export const PickColor = () => {
    const score = VerifyScore();
    let color: string = 'primary';

    if(score <= 50) {
        color = 'danger';
    } else if(score > 50 && score <= 70) {
        color = 'warning';
    } else {
        return color;
    }
    return color;
  };