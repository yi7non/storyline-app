class Validation {

    constructor(correctInfo, type = false) {
        this.correctInfo = correctInfo;
        this.type = type;
        this.elements = {};
    }

    createElem() {
        if(!this.type) {
            this.elements = {
                number: document.getElementById('number').value,
                code: document.getElementById('code').value,
                branch: document.getElementById('branch').value,
                account: document.getElementById('account').value,
                depositAmount: document.getElementById('deposit-amount').value
            }
        } else {
            this.elements.code = document.getElementById('code').value
        }
    }

    validate() {
            
            this.createElem();
            const keys = Object.keys(this.elements);
            const isValid = keys.map((key, index) => {
                return this.elements[key] === this.correctInfo[index];
            });

            if(!isValid.every(item => item)) {
                document.getElementById('wrong-error').classList.add('show');
            } else {
                return true;
            }
        
    }

}

export default Validation;


// bank 
// branch
// invoice
// check