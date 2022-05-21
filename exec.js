/** @param {NS} ns */
export async function main(ns) {
	var hostname = ns.args[0];
    var target = ns.args[1]
    ns.exec('hack.js', hostname, 2, target)
}