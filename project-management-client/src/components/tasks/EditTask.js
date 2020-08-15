import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.theTask.title,
            description: this.props.theTask.description
        }
    }

    handleTaskFormSubmit = event => {
        const title = this.state.title;
        const description = this.state.description;

        event.preventDefault();

        axios
            .put(`http://localhost:4000/api/tasks/${this.props.theTask._id}`, {
                title,
                description
            })
            .then(() => {
                this.props.getTheTask();
                this.props.history.push('/tasks');
            })
            .catch(error => console.log(error));
    }

    handleChangeTaskTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeTaskDesc = event => {
        this.setState({
            description: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <hr />
                <h3>Edit form</h3>
                <form onSubmit={this.handleTaskFormSubmit}>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={e => this.handleChangeTaskTitle(e)}
                  />
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={this.state.description}
                    onChange={e => this.handleChangeTaskDesc(e)}
                  />
        
                  <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default  EditTask