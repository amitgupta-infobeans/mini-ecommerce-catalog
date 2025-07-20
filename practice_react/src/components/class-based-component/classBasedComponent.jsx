import React, { Component } from "react"


class ClassBasedComponent extends Component {

    constructor() {
        super();
        this.state = { counter: 0, isColor: 0 }
        console.log("consturcore is calinggg .....")
    }

    componentDidMount() {
        console.log("component did mount.................")
    }

    componentDidUpdate = (prevProps, prevState)=>{
        if(prevState.counter !== this.state.counter){
            console.log("Counter jus updated... ", prevState.counter, "and new counter: ", this.state.counter)
        }
    }
    componentWillUnmount (){
        console.log("componene  Unmount now......")
    }

    changeColorAndUpdateCounter = () => {
        this.setState((prev) => ({ counter: prev.counter + 1, isColor: !prev.isColor }))
    }

    render() {
        return (<>
            <div className="flex mt-10 justify-center items-center flex-col">
                <p style={{ fontSize:'30px', color: this.state.isColor ? "red" : "green" }}>Count value: {this.state.counter}</p>
                <button className="p-2 mt-10 bg-amber-950 text-white" onClick={this.changeColorAndUpdateCounter} >Increase Counter</button>
            </div>
        </>)

    }
}

export default ClassBasedComponent

