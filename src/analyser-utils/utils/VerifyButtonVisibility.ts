import { useSelector } from "react-redux";
import { RootState } from "../../src/store/store";

export function VerifyButtonVisibility() {
    const data = useSelector((state: RootState) => state.data.data);
    const isVisible = useSelector((state: RootState) => state.data.isVisible);

    if(!isVisible && data) {
        if(!data.risks) {
                return true;
        } else {
            return false;
        }
    } else {
        return isVisible
    }
    }

export function SetVisibility(value?: boolean) {
    console.log(value)
    if(value) {

        if(value === true) {
            return true
        } else {
            return false;
        }
    } else {
        return false
    }
}