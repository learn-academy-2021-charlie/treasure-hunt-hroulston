import Square from './components/Square.js'
import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombeLocation: null,
      counter: 5
    }
  }

componentDidMount(){
  let treasure = Math.floor(Math.random() * this.state.board.length)
  this.setState({treasureLocation: treasure})

  let bombe = Math.floor(Math.random() * this.state.board.length)
  this.setState({bombeLocation: bombe})
}

handleGamePlay = (index) => {
  const {board} = this.state
  if(index === this.state.treasureLocation){
    board[index]="💎"
    this.setState({board:board})
  }else if(index === this.state.bombeLocation){
    board[index]="💣"
    this.setState({board:board})
  }else{
    board[index] = "🌳"
    this.setState({board: board})
    this.setState({counter: this.state.counter - 1})
  }
}

  render(){
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div id="gameboard" >
        {this.state.board.map((value, index) => {return <Square
          value={value}
          key={index}
          index={index}
          handleGamePlay={this.handleGamePlay}
           />
         })}
         <p>Counter: {this.state.counter}</p>
         </div>
      </>
    )
  }
}
export default App
