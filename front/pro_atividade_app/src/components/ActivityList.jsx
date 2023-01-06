import React from 'react'
import Activities from './Activities'

export default function ActivityList(props) {
  return (
    <div className="mt-3">
    {props.activities.map((activities) => (
        <Activities
            key={activities.id}
            activities={activities}
            deleteActivity={props.deleteActivity}
            getActivity={props.getActivity}
        />
    ))}
</div>
  )
}
