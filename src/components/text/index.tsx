import React from 'react';
import './index.css'

interface Props{
  content: string[] | undefined
}
const Text = (props:Props) => {

  return (<>
  {props.content?.map((p, i) => {
    return (
      <p
      className="content-paragraph" 
      key={i}>
        {p}
      </p>
    )
  })}
  </>)
}

export default Text;
