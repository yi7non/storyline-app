class Feedbacks {

    constructor(title, code, selector) {
        this.title = title;
        this.code = code;
        this.selector = selector || '#main';
        this.template = '';
    }


    deposit() {
        this.template += `
        <div class="check-deposit check-deposit--done check-deposit--long">
               <h1>${this.title}</h1>
               <div class="btn">
                <a href="javascript:void(0)" id="print">
                    <svg viewBox="0 -4 20 32" width="50" height="50">
                        <use xlink:href="img/sprite.svg#icon-print">
                    </svg>
                    הדפסה
                </a>
                <a href="javascript:void(0)" id="home">
                    <svg viewBox="-10 30 52 30" width="50" height="50">
                        <use xlink:href="img/sprite.svg#icon-home3">
                    </svg>
                </a>
            </div>
       </div>
        `;
    }

    createFeedbacks(sum) {
        this.template += `
        <div class="feedbacks">
            <div class="feedbacks__account-balance">
                <div class="feedbacks__title">
                    <h2>יתרת חשבון <span class="feedbacks__account-sum">${sum * 500}</span> ₪</h2>
                </div>
                <div class="feedbacks__btn">
                    <a href="javascript:void(0)" id="home">
                        <svg viewBox="-10 30 52 30" width="50" height="50">
                            <use xlink:href="img/sprite.svg#icon-home3">
                        </use></svg>
                    </a>
                </div>
            </div>
            <hr class="feedbacks__hr">
            <div class="feedbacks__secret-code">
                <h2>500 ₪ הופקדו לחשבון עם קוד סודי <span class="feedbacks__code-num">${this.code}</span></h2>
            </div>
        </div>
        `;
    }

    printFeedbacks(sum) {
        this.deposit();
        this.createFeedbacks(sum);
        document.querySelector(this.selector).innerHTML = this.template;
        this.template = '';
    }

}

export default Feedbacks;