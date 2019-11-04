import CheckSuccess from './CheckSuccess';
import Feedbacks from './Feedbacks';

class DepositScreen {

    constructor(type, headers, strings, submitVal, selector) {

        this.type = type;
        this.headers = headers;
        this.strings = strings;
        this.submitVal = submitVal;
        this.selector = selector || '#main';
        this.homeBtn = `
        <a href="javascript:void(0)" id="home" class='ransom-home-btn'>
            <svg viewBox="-10 30 52 30" width="50" height="50">
                <use xlink:href="img/sprite.svg#icon-home3">
            </use></svg>
        </a>
        `;  
        this.template = '';
 
     }

     deposit() {
         this.template += `
         <div class="check-deposit">
                <h1><strong>${this.headers[0]}</strong>${this.headers[1]}</h1>
        </div>
         `;
     }

     textField() {
        return this.strings.map((string, i, strings) => {
            return `
            <div class="text-field">
                <label for="${string.name}">${string.label}</label>
                <input type="text" name="${string.name}" id="${string.name}">
                ${this.submitVal.includes('פדיון') ? this.homeBtn : ''}
            </div>
            ${i == (strings.length - 2) ? '<hr>' : ''}
            `;
        }).join("");
     }

     formSection() {
        this.template += `
        <div class="form-section">
            <form action="#">
                ${this.textField()}
                <div>
                    <input type="submit" value="${this.submitVal}">
                </div>
            </form>
            <h4 id="wrong-error" style="color:red;">טעות בפרטים נסו שוב</h4>
        </div> 
        `;
     }

     printDepositScreen(state) {

        state.status = () => state.check + state.ransom + state.prize;
        
        const hash = decodeURI(window.location.hash);
        if (!state[this.type]) {

            this.deposit();
            this.formSection(); 
            document.querySelector(this.selector).innerHTML = this.template;
            this.template = "";

         } 
         
         else if (hash.includes('שיק')) {
            new CheckSuccess().printCheckSuccess(state.status());
         } 
         
         else if (hash.includes('קופה')) {
            new Feedbacks('הקופה נפדתה בהצלחה', '77XX').printFeedbacks(state.status());
         } 
         
         else if (hash.includes('פרס')) {
            new Feedbacks('כספי הזכיה הופקדו בהצלחה', 'XX25').printFeedbacks(state.status());
         } 
        
     }

}

export default DepositScreen;