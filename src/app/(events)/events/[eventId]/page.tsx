export default function EventDetailPage({ params }: { params: { eventId: string } }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event Details</h1>
      <p>Event ID: {params.eventId}</p>
      <div className="mt-4">
        <p>This page displays details for a specific library event.</p>
      </div>
    </div>
  );
}