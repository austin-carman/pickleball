import "./App.css";
import { useState } from "react";
import AllTeams from "./AllTeams";
import RankedTeams from "./RankedTeams";

function App() {
  const [teams, setTeams] = useState([]);
  const initialState = {
    member1: "",
    member2: ""
  };
  const [form, setForm] = useState(initialState);

  const createTeam = (team) => {
    const newTeam = {
      id: teams.length + 1,
      member1: team.member1,
      member2: team.member2,
      wins: 0,
      scoreDifferential: 0,
      gamesPlayed: 0,
    };
    return newTeam;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = createTeam(form);
    setTeams([...teams, newTeam]);
    setForm(initialState);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Member 1"
          name="member1"
          value={form.member1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Member 2"
          name="member2"
          value={form.member2}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <br />
      <AllTeams teams={teams} setTeams={setTeams} />
      <RankedTeams teams={teams} />
    </div>
  );
}

export default App;