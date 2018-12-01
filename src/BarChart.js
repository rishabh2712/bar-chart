import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = (props) => {
  let {data} = props
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={data}
        width={props.width}
        height={props.height}
        options={{
          maintainAspectRatio: true
        }}
      />
    </div>
  );
}
    

export default BarChart