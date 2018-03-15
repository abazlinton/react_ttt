import React from 'react';

const Cell = ({player, takeCell, location}) => {

  const handleClick = () => {
    takeCell(location);
  }

  return (
    <div className='cell' onClick={handleClick}>{player}</div>
  )

}

export default Cell;