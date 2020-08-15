import React, { Component } from 'react';
import axios from 'axios';
import EditTask from './EditTask'


class TaskDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getTheTask();
  }

  getTheTask = () => {
    const { params } = this.props.match;

    axios.get(`http://localhost:4000/api/tasks/${params.taskId}`)

    .then( responseFromApi =>{
      const theTask = responseFromApi.data;
      this.setState(theTask);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditTaskForm = () => {
    if(!this.state.title){
        this.getTheTask();
    } else {
        return <EditTask theTask={this.state} getTheTask={this.getSingleTask} {...this.props} />
    }
  }

  deleteTask = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:4000/api/tasks/${params.taskId}`)
    .then( () =>{
        this.props.history.push('/tasks');
    })
    .catch((err)=>{
        console.log(err)
    })
}

  render(){
    return(
      <div>
        <h3>TASK DETAILS</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p> 
        <div>{this.renderEditTaskForm()} </div>
        <button onClick={() => this.deleteTask()}>Delete task</button>
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    )
  }
}

export default TaskDetails;