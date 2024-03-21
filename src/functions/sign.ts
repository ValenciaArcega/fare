import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useAppearance } from "../hooks/useAppearance";

export const signUserOut = (auth: any): void => {
    const navigation = useNavigate()
    const { makeLight } = useAppearance()

    makeLight()
    signOut(auth)
    navigation("/fare/");
}