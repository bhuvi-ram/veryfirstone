import React from "react"
import Hello from "./Hello"


class App extends React.Component {
  
  render(){
    return ( <div>
                <Hello />
              </div>
            )
   }
 }
 
 
 React.render(<App>,document.getElementById('root'))
