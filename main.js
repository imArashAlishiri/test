const question = document.querySelector('.quiz__q');
const answer = document.querySelector('.quiz__a');
const btn = document.querySelector('.quiz__b');


let previous = 0;
let current;


const test = {
    1: {
        q: 'متنبه شدن',
        a: "به زشتی عمل خود پی بردن و پند گرفتن"
    }, 
    2: {
        q: "مخیله",
        a: "خیال، قوه تخیل، ذهن"
    },
    3: {
        q: 'معمر',
        a: 'سالخورده'
    },
    4: {
        q: 'افسرده',
        a: 'بی بهره از معنویت، بی ذوق و حال'
    },
    5: {
        q: 'جبین',
        a: 'پیشانی'
    },
    6: {
        q: 'روایی',
        a: 'ارزش، اعتبار'
    },
    7: {
        q: 'اخته',
        a: 'بیرون کشیده، برکشیده'
    },
    8: {
        q: 'سرحد',
        a: 'مرز، کرانه'
    },
    9: {
        q: 'غایی',
        a: 'منسوب به غایت، نهایی'
    },
    10: {
        q: 'ابهن',
        a: 'بزرگی و شکوه که سبب احترام یا ترس دیگران میشود'
    },
    11: {
        q: 'اعلان',
        a: 'اشکار کردن چیزی و باخبر ساختن مردم از ان'
    },
    12: {
        q: 'اهتمام',
        a: 'کوشش، سعی، همت گماشتن;اهتام ورزیدن درکاری: همت گماشتن به انجام دادن ان'
    },
    13: {
        q: 'بیشه',
        a: 'زمینی که در ان به طور طبیعی گیاهان خودرو و درخت روییده باشد'
    },
        14: {
        q: 'تناور',
        a: 'دارای پیکر بزرگ و قوی'
    },
    15: {
        q: 'جلی',
        a: 'ویژگی خطی که درشت و واضح باشد و از دور دیده شود'
    },
    16: {
        q: 'سجایا',
        a: 'ج سجیه، خوها، خلق ها و خلصت ها'
    },
    17: {
        q: 'صحیفه',
        a: 'کتاب'
    },
    18: {
        q: 'عتاب',
        a: 'سرزنش، ملامت، تندی'
    },
    19: {
        q: 'بدقواره',
        a: 'ان که یا انچه که ظاهری زشت و نامتناسب دارد، بدترکیب'
    },
    20: {
        q: 'بذله',
        a: 'شوخی، لطیفه'
    },
    21: {
        q: 'برجک',
        a: 'سازه چرخانی که روی تانک قرار دارد و به کمک ان می توان جهت شلیک توپ را تغییر داد'
    },
    22: {
        q: 'بقولات',
        a: 'انواع دانه های خوراکی بعضی گیاهان مانند نخود و عدس، حبوبات'
    },


}



function reveval() {
    answer.textContent = test[current].a
    btn.textContent = 'Next';
}

function setup() {
    answer.textContent = '...';
    btn.textContent = 'Answer?';
    let random = Math.ceil(Math.random() * Object.keys(test).length);
    while(random == previous) {
        random = Math.ceil(Math.random() * Object.keys(test).length);
    }
    current = random;
    
    question.textContent = test[current].q;

    previous = current;
}

setup();



btn.addEventListener('click', () => {
    if(btn.textContent == 'Answer?') {
        reveval();
    } else {
        setup();
    }
})