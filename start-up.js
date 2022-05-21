/** @param {NS} ns */
export async function main(ns) {
// Array of all servers that don't need any ports opened
// to gain root access. These have 16 GB of RAM
const servers0Port = ["sigma-cosmetics",
                    "joesguns",
                    "foodnstuff",
                    "nectar-net",
                    "hong-fang-tea",
                    "harakiri-sushi",
                    "neo-net"];

// Array of all servers that only need 1 port opened
// to gain root access. These have 32 GB of RAM
const servers1Port = ["neo-net",
                    "zer0",
                    "max-hardware",
                    "iron-gym"];

// Array of all servers that only need 2 port opened
// to gain root access. These have 32 GB of RAM
const servers2Port = ["omega-net",
                    "silver-helix",
                    "johnson-ortho",
                    "iron-gym",
                    //"crush-fitness" no RAM
                    "phantasy",
                    "avmnite-02h",
                    "the-hub"
                    ];
// Array of all servers that only need 3 port opened
// to gain root access. These have 32 GB of RAM
const servers3Port = ["computek",
                    "netlink",
                    "catalyst",
                    "millenium-fitness",
                    "rothman-uni",
                    "rho-construction"];


await ns.scp('n00dles.js', 'n00dles')
ns.nuke('n00dles')
ns.exec('n00dles.js', 1, 'n00dles')
// Copy our scripts onto each server that requires 0 ports
// to gain root access. Then use nuke() to gain admin access and
// run the scripts.
for (let i = 0; i < servers0Port.length; ++i) {
    const serv = servers0Port[i];

    await ns.scp("n00dles.js", serv);
    ns.nuke(serv);
    ns.exec("n00dles.js", 6, serv);
}

// Wait until we acquire the "BruteSSH.exe" program
while (!fileExists("BruteSSH.exe")) {
    sleep(30000);
}

// Copy our scripts onto each server that requires 1 port
// to gain root access. Then use brutessh() and nuke()
// to gain admin access and run the scripts.
for (let i = 0; i < servers1Port.length; ++i) {
    const serv = servers1Port[i];

    await ns.scp("n00dles.js", serv);
    ns.brutessh(serv);
    ns.nuke(serv);
    ns.exec("n00dles.js", 12, serv);
}

// while (!fileExists("FTPCrack.exe")) {
//     sleep(60000);
// }
// Copy our scripts onto each server that requires 2 port
// to gain root access. Then use brutessh() and nuke()
// to gain admin access and run the scripts.
// for (var i = 0; i < servers2Port.length; ++i) {
//     var serv = servers2Port[i];

//     scp("n00dles.js", serv);
//     brutessh(serv);
//     ftpcrack(target)
//     nuke(serv);
//     exec("n00dles.js", serv, 12);
// }

// while (!fileExists("HTTPWorm.exe")) {
//     sleep(60000);
// }
// Copy our scripts onto each server that requires 3 port
// to gain root access. Then use brutessh() and nuke()
// to gain admin access and run the scripts.
// for (var i = 0; i < servers3Port.length; ++i) {
//     var serv = servers3Port[i];

//     scp("n00dles.js", serv);
//     brutessh(serv);
//     ftpcrack(target)
        // httpworm(target)
//     nuke(serv);
//     exec("n00dles.js", serv, 12);
}