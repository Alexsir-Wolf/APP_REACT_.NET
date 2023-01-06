import { useEffect, useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

function App() {
    const [index, setIndex] = useState(0);
    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState({id:0});

    useEffect(() => {
        activities.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, activities.map((item) => item.id)) + 1)
    }, [activities])

    function addActivity(actvt) {      
        setActivities([...activities, { ...actvt, id: index }]);
    }

    function deleteActivity(id) {
        const activityFilters = activities.filter(
            (activity) => activity.id !== id
        );
        setActivities([...activityFilters]);
    }

    function getActivity(id){
        const activity = activities.filter((activity) => activity.id === id);
        setActivity(activity[0])
    }

    function cancelActivity() {
        setActivity({id:0})
    }

    function updateActivity(actvt){
        setActivities(activities.map(item => item.id === actvt.id ? actvt : item));
        setActivity({id: 0})

    }

    return (
        <>
            <ActivityForm 
                addActivity={addActivity} 
                activities={activities}
                cancelActivity={cancelActivity}
                updateActivity={updateActivity}
                activitySetected={activity}
            />
            <ActivityList 
                activities={activities}
                deleteActivity={deleteActivity}
                getActivity={getActivity}
            />
        </>
    );
}

export default App;
