import React from 'react';

const MySampleComponent = () => {
  const unusedVariable = "This should appear grayed out because it is not used."

  const duplicateVariable = "Duplicated definition of variable. Should be highlighted as an error"
  console.log(duplicateVariable)
  
  if(1===1){console.log("This should reformat into multiple lines")}

  return (
    <>
    <h1>Hello World</h1>
    <div>Configure VSCode to reformat this on save.</div>
    </>
    
  )
}

export default MySampleComponent

