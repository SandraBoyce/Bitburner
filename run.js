/** @param {NS} ns */
export async function main(ns) {
	const multiplier = ns.args[1]
	const target = ns.args[0]
	// target = [...ns.args]
	// for (var x of target) {
		ns.run('grow.js', 76 * multiplier, target)
		ns.run('weaken.js', 15 * multiplier, target)
		ns.run('hack.js', 7 * multiplier, target)
		// ns.print(x)
	// }
}