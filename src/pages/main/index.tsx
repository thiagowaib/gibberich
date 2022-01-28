import React from 'react';
import { Generate } from '../../resources';
import {
  Header,
  Counter,
  CopyBtn,
  Text,
  Placeholder
} from '../../components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const Main = () => {

  const [paragraphs, setParagraphs] = React.useState(0)
  const [canCopy, setCanCopy] = React.useState(false)
  const [textArray, setTextArray] = React.useState<string[]>()

  const handleGen = (go:boolean, p:number) => {
    if(go) {
      setCanCopy(true)
      setTextArray(Generate(p))
    } else {
      setCanCopy(false)
    }
  }

  const handleCopy = () => {
    let textString = textArray?.toString()
    textString && navigator.clipboard.writeText(textString)
    toast.success('Copied!', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  return (<>
    <section className="main-body">

        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        />
      <section className="header-container">
        <Header/>
      </section>


      <section className="button-container">
        <Counter
        count = {paragraphs}
        action={(count)=>{
          handleGen(count > 0, count)
          setParagraphs(count)
        }}
        />
        {canCopy && (
          <CopyBtn
          action={handleCopy}
          />
          )}
      </section>

      {canCopy ? (
        <article className="text-container">
          <Text
          content={textArray}
          />
        </article>
      ) : (
        <Placeholder/>
      )}
    </section>
  </>)
}

export default Main;
