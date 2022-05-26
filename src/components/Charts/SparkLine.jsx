import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts"

const SparkLine = ({
	id,
	height,
	width,
	data,
	color,
	type,
	currentColor
}) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName='x'
			yName='yval'
			type={type}
			tooltipSettings={{
				visible: true,
				format: '${x} : data ${yval}',
				trackLineSettings: {
					visible: true,
				},
				// template: '<div>${x}</div><div>${yval}</div>'
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	)
}

export default SparkLine