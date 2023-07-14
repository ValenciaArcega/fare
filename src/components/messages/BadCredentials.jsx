/**
 * @author Valencia Arcega Luis Angel
 */
import { IconPadlock } from "../svg/BadCredentials"

export default function BadCredentials({ message }) {
  return <main className="msg-BadCredentials">
    <IconPadlock />
    <p className="msg-BadCredentials-p">{message}</p>
  </main>
}
