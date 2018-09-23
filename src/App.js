import React from 'react'
import './App.css'

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount(){
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  render(){
    return (
      <div className="timer">
        <h1 className="time">{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Timer
