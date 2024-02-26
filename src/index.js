import "./style.css";

function getTeamAsHTL(team) {
  return `<tr>
   <td>${team.promotion}</td>
   <td>${team.members}</td>
   <td>${team.name}</td>
   <td>${team.url}</td>
   <td>x</td>
 </tr>`;
}

console.warn("app ready");
function renderTeams(teams) {
  //console.warn("render", teams);
  const teamsHTML = teams.map(getTeamAsHTL);
  //console.info(teamsHTML);
  document.querySelector("#teamsTable tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  const promise = fetch("http://localhost:3000/teams-json")
    .then(r => r.json())
    .then(teams => {
      renderTeams(teams);
      return teams;
    });
  console.warn("loadTeams", promise);
}

loadTeams();
