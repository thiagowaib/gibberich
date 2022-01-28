import { count } from 'console';
import React from 'react';
import './index.css'

interface Props{
  count: number,
  action: (pCount:number) => void
}

const Counter = (props: Props) => {

  const [pCount, setPCount] = React.useState(props.count)


  const handleClick = (increment:number) => {

    if(pCount !== 0 && pCount !== 9) {
      setPCount(pCount + increment)
      props.action(pCount + increment)
    } else if(pCount === 0 && increment > 0) {
      setPCount(pCount + increment)
      props.action(pCount + increment)
    } else if(pCount === 9 && increment < 0) {
      setPCount(pCount + increment)
      props.action(pCount + increment)
    }
  }

  return (<>
  
    <div className="counter-container">
      <p>#paragraphs</p>

      <div
      className="counter"
      >
          <i 
          className="material-icons"
          onClick={()=>handleClick(-1)}
          >
            remove
          </i>
          <span>{pCount}</span>
          <i 
          className="material-icons"
          onClick={()=>handleClick(+1)}
          >
            add
          </i>
      </div>
    </div>
  </>)
}

export default Counter;
