const Teams = ({employees, setTeam}) => {
    
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
                                <div onClick={handleChangeTeam} title={employee.teamName} className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target={'#'+employee.teamName} key={index}>
                                    {employee.teamName}
                                    <div className="collapse" id={employee.teamName}>
                                    <hr/>
                                        {
                                            employees.filter((e) => e.teamName === employee.teamName)
                                                    .map((em)=>
                                                        <div className="card-body" key={em.id}>
                                                            <div className="card-title">
                                                                <p>Name: {em.fullName}</p>
                                                            </div>
                                                            <div className="card-text">
                                                                <p>Designation: {em.designation}</p>
                                                            </div>
                                                            <hr className="border border-primary"/>
                                                        </div>
                                                    )
                                        }
                                        {
                                            employees
                                                .filter((e)=>e.teamName === employee.teamName)
                                                .length === 0 && (
                                                    <div className="card-body">
                                                        <div className="card-text">
                                                            <p>{employee.teamName} has no member.</p>
                                                        </div>
                                                    </div>
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