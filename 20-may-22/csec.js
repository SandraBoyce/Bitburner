/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
    // if (target in )
    ns.brutessh(target);
    ns.ftpcrack(target);
    ns.httpworm(target);
    ns.relaysmtp(target);
    ns.sqlinject(target);

    ns.nuke(target);
    ns.scp('mhack.js', target)
    ns.exec('mhack.js', 2, target)

}