const Button = ({
	color,
	bgColor,
	text,
	customFunc
}) => {
	return (
		<button
			type='button'
			className='px-4 py-2 text-white rounded hover:drop-shadow-xl'
			style={{ background: bgColor, color: color}}
			onClick={customFunc}
		>
			{text}
		</button>
	)
}

export default Button