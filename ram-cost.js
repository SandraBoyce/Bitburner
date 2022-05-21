/** @param {NS} ns */
export async function main(ns) {
    
    var multiplier = ns.args[0]
    var ram = 1024 * multiplier;   
    
    const cost = ns.getPurchasedServerCost(ram)
    ns.tprint(cost, ` for ${ram}`)   
        
}