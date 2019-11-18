import LoginScreen from './view/LoginScreen';
import DepositScreen from './view/DepositScreen';
import CheckSuccess from './view/CheckSuccess';
import Feedbacks from './view/Feedbacks';

import Validation from './model/Validation';
import Storage from './model/Storage';


/************************
 ****** STATE ******
 ************************/

var state = {
    check: 0,
    ransom: 0,
    prize: 0
 };

const storage = new Storage();
storage.readStorage(state);
console.log('1s', state);


window.addEventListener('load', () => storage.readStorage(state));

const status = () => state.check + state.ransom + state.prize;
state.status = status;






/*********************
/******init classes***
**********************/

const loginScreen = new LoginScreen('#main' ,state);






const checkDepositScreen = new DepositScreen('check', ['הפקדת שיק ', ' אנא הזנ/י את פרטי השיק'],
[
    {label: 'מספר השיק', name: 'number'},
    {label: 'מספר בנק', name: 'code'},
    {label: 'מספר סניף', name: 'branch'},
    {label: 'מספר חשבון', name: 'account'},
    {label: 'סכום הפקדה', name: 'deposit-amount'}
], 'הפקדה');
const ransomDepositScreen = new DepositScreen('ransom', ['פדיון קופה ', 'אנא הזנ/י את מספר הקופה'], [
    {label: 'מספר קופה', name: 'code'}
], 'פדיון');
const prizeDepositScreen = new DepositScreen('prize', ['הפקדת פרס כספי ', ' אנא הזנ/י את פרטי הפרס'],[
    {label: 'מספר בנק', name: 'code'},
    {label: 'מספר סניף', name: 'branch'},
    {label: 'מספר חשבון', name: 'account'},
    {label: 'מספר כרטיס גירוד', name: 'number'},
    {label: 'סכום זכייה', name: 'deposit-amount'}
], 'הפקדה');





const checkSuccess = new CheckSuccess();
const cashboxFeedbacks = new Feedbacks('הקופה נפדתה בהצלחה', '??77');
const winFeedbacks = new Feedbacks('כספי הזכייה הופקדו בהצלחה', '25??');




const validateCheck = new Validation(['1001128', '25', '871', '65781', '500']);
const validatePrize = new Validation(['999855', '25', '978', '58436', '500']);
const validateRansom = new Validation(['8935'], 'ransom');





/************************
 ****** CONTROLLER ******
 ************************/


// append login screen
loginScreen.printLoginScreen(state.status());
console.log(state.status())

// btn login screen handle
const screenReference = () => {

    const hash = decodeURI(window.location.hash);

    if (hash.includes('שיק')) checkDepositScreen.printDepositScreen(state);
    if (hash.includes('קופת')) ransomDepositScreen.printDepositScreen(state);
    if (hash.includes('פרס')) prizeDepositScreen.printDepositScreen(state);

}

window.addEventListener("hashchange", screenReference);

document.getElementById('main').addEventListener('click', function(e) {
    const hash = decodeURI(window.location.hash);

    if(e.target.matches('[type=submit]')) {
        e.preventDefault();

        if(hash.includes('שיק')) {
            if(validateCheck.validate()) {
                state.check++;
                storage.persistData(state);
                state.status = status;
                checkSuccess.printCheckSuccess(state.status());
            }
        }

        if(hash.includes('קופת')) {
            if(validateRansom.validate()) {
                state.ransom++;
                storage.persistData(state);
                state.status = status;
                cashboxFeedbacks.printFeedbacks(state.status());
            }
        }

        if(hash.includes('פרס')) {
            if(validatePrize.validate()) {
                state.prize++;
                storage.persistData(state);
                state.status = status;
                winFeedbacks.printFeedbacks(state.status());
            }
        }
        
    }
});


document.getElementById('main').addEventListener('click', function(e) {
    if(e.target.matches('#home, #home *')) {
        loginScreen.printLoginScreen(state.status());
        window.location.hash = '';
    }
});

document.getElementById('main').addEventListener('click', function(e) {
    if(e.target.matches('#print, #print *')) {
        window.print();
    }
});


document.getElementById('restart').addEventListener('click', function() {
    state = {
        check: 0,
        ransom: 0,
        prize: 0
     }
     storage.persistData(state);
     window.location.hash = '';
     location.reload();
});


['touchstart', 'click'].forEach(event => {
    document.getElementById('restart').addEventListener(event, function() {
        state = {
            check: 0,
            ransom: 0,
            prize: 0
         }
         storage.persistData(state);
         window.location.hash = '';
         location.reload();
    });

    document.querySelectorAll('.entry__text').forEach(element => element.classList.remove('entry__text--done'));
});