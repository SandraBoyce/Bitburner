/** @param {NS} ns */
export async function main(ns) {
    
    var multiplier = ns.args[0]
    var ram = 1024 * multiplier;
    
    var i = args[1];
    
    ns.getPurchasedServerCost(ram)

    var hostname = ns.purchaseServer( `${i}` , ram);
    await ns.scp("grow.js", hostname);
    await ns.scp("weaken.js", hostname);
    await ns.scp("hack.js", hostname);
    await ns.scp("runner.js", hostname);
    await ns.scp("n00dles.js", hostname);
    exec("n00dles.js", hostname, 426);
    ns.tprint(hostname, ' purchased')
        
}
    