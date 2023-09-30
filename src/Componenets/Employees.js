import femaleProfile from '../assets/femaleProfile.png';
import maleProfile from '../assets/maleProfile.png';

const Employees = ({employees, selectedTeam, handleClickEmployee}) => {

    return(
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    {
                        employees.map((employee, index) => 
                            <div className='col-6 col-sm-4 mb-3' key={index} style={{cursor: "pointer"}}>
                                <div className={employee.teamName === selectedTeam ? 'card card-bordered':'card'} id={employee.id} onClick={handleClickEmployee}>
                                    {
                                        employee.gender === 'female'?<img src={femaleProfile} alt="Female Profile"/>:<img src={maleProfile} alt="Male Profile"/>
                                    }
                                    <div className='card-body'>
                                        <div className='card-title'>
                                            <h5>Name: {employee.fullName}</h5>
                                        </div>
                                        <div className='card-text'>
                                            <p>Designation: {employee.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Employees;