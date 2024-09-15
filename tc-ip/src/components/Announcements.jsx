import React from 'react';

function Announcements() {
  return (
    <section className="bg-white p-6 shadow-md rounded-lg mt-6">
      <button className="bg-black text-white px-4 py-2 rounded-lg mb-4">Announcements</button>
      <h2 className="text-4xl font-bold mb-4">Stay Updated on the Latest News</h2>
      <p className="text-lg mb-4">
        Check out our latest announcements, events, and updates to stay informed about the Training and Placement Cell.
      </p>
      <div className="space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded-lg">View Announcements</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Upcoming Events</button>
      </div>
    </section>
  );
}

export default Announcements;
