const express = require("express");
const router = express.Router();
const { getCarsData , getLocationsData } = require("../services/userServices");

router.get("/cars", async (req, res) => {
    try{
        const carsData = await getCarsData();
        res.status(200).json(carsData);
    }catch(error){
        console.error(error);
        res.status(500).json({error: error.message});
    }
});

router.get("/location", async (req, res) => {
    try{
        const locationData = await getLocationsData();
        res.status(200).json(locationData);
    }catch(error){
        console.error(error);
        res.status(500).json({error: error.message});
    }
});
module.exports = router;