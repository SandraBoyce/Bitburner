// const curHackedServer = ['curHS']
// const prevHackedServer = ['pHS']
// const hackedServers = ['HS']



// import { cube, foo, graph } from './my-module.js';

/** @param {NS} ns */
export async function main(ns) {
    const [ curHackedServer, prevHackedServer, hackedServers ] = [...ns.args]
    ns.tprint(ns.args[2])

}

// export { 
//     curHackedServer,
//     prevHackedServer,
//     hackedServers,
// }