import "./Chart.css";
import ChartBar from "./ChartBar";

export const Chart = props => {
  const data = props.data.map(x => x.value);
  const maxValue = Math.max(...data);

  return (
    <div className="chart">
      {props.data.map(x => (
        <ChartBar
          key={x.label}
          label={x.label}
          maxValue={maxValue}
          value={x.value}
        />
      ))}
    </div>
  );
};

export default Chart;
