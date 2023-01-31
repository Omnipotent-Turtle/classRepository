/*
class Event {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    describe(){
        return `${title} is taking place on ${date}`;
    }
}

class EventOrganizer {
    constructor(title){
        this.title = title;
        this.events = [];
    }

    addNewEvent(){

        if(title != this.events[i].title && title instanceof Event){
            this.events.push(new Event(title));

        } else{
            throw new Error('This event already exists, please re-name your event');
        }

    }

    removeEvent(){
        let deadEvent = ('Input the name of the event you want to remove:');

        if (deadEvent === this.events[i]){
            this.events.splice(deadEvent, 1)
        }
    }
}

class Menu {
    constructor(){
        this.eventOrganizer = new EventOrganizer();
    }

    start(){
        let selection = this.showMenuOptions();

        while(selection != 0){
            switch(selection){
                case '1':
                    this.createNewEvent();
                    break;
                case '2':
                    this.dropEvent();
                    break;
                case '3':
                    this.viewAllEvents();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMenuOptions();
        } 

        alert('Goodbye!')
    }

    showMenuOptions(){
        return prompt(`Make your selection:
        0) Exit
        1) Add Event
        2) Remove Event
        3) View All Events
        `)
    }

    createNewEvent(){
        let title = prompt('Name your Event: ');
        let date = prompt('When is your event taking place? Use MM/DD/YYYY format: ');
        let i = this.eventOrganizer.events[i];

        if(title != i){
        this.eventOrganizer.events.push(new Event(title, date));
        } else{
            throw new Error('Please re-name your event');
        }

    }

    dropEvent(){
        let deadTitle = prompt('What event do you want to remove? ')

        if(deadTitle instanceof this.eventOrganizer.events[i]){
            this.eventOrganizer.removeEvent();
        }
    }

    viewAllEvents(){
        let eventString = '';

        for(let i = 0; i < this.eventOrganizer.events.length; i++){
            eventString += i + ') ' + this.eventOrganizer.events[i].title + '\n' 
            + this.eventOrganizer.events[i].date + '\n' + '------------' + '\n';
        }
        alert(eventString);
    }
}

let menu = new Menu ();

menu.start();
*/

class Event {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    describe(){
        return `${title} is taking place on ${date}`;
    }
}

class EventOrganizer {
    constructor(title){
        this.title = title;
        this.events = [];
    }

    start(){
        let selection = this.showMenuOptions();

        while(selection != 0){
            switch(selection){
                case '1':
                    this.createNewEvent();
                    break;
                case '2':
                    this.removeEvent();
                    break;
                case '3':
                    this.viewAllEvents();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMenuOptions();
        } 

        alert('Goodbye!')
    }

    showMenuOptions(){
        return prompt(`Make your selection:
        0) Exit
        1) Add Event
        2) Remove Event
        3) View All Events
        `)
    }

    createNewEvent(){
        let title = prompt('Name your Event: ');
        let date = prompt('When is your event taking place? Use MM/DD/YYYY format: ');

        
    if(title != this.events.title){
        this.events.push(new Event(title, date));
        } else {
            throw new Error('Please re-name your event');
        }
     
    }

    removeEvent(){
        let deadEvent = ('Input the name of the event you want to remove:');

        if (deadEvent === this.events[i]){
            this.events.splice(deadEvent, 1)
        }
    }

    viewAllEvents(){
        let eventString = '';

        for(let i = 0; i < this.events.length; i++){
            eventString += i + ') ' + this.events[i].title + '\n' 
            + this.events[i].date + '\n' + '------------' + '\n';
        }
        alert(eventString);
    }
}

let eventOrganizer = new EventOrganizer ();

eventOrganizer.start();
