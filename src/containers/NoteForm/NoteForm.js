import React , { Component } from 'react';
import './NoteForm.css';


class NoteForm extends Component {

    state = {
        newNoteContent: '',
    };

    HandleUserInput =(event) => {
        this.setState({
            newNoteContent: event.target.value
        });
    };

    WriteNote = (event) => {
        this.props.addNote(this.state.newNoteContent);

        this.setState({
            newNoteContent: ''
        });
    };

    HandleEnterKey = (event) => {
        if ( event.key === 'Enter' ){
            this.props.addNote(this.state.newNoteContent);

            this.setState({
                newNoteContent: ''
            });
        }
    };

    render () {
        return (
            <div className='Form'>

                <input type="text"
                       className='Form__input'
                       placeholder='Write a new note..'
                       value={this.state.newNoteContent}
                       onChange={this.HandleUserInput}
                       onKeyPress={this.HandleEnterKey}/>

                <button className='Form__btn'
                        onClick={this.WriteNote}>Add note</button>
            </div>
        )
    }
}

export default NoteForm;