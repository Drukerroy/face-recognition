import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f4'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
			<div className='form center pa4 br2 shadow-2'>
				<input className='ba b--near-white f4 pa2 w-70 h2 center' type='text' onChange={onInputChange} />
				<button className='center ba b--near-white w-30 grow f5 h2 link dib white bg-light-purple'
				onClick={onButtonSubmit}
				>Detect</button>
			</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;