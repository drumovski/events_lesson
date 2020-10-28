import React from "react";

const plaqueStyle = {
    border: "3px solid black",
    margin: "1em",
    padding: "1em",
    backgroundColor: "gold",
    display: "inline-block"
}

class Plaque extends React.Component{
    constructor(props){
        super(props)
        const {painter, painting} = props
        this.state = {painter, painting}

    }

    bindToState(event, stateVal){
        this.setState({[stateVal]: event.target.value})
    }

    render(){
        const {painting, painter} = this.state
        return(
            <div>
                <div style={plaqueStyle}>
                    <h2>{painting}</h2>
                    <h2>{painter}</h2>
                </div>
                <div>
                    <input
                        type="text"
                        defaultValue="painting name goes here"
                        onChange={(event) => this.bindToState(event, 'painting')} />
                    <input
                        type="text"
                        defaultValue="painter name goes here"
                        onChange={(event) => this.bindToState(event, 'painter')} />
                </div>
            </div>
        )
    }

}

Plaque.defaultProps = {
    painter: "anon",
    painting: "untitled #9001"
}

export default Plaque;