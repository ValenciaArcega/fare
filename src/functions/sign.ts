import { signOut } from "firebase/auth"
import { auth } from "../../dal/credentials";
import { useNavigate } from "react-router-dom";
import { useAppearance } from "../hooks/useAppearance";

export const signUserOut = (): void => {
    const navigation = useNavigate()
    const { makeLight } = useAppearance()

    signOut(auth)
    makeLight()
    navigation("/fare/");
}