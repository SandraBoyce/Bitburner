/** @param {NS} ns */
export async function main(ns) {
	const servers1Port = ["neo-net",
                        "zer0",
                        "max-hardware",
                        "iron-gym"];

    while (!ns.fileExists("BruteSSH.exe")) {
        sleep(40000);
    }

    for (let i = 0; i < servers1Port.length; ++i) {
        const serv = servers1Port[i];

        ns.killall(serv)
        
        await ns.scp("grow.js", serv);
        await ns.scp("weaken.js", serv);
        await ns.scp("hack.js", serv);
        await ns.scp("filler-three.js", serv);
        // await ns.scp("n00dles.js", serv);
        // await ns.scp("runner.js", serv);
        
        ns.brutessh(serv);
        ns.nuke(serv);
        
        //22.1GB
        ns.exec('grow.js', serv, 10, serv)
        ns.exec('weaken.js', serv, 2, serv)
        ns.exec('hack.js', serv, 1, serv)
        
        ns.exec("filler-three.js", serv, 2, serv);

        ns.tprint(serv, ' has been s1-upped')
    }
    ns.tprint('step serv1')
    ns.spawn("s2-up.js", 1)
                        
}