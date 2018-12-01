import React from "react";
import { render } from "react-dom";
import BarChart from "./BarChart";
import { Resizable, ResizableBox } from 'react-resizable';

import './index.css'

  
class App extends React.Component {
  state = {
    width: 400, height: 400,
    data : {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Drip capital chart demo',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [10, 5, 15, 10, 25, 20],
            animation: true
          }
        ]
      }
    }  
  
  onResize = (event, {element, size}) => {
    this.setState({width: size.width, height: size.height});
  };

  render() {
    let {data, height, width} = this.state
    return (
        <div style={{
            display: 'flex', width: '100%', justifyContent: 'center'
        }}>
            <ResizableBox className="box" height={height} width={width} onResize={this.onResize}>
                <BarChart 
                    data= {data}
                    height={height} width={width}
                />
            </ResizableBox>
        </div>
            
    );
  }
}

render(<App />, document.getElementById("root"));
