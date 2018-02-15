import React, { Component } from 'react';

var firebase = require('firebase');

var config = {
 apiKey: "AIzaSyD9hSEJkXZ_SSyb880qNIkRCwPx7O5G884",
 authDomain: "survey-1719.firebaseapp.com",
databaseURL: "https://survey-1719.firebaseio.com",
projectId: "survey-1719",
storageBucket: "survey-1719.appspot.com",
messagingSenderId: "466197990846"
};
firebase.initializeApp(config);


class Authenticate extends Component {


  //SignIN-Event
  signin(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email,password);

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
    .then(user =>{
      var err = "Welcome" + user.email;
      firebase.database().ref('users/'+user.uid).set({
        email:user.email
      });
      console.log(user);
      this.setState({message:err});
    })
    .catch(e =>{
      const err = e.message;
      this.setState({message:err});
      console.log(this.state);
    });

  }


  //Login-Event
  login(event)
  {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email,password);

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise
    .then(user =>{
      var log = document.getElementById('logout');
      const err = "You have successfully Logged In " + user.email;
      log.classList.remove('hide');
      this.setState({message:err});
    });

    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({message:err});
    });
  }


  //Logout-Event
  logout(){
    firebase.auth().signOut();
    var log = document.getElementById('logout');
    var error = "You have successfully Logged Out ";
    log.classList.add('hide');
    this.setState({message: error});
  }

  constructor(props){
    super(props);

    this.state = {
      message: ''
    };
    this.login = this.login.bind(this);
    this.signin = this.signin.bind(this);
    this.logout = this.logout.bind(this);
  }

  render(){
    return(
      <div>
        <input type="email" ref="email" id="email" placeholder="Enter your email" /><br />
        <input type="password" ref="password" id="pass" placeholder="Enter your password" /><br />
        <p>{this.state.message}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signin}>Sign Up</button>
        <button onClick={this.logout} className="hide" id="logout">Log Out </button>
      </div>
    );
  }
}
export default Authenticate;
