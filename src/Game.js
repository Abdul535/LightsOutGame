import React, { Component } from 'react'
import Board from './Board'

export class Game extends Component {
    state = {
        nrows: 2,
        ncols: 2
    }

  setEasy = ()=>{
    this.setState({
      nrows: 2,
      ncols: 2
    })
  }
  setMedium =()=>{
    this.setState({
      nrows: 5,
      ncols: 5
    })
  }
  setHard = ()=>{
    this.setState({
      nrows: 8,
      ncols: 8
    })
  }

  render() {
    return (
      <>
      <div className='App'>
        <Board  nprows={this.state.nrows} npcols={this.state.ncols}/>
        {/* {this.state.nrows}
        {this.state.ncols} */}
      </div>
      {/* <div className="Game-mode">
        <button onClick={this.setEasy}>Easy</button>
        <button onClick={this.setMedium}>Medium</button>
        <button onClick={this.setHard}>Hard</button>
      </div> */}
      </>
    )
  }
}

export default Game