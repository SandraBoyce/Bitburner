/** @param {NS} ns */
export async function main(ns) {
	const hostname = ns.args[0];
    const target = ns.args[1]
    ns.exec('hack.js', hostname, 2, target)
}