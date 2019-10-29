class LoginScreen {

    constructor(selector) {

       this.selector = selector || '#main';  
       this.template = '';
       this.strings = ['להפקדת שיק', 'לפדיון קופה', 'הפקדת פרס כספי'];

    }

    accountBalance(num) {

        this.template += `
        <div class="account-balance">
            <p> יתרת חשבון<span class="account-balance__num"> ${num} ₪</span></p>
        </div>
        `;

    }

    entry(stateNum) {

        this.template += `
        <div class="entry">
            ${this.entrySection(stateNum)}
        </div>
        `;

    }

    entrySection(stateNum) {

        return this.strings.map((string, i) => {

            return `
            <div class="entry__section ${i == 1 ? 'entry__section--center' : ''}">
                <div class="entry__text ${i < stateNum ? 'entry__text--done' : ''}">
                    <h3>${string}</h3>
                </div>
                <div class="entry__btn">
                    <a href="#">כניסה</a>
                </div>
            </div>
            `
        }).join('');

    }

    printLoginScreen(stateNum) {

        if (stateNum > 3) stateNum = 3;
        if (stateNum < 0 || isNaN(stateNum)) stateNum = 0;

            this.accountBalance(500 * stateNum);
            this.entry(stateNum);
            document.querySelector(this.selector).innerHTML = this.template;
            this.template = "";

    }

}

export default LoginScreen;