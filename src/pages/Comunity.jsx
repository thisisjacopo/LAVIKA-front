import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import styled, {ThemeProvider} from "styled-components";

class Comunity extends Component {
  // static contextType = SongsContext;
  state = {
    songs: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/scenes", { withCredentials: true })
      .then((response) => this.setState({ songs: response.data }));
  }

  render() {
    const { user } = this.props;
    const songs = this.state.songs;
    console.log(songs);
    const Name = styled.h4`
      font-family: Mantra;
      font-size: 3rem;
      color: #30373d;
    `;
    const Title = styled.h1`
      font-family: Comfortaa;
      font-size: 5rem;
      color: purple;
    `;
    const ComunityDiv = styled.h1`
      display: flex;
      flex-direction: column;
      width: 90%;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 4rem;
    `;
    

    return (
      <ComunityDiv>
        <Title>Comunity PAGE </Title>
        <Name>{user.username}</Name>

        {this.state.songs.length > 0 ? (
          songs.map((song) => {
            return (
              <div key={song._id}>
                <Name>{song.name}</Name>
                <audio controls>
                  <source src={song.urlPath} type="audio/ogg" />
                  <source src={song.urlPath} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            );
          })
        ) : (
          <h1>Coming</h1>
        )}

        {/* <Card width={356}>
  <Image src={props.image} />
  <Heading>SCENE</Heading>
  <Text
  fontSize={[2,3]}
  fontWeight='REGULAR'
  color='BLACK'>
  gfhgfjuhkjhhgn gkhm,lkhkuhjmh hjkh,hhkgkgh jljkliilkjljljñokñkññjklhkjhghg
</Text>
</Card> */}
      </ComunityDiv>
    );
  }
}

export default withAuth(Comunity);
