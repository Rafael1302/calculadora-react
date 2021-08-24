import React, {useState} from 'react'

export default function App (){
 
  const [screenValue, setScreenValue] = useState('')
  const [result, setResult] = useState(0)
  const [acumulator, setAcumulator] = useState(0)
  const [operator, setOperator] = useState(false)

  const Screen = (value, res) => {
    <div style={screenCss}>
        <span style={screenOpCss}>{value}</span>
        <span style={screenResCss}>{res}</span>
    </div>
  }

  const Btn = (label, onClick) => {
    return(
      <button style={btnCss} onClick={onClick}>{label}</button>
    )
  }

  const screenCss = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignitems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: 260,
  }

  const screenOpCss = {
    fontSize: 25,
    color: '#fff',
    height: 20,
  }

  const screenResCss = {
    fontSize: 50,
    color: '#fff',
  }

  const btnCss= {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }

  return(
    <>

    </>
  );
}