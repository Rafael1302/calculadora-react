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

  const addNumbScreen=(n)=>{
    if(n === '+' || n === '-' || n === '*' || n === '/' && operator){
      console.log("=-*/")
      setOperator(false)
      setScreenValue(result + n)
      return
    }
    if(operator){
      setScreenValue(n)
      setOperator(false)
      return
    }
    const valueTypedScreen = screenValue + n
    setScreenValue(valueTypedScreen)
  }

  const deleteMemory = () =>{
    setOperator(false)
    setScreenValue('')
    setResult(0)
    setAcumulator(0)
    return
  }

  const Operation = (op) =>{
    if(op == 'bs'){
      let vscreen = screenValue
      vscreen = vscreen.substring(0,(vscreen.length-1))
      setScreenValue(vscreen)
      setOperator(false)
      return
    }
    try{
      const r = eval(screenValue)
      setAcumulator(r)
      setResult(r)
      setOperator(true)
    }catch{
      setResult('ERROR')
    }
  }

  const containerCss = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignitems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000'
  }

  const buttonsCss = {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
      <div style={containerCss}>
        <h3>Rafael's React Calculator</h3>
          {Screen(screenValue, result)}
        <div style={buttonsCss}>
            {Btn('AC', deleteMemory)}
            {Btn('(', ()=>addNumbScreen('('))}
            {Btn(')', ()=>addNumbScreen(')'))}
            {Btn('/', ()=>addNumbScreen('/'))}
            {Btn('7', ()=>addNumbScreen('7'))}
            {Btn('8', ()=>addNumbScreen('8'))}
            {Btn('9', ()=>addNumbScreen('9'))}
            {Btn('*', ()=>addNumbScreen('*'))}
            {Btn('4', ()=>addNumbScreen('4'))}
            {Btn('5', ()=>addNumbScreen('5'))}
            {Btn('6', ()=>addNumbScreen('6'))}
            {Btn('-', ()=>addNumbScreen('-'))}
            {Btn('1', ()=>addNumbScreen('1'))}
            {Btn('2', ()=>addNumbScreen('2'))}
            {Btn('3', ()=>addNumbScreen('3'))}
            {Btn('+', ()=>addNumbScreen('+'))}
            {Btn('0', ()=>addNumbScreen('0'))}
            {Btn('.', ()=>addNumbScreen('.'))}
            {Btn('<=', ()=>Operation('bs'))}
            {Btn('=', ()=>Operation('='))}


        </div>
      </div>
    </>
  );
}