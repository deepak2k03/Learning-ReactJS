import { useState } from "react";

function App() {

  const [pending, setPending] = useState(false);

  const handleButton = async () => {
    setPending(true)
    await new Promise(res => setTimeout(res, 2000))
    //
    setPending(false)
  }

  return (
    <div>
      <h1>useTransition Hook in React js 19</h1>
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}