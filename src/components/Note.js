import React from 'react';

const Note = ({ value, note, data, tag, json, setState, setData, setNote }) => {
	const deleteNote = () => {
		setData(data.filter((item) => item.id !== note.id));
	};
	return (
		<div>
			<li>{value}</li>
			<button>Edit</button>
			<button onClick={deleteNote}>Delete</button>
		</div>
	);
};

export default Note;
