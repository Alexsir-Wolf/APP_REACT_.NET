import React from 'react'

export default function Activities(props) {

  function prioritiesLabel(param) {
    switch (param) {
        case "1":
            return "Baixa";
        case "2":
            return "Normal";
        case "3":
            return "Alta";
        default:
            return "Não definido";
    }
}

function iconPriority(param) {
    switch (param) {
        case "1":
            return "smile text-success" || "text-success";
        case "2":
            return "meh text-secondary" || "text-secondary";
        case "3":
            return "frown text-danger" || "frown text-danger";
        default:
            return "Não definido";
    }
}

function borderPriority(param) {
    switch (param) {
        case "1":
            return "border border-success";
        case "2":
            return "border border-secondary";
        case "3":
            return "border border-danger";
        default:
            return "Não definido";
    }
}

  return (
        <div className={"card mb-2 shadow-sm" + borderPriority(props.activities.priority)}>
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title">
                    <span className="badge bg-secondary me-2">
                        {props.activities.id}
                    </span>
                    - {props.activities.title}
                </h5>
                <h6>
                    Prioridade:
                    <span className={"ms-1 " + iconPriority(props.activities.priority)}>
                        <i className={"me-1 fa-regular fa-face-" + iconPriority(props.activities.priority)} />
                        {prioritiesLabel(props.activities.priority)}
                    </span>
                </h6>
            </div>
            <p className="card-text">
                {props.activities.description}
            </p>
            <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button 
                    className="btn btn-sm btn-outline-primary me-2 "
                    onClick={() => props.getActivity(props.activities.id)}
                >
                    <i className="fas fa-pen me-2"></i>
                    Editar
                </button>
                <button 
                        className="btn btn-sm btn-outline-danger" 
                        onClick={() => props.deleteActivity(props.activities.id)}
                >
                    <i className="fas fa-trash me-2"></i>
                    Deletar
                </button>
            </div>
        </div>
    </div>
  )
}
