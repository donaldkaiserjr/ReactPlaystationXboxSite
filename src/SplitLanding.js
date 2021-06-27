import React, {Component} from 'react'
import "./index.css"



const SplitLeft = () => {
    return(
      <div className="split left">
        <h1>Playstation 5</h1>
        <a href="https://www.playstation.com/en-us/ps5/" className="btn" target="_blank">Buy Now</a>
    </div>
    )
}



const SplitRight = () => {
    return (
      <div className="split right">
        <h1>XBox Series X</h1>
        <a href="https://www.xbox.com/en-US" className="btn" target="_blank">Buy Now</a>
    </div>
      )
}




class SplitLanding extends Component {
    render() {
        return (
            <div>
                <SplitLeft />
                <SplitRight />
            </div>
        )
    }
}

export default SplitLanding
