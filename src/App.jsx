import { useState, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [advice,setAdvice]=useState("");
    async function getAdvice() {
      const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    }
   useEffect(function(){
       getAdvice();
   },[])

  return (
    <> 
      <div className="advice">
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Click for advice</button>
        <Message count={count} />
      </div> 
    </>
  )
}


export default App
