import { signOut } from "firebase/auth"
import { ClAppearance } from "../classes/cl-appearance"

export const signUserOut = (auth): void => {
    const classAppearance = new ClAppearance();
    classAppearance._makeLight()

    signOut(auth)
}