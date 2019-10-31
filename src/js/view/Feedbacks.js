class Feedbacks {

    constructor(title, sum, code, selector) {
        this.title = title;
        this.sum = sum;
        this.code =code;
        this.selector = selector || '#main';
        this.template = '';
    }


    deposit() {
        this.template += `
        <div class="check-deposit check-deposit--done check-deposit--long">
               <h1>${this.title}</h1>
       </div>
        `;
    }

    createFeedbacks() {
        this.template += `
        <div class="feedbacks">
            <div class="feedbacks__account-balance">
                <div class="feedbacks__title">
                    <h2>יתרת חשבון <span class="feedbacks__account-sum">${this.sum}</span> ₪</h2>
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

    printFeedbacks() {
        this.deposit();
        this.createFeedbacks();
        document.querySelector(this.selector).innerHTML = this.template;
        this.template = '';
    }

}

export default Feedbacks;