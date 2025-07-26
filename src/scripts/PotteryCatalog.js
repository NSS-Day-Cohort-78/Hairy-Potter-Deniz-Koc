let shelf = [];

export const toSellOrNotToSell = (potteryObject) => {
    
    if (potteryObject.weight >= 6 && potteryObject.cracked === false) {
        potteryObject.price = 40
        shelf.push(potteryObject)
    }
    if (potteryObject.weight < 6 && potteryObject.cracked === false) {
        potteryObject.price = 20
        shelf.push(potteryObject)
    }
    return potteryObject
    
}

export const usePottery = () => {
    structuredClone(shelf)
}