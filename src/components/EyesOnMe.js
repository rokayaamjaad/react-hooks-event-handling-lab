// Code Keypad Component Here

function EyesOnMe (){

  const focus =()=>{
    console.log('Good!')
    }

  const blur =()=>{
      console.log('Hey! Eyes on me!')
      }
    return (
        <div>
   <button onBlur={blur} onFocus={focus}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;
