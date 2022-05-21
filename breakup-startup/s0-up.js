/** @param {NS} ns */
export async function main(ns) {
	await ns.scp('filler-three.js', 'n00dles')
    ns.nuke('n00dles')
    ns.exec('filler-three.js', 'n00dles', 1, 'n00dles')
    ns.tprint('step n00dles')
    

    // Array of all servers that don't need any ports opened
    // to gain root access. These have 16 GB of RAM
    const servers0Port = ["sigma-cosmetics",
                        "joesguns",
                        "foodnstuff",
                        "nectar-net",
                        "hong-fang-tea",
                        "harakiri-sushi",
                        "neo-net"];

    for (let i = 0; i < servers0Port.length; ++i) {
        const serv = servers0Port[i];
    
        await ns.scp("filler-three.js", serv);
        ns.nuke(serv);
        ns.exec("filler-three.js",serv, 6, serv);
    }
    ns.tprint('step serv0')

    ns.spawn("s1-up.js", 1)
}