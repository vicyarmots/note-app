import React from 'react';

const SearchTag = ({ value, note, data, tag, json, setState }) => {
	return (
		<form className="searchTag">
			<input placeholder="Искать заметку по тегу" value={tag} />
			<button className="tagButton">Искать</button>
		</form>
	);
};

export default SearchTag;
