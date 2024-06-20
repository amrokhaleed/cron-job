import cron from 'node-cron';

let count = 0;

const job = cron.schedule('*/10 * * * * *', () => {
    count += 1;
    console.log('Cron job is running every minute, count:', count);
});

export { job, count };