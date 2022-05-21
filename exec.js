/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
    ns.exec('mhack.js', 2, target)
}