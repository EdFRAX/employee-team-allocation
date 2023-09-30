const Teams = ({employees, setTeam}) => {
    
    let nothing = false;
    const addedTeam = [
        {teamName: "TeamA"},
        {teamName: "TeamB"},
        {teamName: "TeamC"}
    ];

    const handleChangeTeam = (e) => {
        setTeam(e.currentTarget.title);
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <ul className="list-group">
                            {
                                addedTeam.map((employee, index) => 
                                <div onClick={handleChangeTeam} title={employee.teamName} className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target={'#'+employee.teamName}>
                                    {employee.teamName}
                                    <div className="collapse" id={employee.teamName}>
                                    <hr/>
                                        {
                                            employees.map((e)=>
                                                e.teamName === employee.teamName ?
                                                (
                                                    <div className="card-body">
                                                        <div className="card-title">
                                                            <p>Name: {e.fullName}</p>
                                                        </div>
                                                        <div className="card-text">
                                                            <p>Designation: {e.designation}</p>
                                                        </div>
                                                        <hr className="border border-primary"/>
                                                    </div>
                                                ) : e.teamName === '' && !nothing ? (
                                                    (nothing = true),
                                                    <div className="card-body">
                                                        <div className="card-text">
                                                            <p>{employee.teamName} has no member.</p>
                                                        </div>
                                                    </div>
                                                ) : null
                                            )
                                        }
                                    </div>
                                </div>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teams;