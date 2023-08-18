interface Props {
	children?: string;
	color?:
		| "primary"
		| "secondary"
		| "danger"
		| "success"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "close";

	onPressButton: () => void;
}

const Button = ({ children, color = "primary", onPressButton }: Props) => {
	return (
		<button
			type="button"
			className={"btn btn-" + color}
			onClick={onPressButton}
		>
			{children}
		</button>
	);
};

export default Button;
