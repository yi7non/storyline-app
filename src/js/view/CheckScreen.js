class CheckScreen {

    constructor(selector) {

        this.selector = selector || '#main';  
        this.template = '';
        this.strings = [
            {label: 'מספר השיק', name: 'number'},
            {label: 'מספר בנק', name: 'code'},
            {label: 'מספר סניף', name: 'branch'},
            {label: 'מספר חשבון', name: 'account'},
            {label: 'סכום הפקדה', name: 'deposit-amount'},
        ];
 
     }

     checkDeposit() {
         this.template += `
         <div class="check-deposit">
                <h1><strong>הפקדת שיק </strong> אנא הזנ/י את פרטי השיק</h1>
        </div>
         `;
     }

     textField() {
        return this.strings.map((string, i, strings) => {
            return `
            <div class="text-field">
                <label for="${string.name}">${string.label}</label>
                <input type="text" name="${string.name}" id="${string.name}">
            </div>
            ${i === (strings - 2) ? '<hr>' : ''}
            `;
        }).join("");
     }

     formSection() {
        this.template += `
        <div class="form-section">
            <form action="#">
                ${this.textField()}
                <div>
                    <input type="submit" value="הפקדה">
                </div>
            </form>
        </div> 
        `;
     }

     printCheckScreen() {
        this.checkDeposit();
        this.formSection(); 
        document.querySelector(this.selector).innerHTML = this.template;
        this.template = "";
     }

}

export default CheckScreen;