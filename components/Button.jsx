import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({
	children,
	href,
	className = "",
	icon = null,
	external = false,
}) {
	const classes = `hover:bg-discord-blurple/30 bg-discord-blurple/20 border-2 border-discord-blurple font-semibold text-discord-blurple dark:text-white py-3 px-4 transition rounded-lg inline-block ${className}`;

	return external ? (
		<a
			href={href}
			className={classes}
			target="_blank"
			rel="noopener noreferrer"
		>
			{icon ? <FontAwesomeIcon className="mr-2" icon={icon} /> : ""}
			{children}
		</a>
	) : (
		<Link href={href}>
			<button className={classes}>{children}</button>
		</Link>
	);
}