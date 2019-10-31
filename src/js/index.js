import LoginScreen from './view/LoginScreen';
import DepositScreen from './view/DepositScreen';
import CheckSuccess from './view/CheckSuccess';
import Feedbacks from './view/Feedbacks';

import Validation from './model/Validation';


/*********************
/******init classes***
**********************/

const loginScreen = new LoginScreen();
const checkDepositScreen = new DepositScreen(['הפקדת שיק ', ' אנא הזנ/י את פרטי השיק'],
[
    {label: 'מספר השיק', name: 'number'},
    {label: 'מספר בנק', name: 'code'},
    {label: 'מספר סניף', name: 'branch'},
    {label: 'מספר חשבון', name: 'account'},
    {label: 'סכום הפקדה', name: 'deposit-amount'}
], 'הפקדה');
const checkSuccess = new CheckSuccess();
const prizeDepositScreen = new DepositScreen(['הפקדת פרס כספי ', ' אנא הזנ/י את פרטי הפרס'],[
    {label: 'מספר בנק', name: 'code'},
    {label: 'מספר סניף', name: 'branch'},
    {label: 'מספר חשבון', name: 'account'},
    {label: 'מספר כרטיס גירוד', name: 'number'},
    {label: 'סכום הפקדה', name: 'deposit-amount'}
], 'הפקדה');
const ransomDepositScreen = new DepositScreen(['פדיון קופה ', 'אנא הזנ/י את מספר הקופה'], [
    {label: 'מספר קופה', name: 'code'}
], 'פדיון');
const cashboxFeedbacks = new Feedbacks('הקופה נפדתה בהצלחה', '1500', '77XX');
const winFeedbacks = new Feedbacks('כספי הזכיה הופקדו בהצלחה', '1000', 'XX25');
const validate = new Validation(['1001128', '25', '871', '65781', '500']);


/************************
 ****** CONTROLLER ******
 ************************/


// append login screen
loginScreen.printLoginScreen();

// btn login screen handle
const screenReference = () => {

    const hash = decodeURI(window.location.hash);

    if (hash.includes('שיק')) checkDepositScreen.printDepositScreen();
    if (hash.includes('קופה')) ransomDepositScreen.printDepositScreen();
    if (hash.includes('פרס')) prizeDepositScreen.printDepositScreen();

}

window.addEventListener("hashchange", screenReference);

document.getElementById('main').addEventListener('click', function(e) {
    if(e.target.matches('[type=submit]')) {
        e.preventDefault();
        if(validate.validateCheck()) {
            checkSuccess.printCheckSuccess();
        }
    }
});


