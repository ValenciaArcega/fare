
import css from "../../css/Message.module.css"
import { Caution } from "../icons/msg-error"

export const ErrorCaution = ({ txt }) => <article className={css.msg}>
    <Caution height={28} fill="#ff2c2c" />
    {txt}
</article>
