import EventCard from "./EventCard";
import { initialEvents } from "../data/events";

function EventSection() {
  return (
    <section className="event-section">
      <h2>Upcoming Events</h2>
      <p>Join us for exciting events and activities!</p>
      <div className="event-grid">
        {initialEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}

export default EventSection;