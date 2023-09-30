import Employees from '../Componenets/Employees';
import TeamList from '../Componenets/TeamList';

const Main = ({employees, selectedTeam, handleChangeTeam, handleClickEmployee}) => {
    return(
        <main>
            <TeamList
                selectedTeam={selectedTeam}
                handleChangeTeam={handleChangeTeam}
            />
            <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleChangeTeam={handleChangeTeam}
                handleClickEmployee={handleClickEmployee}
            />
        </main>
    )
}

export default Main;