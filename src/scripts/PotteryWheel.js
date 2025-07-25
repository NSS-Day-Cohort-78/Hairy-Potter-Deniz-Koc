let potteryId = 1;
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape, weight, height,
        id: potteryId
    }

    potteryId++
    return pottery

}