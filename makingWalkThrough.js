// pikachu
// vs
// Psyduck

let pikachuAttack = 50
let psyduckAttach = 65

if (pikachuAttack > psyduckAttach) {
    console.log("Pikachu is more OP than psyduch")
} else if (psyduckAttach > pikachuAttack) {
    console.log("Psyduck is more OP than pikachu ")
} else  {
    console.log("Psyduck and Psyduck are evenly matched")
}



let pikachuHealth = 100
let pikachuDefense = 40

if (pikachuHealth <= psyduckAttach) {
    console.log("Pikachu fainted")
} else {
    pikachuHealth = pikachuHealth - psyduckAttach
    console.log("Pikachu takes a hit and has lower health" + pikachuHealth)
    //console.log(`Pikachu took a hit! His HP is now ${pikachuHealth}`)
}

//pikachu counters with his own move: thunderwave!
// however. pikachu got dirt in his eye, only 50/50 chance

let coinflip
 
if (Math.random() < 0.5) {
    coinflip = false
} else {
    coinflip = true
} 

if (coinflip) {
    console.log ("Psyduch is now paralyzed")
} else {
    console.log("Pikachu has missed")
}

console.log("Psyduck is angry and uses fury swipes!")

let furySwipeCount = Math.floor(Math.random() * 4) + 2
let furySwipeDamage = 10

for (let i = 0; i<furySwipeCount;i++) {
    console.log("swipe")
    if (pikachuHealth <= furySwipeDamage) {
        console.log("Pikachu fainted")
        break;
    } else {
        pikachuHealth = pikachuHealth - psyduckAttach
        console.log("Pikachu takes a hit and has lower health" + pikachuHealth)
        //console.log(`Pikachu took a hit! His HP is now ${pikachuHealth}`)
    }
    
}

if(pikachuHealth > 0) {
    console.log("Pikachu survived")
    console.log("pikachu decided to run")
}

console.log("Pikachu lost the battle ")