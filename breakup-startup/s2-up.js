/** @param {NS} ns */
export async function main(ns) {
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

    while (!ns.fileExists("FTPCrack.exe")) {
        sleep(4000);
    }

    for (let i = 0; i < servers2Port.length; ++i) {
        const serv = servers2Port[i];

        ns.killall(serv)
    
        const maxRam = ns.getServerMaxRam(serv)      
    
        await ns.scp("grow.js", serv);
        await ns.scp("weaken.js", serv);
        await ns.scp("hack.js", serv);
        await ns.scp("filler-three.js", serv);
    
        ns.brutessh(serv);
        ns.ftpcrack(serv)
        ns.nuke(serv);
        
        if (maxRam >= 32) {
            const multiplier = Math.max( Math.floor(maxRam / 22.5), 1)
            // const fillerMult = Math.max( parseInt( maxRam - (22.1 * multiplier) - 5), 1)
            ns.exec('grow.js', serv, 10 * multiplier, serv)
            ns.exec('weaken.js', serv, 2 * multiplier, serv)
            ns.exec('hack.js', serv, 1 * multiplier, serv)
        }        

        if (maxRam > 16) {
            ns.exec("filler-three.js", serv, 10, serv)
        }

        if (maxRam > 8) {
            ns.exec("filler-three.js", serv, 5, serv)
        }

        ns.tprint(serv, ' has been s2-upped')
        
    }       
    
    ns.tprint('step serv2')
    ns.spawn("s3-up.js", 1)
}