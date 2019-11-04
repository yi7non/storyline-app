class LoginScreen {

    constructor(selector = '#main', state) {

       this.selector = selector;
       this.state = state;
       console.log(this.state)  
       this.template = '';
       this.strings = ['להפקדת שיק', 'לפדיון קופה', 'הפקדת פרס כספי'];

    }

    accountBalance() {

        this.template += `
        <div class="account-balance">
            <p> יתרת חשבון<span class="account-balance__num"> ${this.state.status() * 500} ₪</span></p>
        </div>
        `;

    }

    entry() {

        this.template += `
        <div class="entry">
            ${this.entrySection(this.state.status())}
        </div>
        `;

    }

    entrySection() {

        const stateKey = Object.keys(this.state);

        return this.strings.map((string, i) => {

            return `
            <div class="entry__section ${i == 1 ? 'entry__section--center' : ''}">
                <div class="entry__text ${this.state[stateKey[i]] > 0 ? 'entry__text--done' : ''}">
                    <h3>${string}</h3>
                </div>
                <div class="entry__btn">
                    <a href="#${string}">כניסה</a>
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