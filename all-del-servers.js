/** @param {NS} ns */
export async function main(ns) {

	for (let i = 0; i < 25; i++) {
		var hostname = `${i}th`
		ns.killall(hostname)
		ns.deleteServer(hostname)
        ns.tprint(hostname, ' deleted')
	}
}