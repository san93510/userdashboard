import React, { Component } from 'react';
import './user.css';

class User extends Component {
    constructor(){
        super();
    }

    render() {
      return (
        <div className="App">
        <div className="col-md-4"class="container">
          <div id="use">
            <h1>Welcome to greatwits family</h1>
            <h2>Upcomming Events</h2>
            <a class="btn btn-info" href="https://www.google.co.in">Invite Your Guest</a>
            <br/><br/>
            <a class="btn btn-info" href="">Join Health & Featness</a>
            <br/><br/>
            <a class="btn btn-info" href="">Book your property</a>
            <br/><br/>
            <a class="btn btn-info" href="">Loged Complains</a>
            <br/><br/>
            <a class="btn btn-info" href="">Invite Your Guest</a> 
            </div>                   
          </div>
        </div>
      );
    }
  }
  
  export default User;