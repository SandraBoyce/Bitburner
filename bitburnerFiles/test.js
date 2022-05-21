/** @param {NS} ns */
export async function main(ns) {
	//allows arguments to be passed in from the command line ns.args[...]
	var hostname = ns.args[1]
	while(true) {
		await ns.hack(hostname)
		ns.printf(ns.args[0])
		await ns.sleep(3000)
	}
}