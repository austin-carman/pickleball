function AllTeams(props) {
  const { teams, setTeams } = props;

  const updateTeam = (teamId, count, property) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === teamId) {
        team[property] += count;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  return (
    <div className="teams-list">
      {teams.map((team, index) => {
        return (
          <div key={index} className="team-card">
            <h3>Team: {team.id}</h3>
            <h2>
              {team.member1}, {team.member2}
            </h2>
            <h3>Games Played: {team.gamesPlayed}</h3>
            <div className="button-group">
              <button onClick={() => updateTeam(team.id, -1, "gamesPlayed")}>-1</button>
              <button onClick={() => updateTeam(team.id, 1, "gamesPlayed")}>+1</button>
            </div>
            <h3>Wins: {team.wins}</h3>
            <div className="button-group">
              <button onClick={() => updateTeam(team.id, -1, "wins")}>-1</button>
              <button onClick={() => updateTeam(team.id, 1, "wins")}>+1</button>
            </div>
            <h3>Differential: {team.scoreDifferential}</h3>
            <div className="button-group">
              <button
                onClick={() => updateTeam(team.id, -1, "scoreDifferential")}
              >
                -1
              </button>
              <button onClick={() => updateTeam(team.id, 1, "scoreDifferential")}>
                +1
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllTeams;
