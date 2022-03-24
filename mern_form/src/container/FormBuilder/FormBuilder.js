import React, { Component } from "react";
import axios from 'axios';

import Help from '../../hoc/Help'

class FormBuilder extends Component {
    state = {
        name: '',
        email: '',
        title: '',
        content: '',
        author: 'Apu'
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        axios.post('URL', data)
            .then(response => {
                console.log(response)
            })

    }


    render () {
        return (
            <Help>
                <div>
                    <h1>Blog Submission Form</h1>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                    <label>Title:</label>
                    <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                    <label>Content:</label>
                    <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                    <select value={this.state.author} onChange={(event) => this.setState({content: event.target.author})}>
                        <option value="Apu">Apu</option>
                        <option value="Max">Me</option>
                    </select>
                    <button onClick={this.postDataHandler}>Submit</button>
                </div>
            </Help>
        )
    }
}

export default FormBuilder