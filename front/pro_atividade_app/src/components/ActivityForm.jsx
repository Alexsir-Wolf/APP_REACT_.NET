import { useState, useEffect} from "react";

const activityInitial = {
    id: 0,
    title: "",
    priority: 0,
    description: "",
}

export default function ActivityForm(props) {
    const [activity, setActivity] = useState(atualActivity());   

    useEffect(() => {
        if(props.activitySetected.id !== 0){
            setActivity(props.activitySetected);
        }
    }, [props.activitySetected]);

    const inputTextHandler = (e)=>{
        const {name, value} = e.target;
        setActivity({...activity, [name]:value});
    };
    
    const handleCancel = (e)=>{
        e.preventDefault();

        props.cancelActivity();
        setActivity(activityInitial);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
    
        if(props.activitySetected.id !== 0){
            props.updateActivity(activity);
        }else{
            props.addActivity(activity);
        }
        setActivity(activityInitial);
    };

    function atualActivity(){
        if(props.activitySetected.id !== 0){
            return props.activitySetected
        }else{
            return activityInitial;
        }

    };

    return (
        <>
        <h1>Atividade {activity.id !== 0 ? activity.id : '' }</h1>
        <form className="row g-3" onSubmit={handleSubmit}>

            <div div className="col-md-6">
                <label className="form-label">Título</label>
                <input
                    name="title"
                    value={activity.title}
                    onChange={inputTextHandler}  
                    id="title" 
                    type="text" 
                    className="form-control"
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">Prioridade</label>
                <select
                    name="priority"
                    value={activity.priority}
                    onChange={inputTextHandler} 
                    id="priority" 
                    className="form-select"
                >
                    <option defaultValue="0">Selecione...</option>
                    <option value="1">Baixa</option>
                    <option value="2">Normal</option>
                    <option value="3">Alta</option>
                </select>
            </div>

            <div className="col-md-12">
                <label className="form-label">Descrição</label>
                <textarea
                    name="description"
                    value={activity.description}
                    onChange={inputTextHandler}  
                    id="description" 
                    type="text" 
                    className="form-control" 
                />
            <hr />
            </div>

            <div className="col-12 mt-0">
                {activity.id === 0 ? (                        
                    <button className="btn btn-outline-secondary" type="submit">
                        <i className="fas fa-plus me-2"></i>
                        Atividade
                    </button>
                ) : (
                    <>
                        <button className="btn btn-outline-primary me-2" type="submit">
                        <i className="fas fa-save me-2"></i>
                            Salvar
                        </button>
                        <button className="btn btn-outline-danger" onClick={handleCancel}>
                        <i className="fas fa-times-circle me-2"></i>
                            Cancelar
                        </button>
                    </>
                )}
            </div>
        </form>
        </>
    );
}
