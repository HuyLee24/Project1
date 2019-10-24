import React from 'react';
import './Marker.css';
import WindowInfo from './WindowInfo';

const Marker = ({ color, name, $hover }) => {
    let colorTest = $hover ? 'red' : color;

    let renderName = () => {
        return $hover ? <WindowInfo name={name} /> : null;
    }

    return (
      <>
        <div
          className="pin bounce"
          style={{ backgroundColor: colorTest, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
        {renderName()}
      </>
    );
  };

  export default Marker;