import React, { Component } from 'react';
import './App.css';
import LoginWindow from './components/LoginWindow/LoginWindow';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { DB_CONFIG} from "./config/config";
import * as firebase from 'firebase';
import 'firebase/database';



class App extends Component {

  app = firebase.initializeApp(DB_CONFIG);
  db = this.app.database().ref().child('notes');

  state = {
    notes: [],
    userName : '',
    password : '',
    loggedIn: false,
    message: '',
    name: ''
    };

  componentWillMount() {
      const previousNotes = [...this.state.notes];

      this.db.on('child_added', snap => {
          previousNotes.push({
              id: snap.key,
              noteContent: snap.val().noteContent,
          });

      this.setState({
          notes: previousNotes
      })
  });

      this.db.on('child_removed', snap => {
            for( let i=0; i< previousNotes.length; i++){
                if( previousNotes[i].id === snap.key){
                    previousNotes.splice(i, 1);
                }
            }
            this.setState({
                notes: previousNotes
          })
      });


      firebase.auth().onAuthStateChanged(firebaseUser => {

          if(firebaseUser) {
              this.setState({
                  loggedIn: true
              })
          } else {
              this.setState({
                  message: 'Please log in'
              })
          }

          if (firebaseUser.uid === 'stTUCTkvZ4aQiwcc5TalORsdzDE3') {
              this.setState({
                  name: 'Nikola'
              })
          } else if (firebaseUser.uid === 'OOnMImGQNRUi8b5hABcQVRw4EFf2') {
              this.setState({
                  name: 'Marina'
              })
          } else if (firebaseUser.uid === 'aZJ50tizOVUErlQxfWT3f5zk1dB2') {
              this.setState({
                  name: 'Nevena'
              })
          } else if (firebaseUser.uid === 'qP1KPx9WjOcqK9sBeQcLXYPKeQ53') {
              this.setState({
                  name: 'Vanja'
              })
          } else {
              this.setState({
                  name: 'Unknown'
              })
          }
      });
  }

  AddNote = (note) => {
      if(note.length > 0){
        this.db.push().set({ noteContent: note  + ` \u000A \u000A -- Sent by ${this.state.name}  --` })
      } 
      
  };

  removeNote = (id) => {
      this.db.child(id).remove()
  };

  getUserValue= (e) => {
      this.setState({
          userName: e.target.value
          })
  };

  getUserPassword= (e) => {
      this.setState({
          password : e.target.value
        })
    };

  HandleLogin = () => {
      const email = this.state.userName;
      const pass = this.state.password;

      const promise = firebase.auth().signInWithEmailAndPassword(email, pass);

      promise.catch(e=> this.setState({
           message: e.message
       }))
    };

  HandleSignup = () => {
      const email = this.state.userName;
      const pass = this.state.password;

      const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);

      promise.catch(e=> this.setState({
           message: e.message
        }))
    };

    HandleLogout = () => {
        firebase.auth().signOut();
        this.setState({
            loggedIn: false
        })
    };


  render() {

    if (this.state.loggedIn) {
      return (
      <div className="notesWrapper">
          <Header handleLogout= {this.HandleLogout} />

          <Body notes={this.state.notes}
                removeNote={this.removeNote} />

          <Footer AddNote={this.AddNote} />
      </div>
      )
  } else {
      return (
          <LoginWindow getUserValue={this.getUserValue}
                       getUserPassword={this.getUserPassword}
                       HandleLogin={this.HandleLogin}
                       HandleSignup={this.HandleSignup}
                       message={this.state.message} />
      )
    }
  }
}

export default App;
