import { signOut } from "firebase/auth"
import { ClAppearance } from "../classes/cl-appearance"
import { useNavigate } from "react-router-dom";

export const signUserOut = (auth: any): void => {
    const classAppearance = new ClAppearance();
    const navigation = useNavigate()

    classAppearance._makeLight()

    signOut(auth)
    navigation("/fare/");
}