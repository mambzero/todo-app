const ghpages = require('gh-pages');

const format = (date, options) => {
    return new Intl.DateTimeFormat('en', options).format(date);
};

const date = new Date();

let year = format(date, { year: 'numeric' });
let month = format(date, { month: 'short' });
let day = format(date, { day: '2-digit' });

let time = format(date, {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
});

let message = `Deploy ${day}-${month}-${year} ${time}h`;

ghpages.publish('dist', { message }, (err) => {
    if (err === undefined) {
        console.log('Published!');
    } else {
        console.log(err);
    }
});