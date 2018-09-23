import React from 'react'

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
      <h1>{this.state.date.toLocaleTimeString()}</h1>
    )
  }
}

export default Timer
