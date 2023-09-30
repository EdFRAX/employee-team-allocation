const TeamList = ({selectedTeam, handleChangeTeam}) => {
    return(
        <div className="conatainer mb-3">
            <div className="row justify-content-center">
                <div className="col-10">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleChangeTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TeamList;