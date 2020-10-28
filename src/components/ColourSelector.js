import React from "react";

const ColourSelector = (props) => {
    const {changeHandlerCb, hex} = props

    function changeHandler(event){
        changeHandlerCb(event.target.value)
    }

    return(
        <input
            type="color"
            value={hex}
            onChange={changeHandler} />
    )
}


// class ColorSelector extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {hex: props.hex}
//     }

//     handleChange = (event) => {
//         console.log(event.target.value)
//         this.setState({hex: event.target.value})
//     }

//     render() {
//         // const hex = this.props.hex
//         const {hex} = this.state
//         return(
//             <input type="color" value={hex} onChange={this.handleChange}/>

//         )

//     }
// }

// ColorSelector.defaultProps = {
//     hex: "f4424b"
// }

export default ColourSelector