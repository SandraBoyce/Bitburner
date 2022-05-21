/** @param {NS} ns */
export async function main(ns) {
    var hostname = ns.args[0]
    var targets = [ns.args[1], ns.args[2], ns.args[3]]
    var multiplier = 2

    // for (const target of targets) {
    //     ns.exec('grow.js', hostname, 76 * multiplier, target)
    //     ns.exec('weaken.js', hostname, 15 * multiplier, target)
    //     ns.exec('hack.js', hostname, 7 * multiplier, target)
    // }
    ns.killall(hostname)
    targets.forEach(target => {
        ns.exec('grow.js', hostname, 76 * multiplier, target)
        ns.exec('weaken.js', hostname, 15 * multiplier, target)
        ns.exec('hack.js', hostname, 5 * multiplier, target)
    })

    //not working yet
    ns.exec('n00dles.js', hostname, 4)
}