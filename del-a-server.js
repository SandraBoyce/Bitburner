/** @param {NS} ns */
export async function main(ns) {
	var hostname = args[0]
		ns.killall(hostname)
		ns.deleteServer(hostname)
	// for (let i = 4; i < 25; i++) {
	// 	var hostname = 'first'
	// 	ns.killall(hostname)
	// 	ns.deleteServer(hostname)
	// }
}