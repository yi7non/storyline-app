class CheckSuccess {
    constructor(selector) {

        this.selector = selector || '#main';  
        this.template = '';
        this.strings = [
            {tag: "th", text: ['מספר קופה', 'יעד', 'סכום צבור', 'נזיל החל מ:']},
            {tag: "td", text: ['6953', 'טיול שנתי לאילת', '1000 ₪', '31.05.2021']},
            {tag: "td", text: ['8953', 'בלת"ם (חסכון למקרה בלתי מתוכנן)', '500 ₪', 'נזיל']},
            {tag: "td", text: ['7453', 'מתנות לצוות מורים', '589 ₪', '18.06.2021']},
            {tag: "td", text: ['7539', 'כיבוד לערב הורים', '200 ₪', '04.09.2023']}
        ];
 
     }

     checkDeposit() {
        this.template += `
        <div class="check-deposit check-deposit--done">
            <h1>השיק הופקד בהצלחה</h1>
        </div>
        `;
    }

    accountBalanceTable(sum) {
        return `
        <div class="account-balance--table">
            <p>יתרת חשבון <strong> ${sum * 500} </strong>₪</p>
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

    tableRow() {
        return this.strings.map(string => {
            return `
            <tr>
                ${string.text.map(column => `<${string.tag}>${column}</${string.tag}>`).join('')}
            <tr>
            `;
        }).join('');
    }

    createTable() {
        return `
        <div class="table">
            <table style="width:100%">
            ${this.tableRow()}
            </table>
        </div>
        `;
    }

    tableSection(sum) {
        this.template += `
        <div class="table-section">
            ${this.accountBalanceTable(sum)}
            ${this.createTable()}
        </div>
        `;
    }

    printCheckSuccess(sum) {
        this.checkDeposit();
        this.tableSection(sum);
        document.querySelector(this.selector).innerHTML = this.template;
        this.template = '';
    }
}

export default CheckSuccess;