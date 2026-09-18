// import "./App.css";
// function App() {
//   const trainername="Manoj";
//   const trainingday=3;
//   return (
//     <main className="App">
//       <section className="App-header">
//       <p className="daylabel">React day</p>
//       <h2 className="title">College course explore </h2>
//       <p>Trainer:{trainername}</p>
//       <p>Training Day:{trainingday}</p>
//       <p>used react,jsx,componenrs</p>
//     </section>
//     </main>
//   );
// } 
// export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <main className="App">
        <h1>Welcome to Campus Connect</h1>
      </main>
      <Hero />
    </div>
  );
}

export default App;