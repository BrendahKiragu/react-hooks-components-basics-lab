import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
// function About (){
//   return <div> <a id="about">About</a>
//   </div>
// }
const About = () => <div><a id="about">About</a></div>

// class About extends React.Component {
//   render (){
//     return <div><a id="about">About</a></div>
//   }
// }


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
