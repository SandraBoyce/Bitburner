/** @param {NS} ns */
export async function main(ns) {
    const spacer = '- - - -- - - - - - - - - - - - - - - - - -'
    //multiple targets
    // const targets = [...ns.args]
    // targets.forEach( target => {
    //     let money = ns.getServerMaxMoney(target);
    //     ns.tprint(target, ' has ', money, ' max money')
        // ns.tprint(spacer)
 
    // })    

    //single target
	// const target = ns.args[0];
    // let money = ns.getServerMaxMoney(target);
    // ns.tprint(target, ' has ', money, ' max money')

    //s5 targets
    const servers5Port = [
        'zb-institute',
    'vitalife','applied-energetics','unitalife',
    'univ-energy','titan-labs','helios','microdyne',
    'solaris','zb-def','nova-med','icarus','deltaone',
    'zeus-med','galactic-cyber','defcomm','omnia','infocomm',
    'taiyang-digital','stormtech','aerocorp','fulcrumtech',
    'clarkinc','blade','4sigma','b-and-a','nwo','omnitek',
    'megacorp','ecorp','kuai-gong','fulcrumassets','powerhouse-fitness'
    ]
    let moniest = 0
    let bigSpender = ''
    const targets = servers5Port
    targets.forEach( target => {
        let money = ns.getServerMaxMoney(target);
        let canHack = ns.getServerRequiredHackingLevel(target)
        ns.tprint(target, ' has ', money / 1_000_000_000, ' B max money')
        ns.tprint(target, ' needs ', canHack, ' level')

        if (money > 700_000_000_000) 
        {
            ns.tprint(target, ' has ', money / 1_000_000_000, ' B max money')
            ns.tprint(target, ' needs ', canHack, ' level')
            ns.tprint(spacer)

        }
        
        if (money > moniest) 
        {
             moniest = money
             bigSpender = target 
        } 
    })
    
    ns.tprint(spacer)
    // ns.tprint(' ' * 10)
    let fatCat = ns.getServerRequiredHackingLevel(bigSpender)
    ns.tprint(moniest / 1_000_000_000, ' B max money from ', bigSpender)
    ns.tprint(bigSpender, ' needs ', fatCat, ' level')    
    //all targets
    // const hostsAll = ['n00dles','foodnstuff','sigma-cosmetics','joesguns','nectar-net','hong-fang-tea','harakiri-sushi','neo-net','zer0','max-hardware','iron-gym','phantasy','silver-helix','omega-net','crush-fitness','johnson-ortho','the-hub','computek','rothman-uni','netlink','aevum-police','catalyst','summit-uni','millenium-fitness','rho-construction','alpha-ent','syscore','lexo-corp','snap-fitness','zb-institute','vitalife','applied-energetics','ecorp','unitalife','univ-energy','titan-labs','helios','microdyne','solaris','zb-def','nova-med','icarus','deltaone','zeus-med','galactic-cyber','defcomm','omnia','infocomm','taiyang-digital','stormtech','aerocorp','fulcrumtech','clarkinc','blade','4sigma','b-and-a','nwo','omnitek','megacorp','ecorp','kuai-gong','fulcrumassets','powerhouse-fitness']
    // const targets = hostsAll
    // targets.forEach( target => {
    //     let money = ns.getServerMaxMoney(target);
    //     ns.tprint(target, ' has ', money, ' max money') 
    // })
}