class Validation {

    constructor(correctInfo) {
        this.correctInfo = correctInfo;
        this.elements;
    }

    createElem() {
        this.elements = {
            number: document.getElementById('number').value,
            code: document.getElementById('code').value,
            branch: document.getElementById('branch').value,
            account: document.getElementById('account').value,
            depositAmount: document.getElementById('deposit-amount').value
        }
    }

    validateCheck() {
        const hash = decodeURI(window.location.hash);
        const note = '<h4 style="color:red;">טעות בפרטים נסו שוב</h4>';
        
        if(hash.includes('שיק')) {
            
            this.createElem();
            const keys = Object.keys(this.elements);
            const isValid = keys.map((key, index) => {
                return this.elements[key] === this.correctInfo[index];
            });

            if(!isValid.every(item => item)) {
                document.querySelector('form').innerHTML += note;
            } else {
                return true;
            }

        }
        
    }

}

export default Validation;


// bank 
// branch
// invoice
// check