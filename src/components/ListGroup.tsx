import { useState } from "react";

// Props are essentially parameters for the react component
// Props are immutable (read-only!)
interface Props {
	items: string[];
	heading: string;

	onSelectItem: (item: string) => void; // kind of like onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	// Hook
	// State is mutable, similar to local variables, and managed by component
	// Both state and props will cause a re-render when changed.
	const [selectedIndex, setSelectedIndex] = useState(-1);
	// uses this syntax: const [name, setName] = useState('');

	// <> tells react to use a fragment
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						key={item}
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
