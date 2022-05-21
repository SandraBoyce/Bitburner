/** @param {NS} ns */
export async function main(ns) {
    var hostname = args[0]
    var targets = [args[1], args[2], args[3]]
    var multiplier = 2

    // for (const target of targets) {
    //     ns.exec('grow.js', hostname, 76 * multiplier, target)
    //     ns.exec('weaken.js', hostname, 15 * multiplier, target)
    //     ns.exec('hack.js', hostname, 7 * multiplier, target)
    // }

    targets.forEach(target => {
        ns.exec('grow.js', hostname, 76 * multiplier, target)
        ns.exec('weaken.js', hostname, 15 * multiplier, target)
        ns.exec('hack.js', hostname, 7 * multiplier, target)
    })
}