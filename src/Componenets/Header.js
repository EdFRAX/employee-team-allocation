import { useLocation } from "react-router-dom";

const Header = ({selectedTeam, memberCount}) => {
    return(
        <>
            <h1 className="text-center my-3">{useLocation().pathname === '/teams'? 'Teams':'Employees'}</h1>
            <p className="text-center">{selectedTeam} has {memberCount} {memberCount <= 1?'member':'members'}.</p>
        </>
    )
}

export default Header;