import React from 'react';

const ItemList = ({ elems }) => {
	const listItems = elems.map((todo) =>
    	<li key={todo}>
      		{todo}
    	</li>
  	);
	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	);
}

export default ItemList;