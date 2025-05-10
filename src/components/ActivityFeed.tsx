import React from 'react';

const activities = [
  { id: 1, message: 'User John Doe uploaded a report.', time: '2 minutes ago' },
  { id: 2, message: 'Alice changed dashboard settings.', time: '10 minutes ago' },
  { id: 3, message: 'System generated weekly summary.', time: '1 hour ago' },
  { id: 4, message: 'User Mike added a new KPI card.', time: '2 hours ago' },
];

const ActivityFeed: React.FC = () => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex justify-between items-start bg-[#111c44] p-3 rounded-lg shadow-sm hover:shadow-md transition duration-200"
        >
          <div className="text-sm text-white">{activity.message}</div>
          <div className="text-xs text-gray-400">{activity.time}</div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
