/* continue with making a createPlayer and deletePlayer method tomorrow */

class Player {
    constructor(name, position){
        this.name = name;
        this.position = position
    }

    describe(){
        return `${this.name} plays ${this.position}`
    }
}

class Team {
    constructor(name){
        this.name = name;
        this.players = [];
    }

    addPlayer(){
        if(player instanceof Player){
            this.players.push(player);
        }
        else{
            throw new Error(`you can only select an instance of Player. Argument ${player} is not valid.`);
        }
    }

    describe(){
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu{
    constructor(){
        this.teams = [];
        this.selectedTeam = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();                   /* "viewTeam" method wouldn't activate because I forgot parenthesis and semicolon */
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayAllTeams();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye');
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new team
        2) view a team
        3) delete a team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
        0) back
        1) create a player
        2) delete player
        ----------------------
        ${teamInfo}
        `);
    }

    createTeam(){
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));

    }

    displayAllTeams(){
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++){
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    viewTeam(){
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length){
          this.selectedTeam = this.teams[index];

          let description = 'Team Name: ' + this.selectedTeam.name + '\n';

          for (let i = 0; i < this.selectedTeam.players.length; i++){
            description += i + ') ' + this.selectedTeam.players[i].name 
            + ' - ' + this.selectedTeam.players[i].position + '\n';
          }

          let selection = this.showTeamMenuOptions(description);
          switch(selection){
            case '1':
                this.createPlayer();
                break;
            case '2':
                this.deletePlayer();
          }

        }
    }

    createPlayer(){
        let name = prompt('Name your Player: ');
        let position = prompt('What is their position? ')

        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer(){
        let index = prompt('Select the index of the PLAYER you want to remove: ');
        
        if(index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        } 
    }

    deleteTeam(){
        let index = prompt('Select the index of the TEAM you want to delete.')
        if(index > -1 && index < this.teams.length){
            this.teams.splice(index, 1);
        }
    }

}


let menu = new Menu;

menu.start();