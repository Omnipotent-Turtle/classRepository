
class Fighter{

    constructor(fighterName, fightingStyle){

        this.fighterName = fighterName;
        this.fightingStyle = fightingStyle;

    }

    describe(){
        return alert `${this.fighterName} of the ${this.fightingStyle} school of martial arts!`;

    }
}

class Teambattle{
    constructor(teamName){
        this.teamName = teamName;
        this.fighters = [];
    }

    addFighter(fighter)
    {  

        if(fighter instanceof Fighter){
            this.fighters.push(fighter);

        }else{
            throw new Error(`"${fighter}" is not a valid selection.`);
        }
    }

    describe() {
        return `${this.teamName} is a team of ${this.fighters.length} fighters!`;
    }

}


class Menu
{
    constructor(){
        this.teamBattleTeams = [];
        this.selectedTeam = null;

    }

 start(){
    let selection = this.showMainMenuOptions();

    while(selection != 0){

        switch(selection){
            case '1':
                this.createTeam();
                break;
            case '2':
                this.viewTeam();
                break;
            case '3':
                this.displayAllTeams();
            case '4':
                this.deleteTeam();
                break;

            default:
                selection = 0;
            }
            selection = this.showMainMenuOptions();
    }

    alert("Goodbye. Reload the page to try again!");

 }



 showMainMenuOptions()
 {
    return prompt(`
    0) Exit
    1) Create a Team
    2) View Teams
    3) Display All Teams
    4) Delete a Team
    `);

 }

 showTeamMenuOptions(teamInfo)
 {
    return prompt(`
    0) Back
    1) Add Fighter
    2) Remove Fighter
    ------------------------
    ${teamInfo};
    `);

 }

 displayAllTeams(){
    let teamNameString = ' '

    for (let i = 0; i < this.teamBattleTeams.length; i++)
    {
        teamNameString += i + ') ' + this.teamBattleTeams[i].teamName + '\n';

    }
    alert(teamNameString);
 }


 createTeam(){
    let teamName = prompt('Enter name for your team');
    this.teamBattleTeams.push(new Teambattle(teamName));

 }


viewTeam()
{
    let index = prompt(`Enter the number of the team you'd like to view.`)

    if(index > -1 && index < this.teamBattleTeams.length)
    {
        this.selectedTeam = this.teamBattleTeams[index];
        let description = 'Team Name:' + this.selectedTeam.teamName + '\n';

        for(let i = 0; i < this.selectedTeam.fighters.length; i++){
            description += i + ') ' + this.selectedTeam.fighters[i].fighterName  + 
            ` of the school: ${this.selectedTeam.fighters[i].fightingStyle}` + '\n';

        }

        let selection = this.showTeamMenuOptions(description);

        switch(selection){

            case '1':
            this.createFighter();
            break;

            case '2':
            this.deleteFighter();
            break;

        }

    }

} 

deleteTeam()
{
    let index = prompt('Enter the index of the number you wish to delete.')
    if(index > -1 && index < this.teamBattleTeams.length)
    {
        this.teamBattleTeams.splice(index, 1);
    }

    return alert(`Team ${index} has been deleted.`);
}

createFighter()
{
    let fighterName = prompt('Name your fighter!');
    let fightingStyle = prompt ('What school of martial arts do they hail from?');

    this.selectedTeam.fighters.push(new Fighter(fighterName, fightingStyle));
}

deleteFighter()
{
    let index = prompt('Enter the index of the fighter you wish to delete.')

    if(index > -1 && index < this.selectedTeam.fighters.length)
    {
        this.selectedTeam.fighters.splice(index, 1);

    }


}

}

let menu = new Menu();
menu.start();