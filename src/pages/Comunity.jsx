import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import styled from "styled-components";
import { Device } from "../components/Device";


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
    // const artist = {
    //   artist: songs.user.username
    // }
    const CommunityPage = styled.div`
    width:95%;
    margin-left: 2.5%;
    align-items:center;
    justify-items: center;
    text-align: center;
`

    const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-gap: 5px;
    grid-auto-rows: min-max(15rem); 
    justify-items:center;
    align-items: center;
    `;
    const Card = styled.div`
      @media ${Device.laptop} {
        cursor: pointer;
        background-color: none;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        max-width: 20rem;
        height: 20rem;
        align-items: center;
        justify-items: center;
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;

    :hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background-color:white;
}
      }

      @media ${Device.laptop} {
      }

      @media ${Device.laptop} {
      }
    `;

    const Audio = styled.audio`
 width: 15rem;

  `;

    const Name = styled.h4`
      font-family: Comfortaa;
      font-size: 2rem;
      color: #30373d;
    `;
    const Title = styled.h1`
      font-family: Comfortaa;
      font-size: 3rem;
      color: purple;
    `;
    return (
      <CommunityPage>
      <Title>Comunity PAGE </Title>
      <Name>{user.username}</Name>
      <GridContainer>
        {this.state.songs.length > 0 ? (
          songs.map((song) => {
            return (
              <Card id='card' key={song._id}>
                 <h4>Artist: {song.artist}</h4>
                <h4>Title:{song.name}</h4>
                <Audio controls>
                  <source src={song.urlPath} type="audio/ogg" />
                  <source src={song.urlPath} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </Audio>
                <p>Description: {song.description}</p>
              </Card>
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
      </GridContainer>
      </CommunityPage>
    );
  }
}

export default withAuth(Comunity);
