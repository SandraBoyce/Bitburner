/** @param {NS} ns */
//foo.js
let globalVariable;

export async function main(ns) {
    globalVariable = ns.args.length;
    while(true) {
        ns.tprint(globalVariable);
        await ns.sleep(3000);
    }
}