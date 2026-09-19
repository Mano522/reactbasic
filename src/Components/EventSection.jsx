import EventCard from "./EventCard";

function EventSection({ events }) {
  return (
    <section className="event-section">
      <h2>Upcoming Events</h2>
      <p>Join us for exciting events and activities!</p>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}

export default EventSection;