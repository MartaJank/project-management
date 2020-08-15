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
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default  EditTask