import { signOut } from "firebase/auth"
import { auth } from "../../../dal/credentials";

export function useSignOut(navigation: Function, root: HTMLElement) {
    const signUserOut = (): void => {
        signOut(auth)
        root.removeAttribute("id")
        navigation("/fare/");
    }

    return { signUserOut }
}