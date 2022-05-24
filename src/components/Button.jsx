const Button = ({ text }) => {
	return (
		<button
			type='button'
			className='
		text-white
		hover:drop-shadow-xl
		rounded		
		'
			style={{ background: 'blue' }}
		>
			{text}
		</button>
	)
}

export default Button