import React from 'react';
import Canvas from "./components/Canvas"
import Plaque from "./components/Plaque"

class App extends React.Component{

    render(){
        return(
            <div>   
                <h1>Hello World!</h1>
                <Canvas hex="#bad455"/>
                <Plaque />
            </div>
        )
    }
}


export default App