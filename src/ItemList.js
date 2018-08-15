import React from 'react';

const ItemList = ({ elements }) => {
	const listItems = elements.map(todo =>
		<li key={todo}> {todo} </li>
  	);
	return (
		<ul>{listItems}</ul>
	);
}

export default ItemList;