/** @param {NS} ns */
export async function main(ns) {
    const [s1, s2, s3, s4] = ['slippy', 'slappity', 'bean', 'coffee']
    ns.run('data.js', 1, s1,s2,s3,s4)	
}