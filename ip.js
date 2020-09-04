const { writeSync } = require('clipboardy');
const publicIp = require('public-ip');

(async () => {
    // Get Public IPv4
    const ipv4 = await publicIp.v4();
    console.log(ipv4)

    // Copy to Clipboard
    writeSync(ipv4);
})();