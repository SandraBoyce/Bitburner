

    /** @param {NS} ns */
export async function main(ns) {
	// Array of all servers that only need 4 port opened or higher lvl
    // to gain root access. These have some number of GB of RAM
    const servers5Port = [
        'zb-institute',
    'vitalife','applied-energetics','ecorp','unitalife',
    'univ-energy','titan-labs','helios','microdyne',
    'solaris','zb-def','nova-med','icarus','deltaone',
    'zeus-med','galactic-cyber','defcomm','omnia','infocomm',
    'taiyang-digital','stormtech','aerocorp','fulcrumtech',
    'clarkinc','blade','4sigma','b-and-a','nwo','omnitek',
    'megacorp','ecorp','kuai-gong','fulcrumassets','powerhouse-fitness'
    ]
    

    while (!ns.fileExists("SQLInject.exe")) {
        sleep(40000);
    }

    for (var i = 0; i < servers5Port.length; ++i) {
        const serv = servers5Port[i];

        ns.killall(serv)
    
        const maxRam = ns.getServerMaxRam(serv)      
        
    
        await ns.scp("grow.js", serv);
        await ns.scp("weaken.js", serv);
        await ns.scp("hack.js", serv);
        await ns.scp("filler-three.js", serv);
    
        ns.brutessh(serv);
        ns.ftpcrack(serv)
        ns.httpworm(serv)
        ns.relaysmtp(serv)
        ns.sqlinject(serv)
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

        ns.tprint(serv, ' has been s5-upped')
    }


    ns.tprint('step serv5')
    ns.tprint('step serv5')
    // ns.spawn("s6-up.js", 1)
}