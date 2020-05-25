import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Device } from "../components/Device";


const ProfilePage = styled.div`
@media ${Device.laptop} {
  width: 95%;
  margin-left: 2.5%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

@media ${Device.laptop} {
}

@media ${Device.laptop} {
}
`;

const UserInfo = styled.div`
@media ${Device.laptop} {
width: 45%;
margin-left: 2.5%;
display: flex;
float: left;
flex-direction: column;
justify-items: center;
align-items: center;
}

@media ${Device.laptop} {
}

@media ${Device.laptop} {
}
`;
const UserSongs = styled.div`
@media ${Device.laptop} {
width: 45%;
margin-left: 2.5%;
display: flex;
flex-direction: column;
float: right;
justify-items: center;
align-items: center;
}

@media ${Device.laptop} {
}

@media ${Device.laptop} {
}
`;
class Profile extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/users", { withCredentials: true })
      .then((response) => this.setState({ user: response.data }));
  }

  handleDelete(id) {
    console.log(id);
    axios
      .delete(`http://localhost:5000/scenes/${id}`, { withCredentials: true })
      .then((response) => console.log(response));
    this.componentDidMount();
  }

  render() {
    const { user } = this.state;
    console.log(user);


    return (
      <ProfilePage>
        {!user ? (
          "loading"
        ) : (
          <div>
          <UserInfo>
            <img
              className="profileImg mt-4"
              src={user.imgPath ? user.imgPath : "hay q poner foto default"}
              alt=""
            />
            <h1>{user.username}</h1>
            <h4>{user.email}</h4>
            <p>{user.aboutMe}</p>
            <Link to={`/edit-profile`}>
              <h4>Edit profile</h4>
            </Link>
            </UserInfo>
            {user.songs.map((song) => {
              return (
                <UserSongs key={song._id}>
                  <h4>{song.name}</h4>
                  <audio controls>
                    <source src={song.urlPath} type="audio/ogg" />
                    <source src={song.urlPath} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                  <button
                    onClick={() => {
                      this.handleDelete(song._id);
                    }}
                  >
                    X
                  </button>
                </UserSongs>
                
              );
              
            })}
            </div>
        )}
      </ProfilePage>
    );
  }
}

export default withAuth(Profile);
