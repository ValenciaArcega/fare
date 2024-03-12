import css from "../../css/Message.module.css"

export const Message = ({ txt, children }) => <article className={css.msg}>
	{children}
	<p>{txt}</p>
</article>

export const MessageSign = ({ txt, children }) => <article className={css.msgSign}>
	{children}
	<p>{txt}</p>
</article>
