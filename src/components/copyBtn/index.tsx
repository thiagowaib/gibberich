import React from 'react';
import './index.css'

interface Props{
  action: () => void
}
const CopyBtn = (props:Props) => {
  return (<>
    <p 
    className="copy-button"
    onClick={props.action}
    >
      copy text
    </p>
  </>)
}

export default CopyBtn;
