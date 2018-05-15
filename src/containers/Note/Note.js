import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  state = {
    noteId: this.props.noteId,
    noteContent: this.props.noteContent,
    noteStatus: this.props.noteStatus,
    clicked: false
  };

  handleRemoveNote = id => {
    this.props.removeNote(id);
  };

  render() {
    return (
      <div className="Note Note--fade-in">
        <span className="Note__btn" onClick={() => this.handleRemoveNote(this.props.noteId)}>
          &times;
        </span>
        <p className="Note__content">{this.state.noteContent}</p>
      </div>
    );
  }
}

export default Note;
