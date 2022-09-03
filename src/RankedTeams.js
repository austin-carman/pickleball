function RankedTeams(props) {
  const { teams } = props;
  const allTeams = [...teams];

  const calculateScore = (wins, differential) => {
    const score = wins * 3 + differential;
    return score;
  };

  allTeams.sort((a, b) => {
    const aScore = calculateScore(a.wins, a.scoreDifferential);
    const bScore = calculateScore(b.wins, b.scoreDifferential);
    return bScore - aScore;
  });

  return (
    <>
      <h1>Rankings</h1>
      {allTeams.map((team, index) => {
        return (
          <div className="ranking" key={index}>
            <h2>{index + 1}: </h2>
            <h2>{team.member1}, {team.member2}</h2>
            <h2>Score: {calculateScore(team.wins, team.scoreDifferential)}</h2>
          </div>
        );
      })}
    </>
  );
}

export default RankedTeams;
