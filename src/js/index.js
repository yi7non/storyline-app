import LoginScreen from './view/LoginScreen';
import DepositScreen from './view/DepositScreen';
import CheckSuccess from './view/CheckSuccess';
import Feedbacks from './view/Feedbacks';

import Validation from './model/Validation';


/************************
 ****** STATE ******
 ************************/

const state = {
    check: 0,
    ransom: 0,
    prize: 0,
    status() {
        return this.check + this.prize;
    }
 };





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
    {label: 'סכום הפקדה', name: 'deposit-amount'}
], 'הפקדה');





const checkSuccess = new CheckSuccess();
const cashboxFeedbacks = new Feedbacks('הקופה נפדתה בהצלחה', '77XX');
const winFeedbacks = new Feedbacks('כספי הזכיה הופקדו בהצלחה', 'XX25');




const validateCheck = new Validation(['1001128', '25', '871', '65781', '500']);
const validatePrize = new Validation(['999855', '25', '978', '58436', '500']);





/************************
 ****** CONTROLLER ******
 ************************/


// append login screen
loginScreen.printLoginScreen(state.status());

// btn login screen handle
const screenReference = () => {

    const hash = decodeURI(window.location.hash);

    if (hash.includes('שיק')) checkDepositScreen.printDepositScreen(state);
    if (hash.includes('קופה')) ransomDepositScreen.printDepositScreen(state);
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
                checkSuccess.printCheckSuccess(state.status());
            }
        }

        if(hash.includes('פרס')) {
            if(validatePrize.validate()) {
                state.prize++;
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


