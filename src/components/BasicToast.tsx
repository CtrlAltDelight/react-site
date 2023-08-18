import Toast from "react-bootstrap/Toast";

interface Props {
	children: string;
}

function BasicToast({ children }: Props) {
	return (
		<Toast>
			<Toast.Header>
				<img src="vite.svg" className="rounded me-2" alt="" />
				<strong className="me-auto">Bootstrap</strong>
				<small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>{children}</Toast.Body>
		</Toast>
	);
}

export default BasicToast;
