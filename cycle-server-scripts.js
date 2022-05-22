/** @param {NS} ns */
export async function main(ns) {
    //single target
    const target = ns.arg[0]
    const multiplier = ns.args[1]

	for (let i = 20; i < 23; i++) {
		const hostname = `${i}th`

        ns.killall(hostname)

		ns.exec('grow.js', hostname, 76 * multiplier, target)
        ns.exec('weaken.js', hostname, 15 * multiplier, target)
        ns.exec('hack.js', hostname, 5 * multiplier, target)

        ns.exec('filler-three.js', hostname, 1)

        ns.tprint(hostname, ' cycled')
	}
}
