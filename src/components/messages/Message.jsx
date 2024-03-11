import css from "../../css/Message.module.css"

export const Message = ({ txt, children }) => <article className={css.msg}>
	{children}
	<p>{txt}</p>
</article>
