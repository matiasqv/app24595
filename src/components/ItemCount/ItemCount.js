import { Component } from 'react'
import './ItemCount.css'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 5 }
    }

    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h3>ClassCounter</h3>
                <h3>{this.state.count}</h3>
                <button className="Button" onClick={this.decrement}>-</button>
                <button className="Button" onClick={this.increment}>+</button>
            </>
        )
    }
}

export default ClassCounter