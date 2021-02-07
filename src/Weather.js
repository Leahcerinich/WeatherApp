import React from 'react';

class Weather extends React.Component {
    render() {
        console.log('this.props', this.props);
        return (
        <div>
          <img src={`/${this.props.image}.svg`} alt='weather condition'/>
          <div className='weather__description'>{this.props.description}</div>
          <div className='weather__temperature-container'>
          <div className='weather__temperature'>{this.props.temperature}</div>
          <div className='weather__celsius'>{`\u00B0c`}</div>
          </div>
        </div>
        );
    }
}

export default Weather;
