import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from "@syncfusion/ej2-react-charts";
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        // format: '${point.x} : data ${point.yval}'
      }}
      legendSettings={{background:'white'}}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      />
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((data, index) => (
            <SeriesDirective
              key={index}
              {...data}
            />
          ))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked