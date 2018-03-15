import React from 'react';
import Cell from './Cell';

const Grid = ({grid, takeCell}) => {

  const cells = grid.map(function(cell, index){
    return (
      <Cell 
        key={index} 
        player={cell} 
        location={index} 
        takeCell={takeCell}
      />)
  })

  return(
    <div id="grid">
      {cells}
    </div>
  )

}

export default Grid;