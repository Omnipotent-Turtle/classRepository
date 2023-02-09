/* const array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
    return element > 13;
}

console.log(array1.findIndex(isLargeNumber)); */ 

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
         
        
        if(this.events.some(function arraySift(e) {
                return e.title === title;
            })){
            throw new Error('Enter new Event Name')
        } else {
            this.events.push(new Event(title, date))
        }
    }

    removeEvent(){
        let deadEvent = prompt ('Input the name of the event you want to remove:');

        for (let i = 0; i < this.events.length; i ++){
            if(deadEvent == this.events[i].title){
                this.events.splice(deadEvent, 1);
            }
        }

        alert(`${deadEvent} has been removed.`)
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
