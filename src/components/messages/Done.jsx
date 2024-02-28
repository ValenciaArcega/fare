import css from "../../css/Message.module.css"
import { Clipboard } from "../icons/msg-done"

export const DoneCopy = ({ txt }) => <article className={css.msg}>
	<Clipboard height={28} stroke="green" />
	{txt}
</article>