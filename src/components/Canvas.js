import React from "react";
import ColourSelector from "./ColourSelector";

const canvasStyles = {
    border: "6px solid black"
}
const divStyles = {
    margin: "1em"
}

class Canvas extends React.Component{
    constructor(props) {
        super(props)
    
        this.canvasRef = React.createRef()
        this.context = null
    
        const {hex, coords, height, width} = props
        this.state = {
            hex,
            coords,
            height,
            width
        }
    }

    setContext() {
        this.context = this.canvasRef.current.getContext('2d');
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = "round";
        this.context.lineWidth = 3;
    }

    componentDidMount() {
        this.setContext()
    }
    
    componentDidUpdate(){
        this.setContext()
    }

    changeHandler = (hexVal) => {
        this.setState({hex: hexVal})
    }

    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const { height, width, coords } = this.state;
        if (x > 0 && x < width && y > 0 && y < height) {
            if (coords) {
                this.context.beginPath();
                this.context.moveTo(coords[0], coords[1]);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                this.setState({ coords: [x,y]});
            }
        } else {
            this.setState({ coords: null });
        }
    }

    onCanvasMouseUp = () => {
        this.setState({ coords: null });
    }
    
    onCanvasMouseDown = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        this.setState({ coords: [x,y]})
    }

    render(){
        const {hex, height, width} = this.state
        return(
            <div>
                <div style={divStyles}>
                    <ColourSelector
                        changeHandlerCb={this.changeHandler}
                        hex={hex} />
                </div>
                <div style={divStyles}>
                    <canvas 
                        ref={this.canvasRef} 
                        style={canvasStyles}
                        width={width}
                        height={height}
                        onMouseMove={this.onCanvasMouseMove}
                        onMouseUp={this.onCanvasMouseUp}
                        onMouseDown={this.onCanvasMouseDown}/>

                </div>
            </div>
        )
    }
}

Canvas.defaultProps = {
    hex: "#f4424b",
    coords: null,
    height: 400,
    width: 400
}

export default Canvas;