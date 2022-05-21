/** @param {NS} ns */
export async function main(ns) {
    
    const multiplier = ns.args[0]
    const ram = 1024 * (2 ^ multiplier);
    
    const i = args[1];
    
    ns.getPurchasedServerCost(ram)

    const hostname = ns.purchaseServer( `${i}` , ram);
    await ns.scp("grow.js", hostname);
    await ns.scp("weaken.js", hostname);
    await ns.scp("hack.js", hostname);
    await ns.scp("runner.js", hostname);
    await ns.scp("n00dles.js", hostname);
    exec("n00dles.js", hostname, 426);
    ns.tprint(hostname, ' purchased')
        
}
    