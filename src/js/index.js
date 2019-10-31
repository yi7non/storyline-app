import LoginScreen from './view/LoginScreen';
import DepositScreen from './view/DepositScreen';
import CheckSuccess from './view/CheckSuccess';
import Feedbacks from './view/Feedbacks';







// append login screen
window.loginScreen = new LoginScreen();

// append check deposit form screen
window.checkDepositScreen = new DepositScreen(['הפקדת שיק ', ' אנא הזנ/י את פרטי השיק'],
[
    {label: 'מספר השיק', name: 'number'},
    {label: 'מספר בנק', name: 'code'},
    {label: 'מספר סניף', name: 'branch'},
    {label: 'מספר חשבון', name: 'account'},
    {label: 'סכום הפקדה', name: 'deposit-amount'}
], 'הפקדה');

// append the screen of check success
window.checkSuccess = new CheckSuccess();

// append the prize form screen
window.prizeDepositScreen = new DepositScreen(['הפקדת פרס כספי ', ' אנא הזנ/י את פרטי הפרס'],[
    {label: 'מספר בנק', name: 'code'},
    {label: 'מספר סניף', name: 'branch'},
    {label: 'מספר חשבון', name: 'account'},
    {label: 'מספר כרטיס גירוד', name: 'number'},
    {label: 'סכום הפקדה', name: 'deposit-amount'}
], 'הפקדה');

// append the ransom form screen
window.ransomDepositScreen = new DepositScreen(['פדיון קופה ', 'אנא הזנ/י את מספר הקופה'], [
    {label: 'מספר קופה', name: 'code'}
], 'פדיון');

window.cashboxFeedbacks = new Feedbacks('הקופה נפדתה בהצלחה', '1500', '77XX');
window.winFeedbacks = new Feedbacks('כספי הזכיה הופקדו בהצלחה', '1000', 'XX25');

