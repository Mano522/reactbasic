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
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import EventSection from "./Components/EventSection";
// import Footer from "./Components/footer";
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <main className="App">
//         <h1>Welcome to Campus Connect</h1>
//       </main>
//       <Hero />
//       <EventSection />
//        <Footer />
//     </div>
//   );
// }
// export default App;
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventForm from "./components/EventForm";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <main id="home">
        <Hero
          title="Discover What Is Happening on Campus"
          description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
        />

       

        <EventSection events={events} />
      </main>
 <EventForm onAddEvent={handleAddEvent} />
      <Footer />
    </div>
  );
}

export default App;