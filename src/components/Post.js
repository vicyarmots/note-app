import React, { useState } from 'react';
import FormText from './FormText';
import SearchTag from './SearchTag';
import ListNotes from './ListNotes';
import ContainerNotes from './ContainerNotes';

const Post = () => {
	const [state, setState] = useState({
		value: '',
		tag: '',
		json: null,
	});

	const [data, setData] = useState([]);

	return (
		<>
			<FormText
				value={state.value}
				data={data}
				tag={state.tag}
				json={state.json}
				setState={setState}
				setData={setData}
			/>
			<SearchTag value={state.value} data={data} tag={state.tag} json={state.json} setState={setState} />
			<ListNotes
				value={state.value}
				data={data}
				tag={state.tag}
				json={state.json}
				setState={setState}
				setData={setData}
			/>
			<ContainerNotes />
		</>
	);
};

export default Post;
