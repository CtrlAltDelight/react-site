// PascalCasing -- Capitalize the first letter of every word
// This is the preferred method of react developers
function Message() {
	// JSX: JavaScript XML
	const name = 'CJ';
	// Inside the braces {} you can write any JavaScript expression that returns a value
	if(name)
		return <h1>Hello {name}</h1>;
	return <h1>Hello World</h1>
}

export default Message;
