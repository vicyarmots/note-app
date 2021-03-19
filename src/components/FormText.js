import React from 'react';

const FormText = ({ value, note, data, tag, json, setState, setData }) => {
	const handleInputNote = (event) => {
		setState((preVal) => ({ ...preVal, value: event.target.value }));

		// here  will be checkout tags array
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (value !== '') {
			let noteJson = {
				data: data,
				note: note,
			};
			setData([...data, { text: value, id: Math.random() * 1000 }]);
			setState((preVal) => ({
				...preVal,
				json: JSON.stringify(noteJson),
			}));
		} else {
			return;
		}
	};

	return (
		<form className="form-text">
			<input placeholder="add note" onChange={handleInputNote} value={value} />
			<button onClick={handleSubmit} className="add">
				Add
			</button>
		</form>
	);
};

export default FormText;
