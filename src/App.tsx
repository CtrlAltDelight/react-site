import Alert from "./components/Alert";

function App() {
  let items = ["New York", "London", "Beijing", "Paris", "Delhi"];

  // event handler
	const handleSelectItem = (item: string) => {
		console.log(item);
	}

  return (
    <div>
		<Alert>
			Hello <span>World</span>
		</Alert>
    </div>
  );
  // Self closing syntax: <Message />
}

export default App;
