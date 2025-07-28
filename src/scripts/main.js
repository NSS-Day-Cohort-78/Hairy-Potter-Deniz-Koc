// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4)
let platter = makePottery("Platter", 5, 1)
let bowl = makePottery("Bowl", 3, 2)
let vase = makePottery("Vase", 4, 6)
let pitcher = makePottery("Pitcher", 6, 5)

// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2100)
platter = firePottery(platter, 2300)
bowl = firePottery(bowl, 2500)
vase = firePottery(vase, 2200)
pitcher = firePottery(pitcher, 2150)

// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
platter = toSellOrNotToSell(platter)
bowl = toSellOrNotToSell(bowl)
vase = toSellOrNotToSell(vase)
pitcher = toSellOrNotToSell(pitcher)

// Invoke the component function that renders the HTML list
const potteryHTML = PotteryList()
document.querySelector(".potteryList").innerHTML = potteryHTML


console.log(mug)
console.log(platter)
console.log(bowl)
console.log(vase)
console.log(pitcher)
