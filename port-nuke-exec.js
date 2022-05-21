/** @param {NS} ns */
export async function main(ns) {
	const hostname = ns.args[0];
    const multiplier = ns.args[1]
    // if (target in )
    if (ns.fileExists("BruteSSH.exe")) {
        ns.brutessh(hostname);
        ns.tprint('brute')
    }
    if (ns.fileExists("FTPCrack.exe")) {
        ns.ftpcrack(hostname);
        ns.tprint('ftp')
    }
    if (ns.fileExists("HTTPWorm.exe")) {
        ns.httpworm(hostname);
        ns.tprint('httpworm')
    }
    if (ns.fileExists("relaySMTP.exe")) {
        ns.relaysmtp(hostname);
        ns.tprint('relay')
    }
    if (ns.fileExists("SQLInject.exe")) {
        ns.sqlinject(hostname);
        ns.tprint('sql')
    }  
        
    
    ns.nuke(hostname);

    await ns.scp('hack.js', hostname, multiplier, hostname)
    await ns.scp('n00dles.js', hostname)
    ns.exec('hack.js', hostname, multiplier, hostname)
    ns.tprint(hostname, 'end host hack')

}