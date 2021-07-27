process.stdout.write('hello from spinner2.js... \rheyyy\n');
const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let when = 0;
for (const symbol of chars) {
    when  += 200;
    setTimeout(() => {
        process.stdout.write(`\r ${symbol} `)
    }, when
    );
}