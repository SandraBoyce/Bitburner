/** @param {NS} ns */
export async function main(ns) {
    
    const multiplier = ns.args[0]
    const ram = 1024 * multiplier;   
    
    const cost = ns.getPurchasedServerCost(ram)
    ns.tprint(cost, ` for ${ram}`)   
        
}