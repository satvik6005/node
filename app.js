const os=require('os');
const user=os.userInfo();
console.log(user);
console.log(`ho uptime is ${os.uptime() }`);