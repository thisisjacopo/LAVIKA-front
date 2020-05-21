import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import { SongsContext } from "../contexts/SongsContext";
//IMPORT DATA FROM MONGO
//MAP OVER ALL SONGS COLLECTION
//DIPLAY ONE CARD FOR EACH SONG WITH TITLE AND DESCRIPTION
class Comunity extends Component {
  static contextType = SongsContext;
  render() {
    const { user } = this.props;
    console.log(this.context.data);
    return (
      <div>
        <h1>Comunity PAGE </h1>
        <h4>{user.username}</h4>
        <h4>{this.context.data[0].name}</h4>
        <h4>{this.context.data[0].description}</h4>
      </div>
    );
  }
}

export default withAuth(Comunity);
