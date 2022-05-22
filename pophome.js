/** @param {NS} ns */
export async function main(ns) {
	const maxRam = ns.getServerMaxRam('home')
    const target = [...ns.args]
    // let baseR = Math.floor( ((maxRam - 10) / 22.75) / target.length) 
    
    let growR = Math.floor( maxRam / (21.001 * ns.args.length)) 

    // ns.tprint(baseR, 'baseR')
    ns.print(maxRam, 'maxRam')
    ns.tprint(ns.args.length)

    ns.killall('home')

    // if (baseR >= 80658) {

    //     for (const t of target) {
    //         ns.run('grow.js', 10 * baseR, t)
	// 	    ns.run('weaken.js', 2 * baseR, t)
	// 	    ns.run('hack.js', 1 * baseR, t)

	// 	    ns.run('filler-three.js', 1, t)
    //         ns.tprint(t)
    //         ns.tprint(baseR, 'used baseR')
            
    //     }
    // }

    //for growth orient
    // if (baseR >= 80658) {

        for (const t of target) {
            ns.run('grow.js', 10 * growR, t)
		    ns.run('weaken.js', 2 * growR, t)

		    ns.run('filler-three.js', 1, t)
            ns.tprint(t)
            ns.tprint(growR, 'used growR')
            
        }
    // }


    // if (maxRam >= 32 && target.length === 1) {            
    //         ns.run('grow.js', 10 * baseR, target[0])
	// 	    ns.run('weaken.js', 2 * baseR, target[0])
	// 	    ns.run('hack.js', 1 * baseR, target[0])

	// 	    ns.run('filler-three.js', 1, target[0])
    //         ns.tprint('32gb and one arg for ', target[0])
    // }
    
    // if (maxRam > 32) {

    //     for (const t of target) {
    //         ns.run('grow.js', 10 * baseR, t)
	// 	        ns.run('weaken.js', 2 * baseR, t)
	// 	        ns.run('hack.js', 1 * baseR, t)

	// 	    ns.run('filler-three.js', 1, t)
    //             ns.tprint(t)
            
    //     }
    //     ns.tprint('32gb for ', target)
            
    // }
    
}