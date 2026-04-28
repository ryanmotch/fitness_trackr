export default function ActivityList({ activities, onDelete }) {
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button onClick={() => onDelete(activity.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}