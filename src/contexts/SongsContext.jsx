// import React, { createContext, Component } from "react";

// export const SongsContext = createContext();

// class SongsContextProvider extends Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     fetch('http://localhost:5000/scenes')
//       .then((response) => response.json())
//       .then((data) => this.setState({ data }));
//   }
//   render() {
//     return (
//       <SongsContext.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </SongsContext.Provider>
//     );
//   }
// }

// export default SongsContextProvider;
