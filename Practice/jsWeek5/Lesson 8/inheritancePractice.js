class PromotionSender {
    constructor(status){

    }

    findUserWithStatus(status){
        users = getStatus(status);
        return users;
    }

    calculateDiscount(status){
        if(status === 'GOLD'){
            console.log(status);
            return .5;
        }
        else if(status === 'SILVER'){
            console.log(status);
            return .2;
        }
        else if(status === 'BRONZE'){
            console.log(status);
            return .1;
        }
    }

    sendNotification(notification){
        console.log('Sending: ' + notification)
        
    }
}

class CollectionSender {
    constructor(){

    }

    findUserWithStatus(status){
        return status;

    }

    calculateFee(status){
        if(status === 'OVERDUE'){
            return '$10';

        }
        else if(status === 'DELINQUENT'){
            return '$25';
        }

    }


    sendNotification(notification){
        console.log('Sending: ' + notification);

    }


}


/* Above is an example of making a set of notification sender objects for use. Below will be an example of these classes inheriting
from a parent class a set of methods using the [super] method and [extends] keyword. */


class NotificationsSender{
    findUserWithStatus(status){
        users = getStatus(status);
        return users;
    }

    sendNotification(notification){
        console.log('Sending: ' + notification)
        
    }

}


class PromotionsSender extends NotificationsSender{
    constructor(status){
        super(status);
    }
    calculateDiscount(status){
        if(status === 'GOLD'){
            console.log(status);
            return .5;
        }
        else if(status === 'SILVER'){
            console.log(status);
            return .2;
        }
        else if(status === 'BRONZE'){
            console.log(status);
            return .1;
        }
    }
}

class CollectionsSender extends NotificationsSender {
    constructor(status){
        super(status);
    }
    calculateFee(status){
        if(status === 'OVERDUE'){
            return '$10';

        }
        else if(status === 'DELINQUENT'){
            return '$25';
        }
    }
}

let promotionsSender = new PromotionsSender('GOLD');

promotionsSender.sendNotification('Inheritance Successful...');

