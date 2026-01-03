const prisma = require('../db')

async function getCarsData() {
    try {
        const carsData = await prisma.cars.findMany();
        return carsData;
    } catch (error) {
        console.error(error);
    }
}
async function getLocationsData() {
    try {
        const locationsData = await prisma.location.findMany();
        return locationsData;
    } catch (error) {
        console.error(error);
    }
}
module.exports = { getCarsData , getLocationsData };
