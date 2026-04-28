import { useState, useEffect } from "react";
import { getActivities, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const { token } = useAuth();

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  const handleDelete = async (id) => {
    await deleteActivity(token, id);
    await syncActivities();
  };

  useEffect(() => {
    syncActivities();
  }, []);

  return (
    <>
      <h1>Activities</h1>
      <ActivityList activities={activities} onDelete={handleDelete} />
      <ActivityForm syncActivities={syncActivities} />
    </>
  );
}
