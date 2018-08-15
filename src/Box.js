import React from 'react';

const Box = ({ onButtonClick, onNewItem, item }) => {
	return (
		<div className='box'>
			<input type='text' value={item} onInput={onNewItem}/>
			<button onClick={onButtonClick}>Add</button>
		</div>
	);
}

export default Box;