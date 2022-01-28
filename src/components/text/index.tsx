import React, { createRef } from 'react';
import './index.css'

interface Props{
  content: string[] | undefined
  selected: (s:string | undefined) => void
}
const Text = (props:Props) => {

  const pRef = React.createRef<HTMLParagraphElement>()
  const [canSelect, setCanSelect] = React.useState(false)

  const handleSelect = () => {
    if(window.getSelection()?.toString() !== "" && canSelect)
      props.selected(window.getSelection()?.toString())
  }

  React.useEffect(()=>{
    pRef.current?.classList.add("eraseSelect")
    pRef.current?.classList.remove("eraseSelect")
    setCanSelect(true)
  })

  return (<>
  {props.content?.map((p, i) => {
    return (
      <p
      ref={pRef}
      onMouseUp={handleSelect}
      onDoubleClick={handleSelect}
      className="content-paragraph" 
      key={i}>
        {p}
      </p>
    )
  })}
  </>)
}

export default Text;
