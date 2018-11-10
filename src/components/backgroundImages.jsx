import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
class BackgroundImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:1
        }
    }

    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.changeBackground(),
            10000
        )
    }

    changeBackground=()=>{
        this.setState({
            counter:this.state.counter < 6 ? this.state.counter+1 : 1
        })
    }

    render() {
        return (
            <div className={`bg bg-slide-${this.state.counter}`}>
                <ul >
                    <li>
                        <span>Image 1 {this.state.counter}</span>
                        <div>
                            <h3>pucker up</h3>
                        </div>
                    </li>
                </ul>
            </div>
   
        )
    }

}

export default BackgroundImages