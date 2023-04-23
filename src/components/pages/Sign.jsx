import { SignIn } from "../views/SignIn";
import { SignUp } from "../views/SignUp";
import { useState } from "react";

const Sign = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    !isRegistering
      ? <SignIn setIsRegistering={setIsRegistering} />
      : <SignUp setIsRegistering={setIsRegistering} />
  );
};

export default Sign;