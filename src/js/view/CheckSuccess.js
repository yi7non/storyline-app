class CheckSuccess {
    constructor(selector) {

        this.selector = selector || '#main';  
        this.template = '';
        this.strings = [
            {tag: "th", text: ['', '', '', '']},
            {tag: "td", text: ['', '', '', '']},
            {tag: "td", text: ['', '', '', '']},
            {tag: "td", text: ['', '', '', '']},
            {tag: "td", text: ['', '', '', '']}
        ];
 
     }

     checkDeposit() {
        this.template += `
        <div class="check-deposit check-deposit--done">
            <h1>השיק הופקד בהצלחה</h1>
        </div>
        `;
    }

    accountBalanceTable() {
        this.template += `
        <div class="account-balance--table">
            <p>יתרת חשבון <strong> 500 </strong>₪</p>
            <a href="javascript:void(0)" id="home">
                <svg viewBox="-10 30 52 30" width="50" height="50">
                    <use xlink:href="img/sprite.svg#icon-home3">
                </svg>
            </a>
            <a href="javascript:void(0)" id="print">
                <svg viewBox="0 -4 20 32" width="50" height="50">
                    <use xlink:href="img/sprite.svg#icon-print">
                </svg>
                הדפסה
            </a>
        </div>
        `;
    }

    table() {

    }
}

export default CheckSuccess;