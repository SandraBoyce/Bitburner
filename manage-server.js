/** @param {NS} ns */
export async function main(ns) {
    const hostname = ns.args[0]

    // const targets = [ns.args[1], ns.args[2], ns.args[3]]
    const targets = [ns.args[1], ns.args[2]]

    //single target
    // const target = ns.args[1]

    // const multiplier = 2
    const multiplier = parseInt(8 * (3 / targets.length))
    // targets.forEach(target => ns.tprint(target))


    // for (const target of targets) {
    //     ns.exec('grow.js', hostname, 76 * multiplier, target)
    //     ns.exec('weaken.js', hostname, 15 * multiplier, target)
    //     ns.exec('hack.js', hostname, 7 * multiplier, target)
    // }
    ns.killall(hostname)
    targets.forEach(target => {
        ns.exec('grow.js', hostname, 10 * multiplier, target)
        ns.exec('weaken.js', hostname, 2 * multiplier, target)
        ns.exec('hack.js', hostname, 1 * multiplier, target)
    })

    //single target
    // ns.exec('grow.js', hostname, 76 * multiplier, target)
    // ns.exec('weaken.js', hostname, 15 * multiplier, target)
    // ns.exec('hack.js', hostname, 5 * multiplier, target)

    // ns.exec('n00dles.js', hostname, 26)
    // ns.exec('n00dles.js', hostname, 4)

    //only for first cycle***
    // await ns.scp('filler-three.js', hostname)

     ns.exec('filler-three.js', hostname, Math.max(multiplier - 2, 1), targets[0])

    
}


