import { IconPadlock } from "../svg/BadCredentials";

export default function BadCredentials() {
  return (
    <main className="msg-BadCredentials">
      <IconPadlock />
      <p className="msg-BadCredentials-p">Las credenciales no coinciden</p>
    </main>
  );
}