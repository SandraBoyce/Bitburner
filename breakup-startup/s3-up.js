/** @param {NS} ns */
export async function main(ns) {
	// Array of all servers that only need 3 port opened
    // to gain root access. These have some number of GB of RAM
    const servers3Port = ["computek",
                        "netlink",
                        "catalyst",
                        "millenium-fitness",
                        "rothman-uni",
                        "rho-construction"];
    while (!ns.fileExists("HTTPWorm.exe")) {
        sleep(40000);
    }

    for (var i = 0; i < servers3Port.length; ++i) {
        const serv = servers3Port[i];
    
        const maxRam = ns.getServerMaxRam(serv)
        const multiplier = Math.max( parseInt(maxRam / 22.1), 1)
        const fillerMult = Math.max( parseInt( maxRam - (22.1 * multiplier) - 5), 1)
    
        await ns.scp("grow.js", serv);
        await ns.scp("weaken.js", serv);
        await ns.scp("hack.js", serv);
        await ns.scp("filler-three.js", serv);
    
        ns.brutessh(serv);
        ns.ftpcrack(serv)
        ns.nuke(serv);
    
        ns.exec('grow.js', serv, 10 * multiplier, serv)
        ns.exec('weaken.js', serv, 2 * multiplier, serv)
        ns.exec('hack.js', serv, 1 * multiplier, serv)
    
        ns.exec("filler-three.js", serv, 1 * fillerMult, serv);
        }
        ns.tprint('step serv3')
        // ns.spawn("s4-up.js", 1)
}