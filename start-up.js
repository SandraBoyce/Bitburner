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
                    "crush-fitness",
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


await ns.scp('filler-three.js', 'n00dles')
ns.nuke('n00dles')
ns.exec('filler-three.js', 1, 'n00dles')

// Copy our scripts onto each server that requires 0 ports
// to gain root access. Then use nuke() to gain admin access and
// run the scripts.
//16 GB
for (let i = 0; i < servers0Port.length; ++i) {
    const serv = servers0Port[i];

    await ns.scp("filler-three.js", serv);
    ns.nuke(serv);
    ns.exec("filler-three.js", 6, serv);
}

// Wait until we acquire the "BruteSSH.exe" program
while (!ns.fileExists("BruteSSH.exe")) {
    sleep(40000);
}

// Copy our scripts onto each server that requires 1 port
// to gain root access. Then use brutessh() and nuke()
// to gain admin access and run the scripts.
// 32 GB

// const multiplier = parseInt(8 * (3 / targets.length))

for (let i = 0; i < servers1Port.length; ++i) {
    const serv = servers1Port[i];
    
    await ns.scp("grow.js", serv);
    await ns.scp("weaken.js", serv);
    await ns.scp("hack.js", serv);
    await ns.scp("filler-three", serv);
    // await ns.scp("n00dles.js", serv);
    // await ns.scp("runner.js", serv);

    ns.brutessh(serv);
    ns.nuke(serv);

    //22.1GB
    ns.exec('grow.js', serv, 10, serv)
    ns.exec('weaken.js', serv, 2, serv)
    ns.exec('hack.js', serv, 1, serv)

    ns.exec("filler-three.js", serv, 2, serv);
}

while (!ns.fileExists("FTPCrack.exe")) {
    sleep(4000);
}


for (var i = 0; i < servers2Port.length; ++i) {
    const serv = servers2Port[i];

    maxRam = ns.getServerMaxRam(serv)
    const multiplier = parseInt(maxRam / 22.1)
    const fillerMult = parseInt( maxRam - (22.1 * multiplier) - 5)

    await ns.scp("grow.js", serv);
    await ns.scp("weaken.js", serv);
    await ns.scp("hack.js", serv);
    await ns.scp("filler-three", serv);

    ns.brutessh(serv);
    ns.ftpcrack(serv)
    ns.nuke(serv);

    ns.exec('grow.js', serv, 10 * multiplier, serv)
    ns.exec('weaken.js', serv, 2 * multiplier, serv)
    ns.exec('hack.js', serv, 1 * multiplier, serv)

    ns.exec("filler-three.js", serv, fillerMult, serv);
}

while (!ns.fileExists("HTTPWorm.exe")) {
    sleep(40000);
}

for (var i = 0; i < servers3Port.length; ++i) {
    const serv = servers3Port[i];

    maxRam = ns.getServerMaxRam(serv)
    const multiplier = parseInt(maxRam / 22.1)
    const fillerMult = parseInt( maxRam - (22.1 * multiplier) - 5)

    await ns.scp("grow.js", serv);
    await ns.scp("weaken.js", serv);
    await ns.scp("hack.js", serv);
    await ns.scp("filler-three", serv);

    ns.brutessh(serv);
    ns.ftpcrack(serv)
    ns.nuke(serv);

    ns.exec('grow.js', serv, 10 * multiplier, serv)
    ns.exec('weaken.js', serv, 2 * multiplier, serv)
    ns.exec('hack.js', serv, 1 * multiplier, serv)

    ns.exec("filler-three.js", serv, fillerMult, serv);
    }
}