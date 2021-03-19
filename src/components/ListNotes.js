import React from 'react';
import Note from './Note';

const ListNotes = ({ value, note, data, tag, json, setState, setData, setNote }) => {
	return (
		<ul className="listBox">
			{data.map((item) => {
				return <Note value={item.text} key={item.id} data={data} setData={setData} note={item} />;
			})}
		</ul>
	);
};

export default ListNotes;
