class Feedbacks {

    constructor(title, code, selector) {
        this.title = title;
        this.code = code;
        this.selector = selector || '#main';
        this.template = '';
        this.print = `<a href="javascript:void(0)" id="print">
                            <svg viewBox="0 -4 20 32" width="50" height="50">
                                <use xlink:href="img/sprite.svg#icon-print">
                            </svg>
                            הדפסה
                        </a>`;
    }


    deposit() {
        this.template += `
        <div class="check-deposit check-deposit--done check-deposit--long">
               <h1>${this.title}</h1>
               <div class="btn">
                ${window.location.hash.includes('שיק') ? this.print : ''}
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
            </div>
            <hr class="feedbacks__hr">
            <div class="feedbacks__secret-code">
                <h2>500 ₪ הופקדו לחשבון עם <span class="feedbacks__secret-code-string">קוד סודי</span> <span class="feedbacks__code-num">${
                    this.code.split('').map(code => `<span class="num-code">${code}</span>`).join('')
                }</span></h2>
            </div>
        </div>
        `;
    }

    stickerNumStyle() {
        document.querySelectorAll('.num-code').forEach(num => !isNaN(Number(num.textContent)) ? num.classList.add('sticker') : '');
    }

    printFeedbacks(sum) {
        this.deposit();
        this.createFeedbacks(sum);
        document.querySelector(this.selector).innerHTML = this.template;
        this.stickerNumStyle();
        this.template = '';
    }

}

export default Feedbacks;