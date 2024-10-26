import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

/*
        
    the function for the restaurantData array
    
*/
router.get('/restaurants', (req, res) => {
    res.json(getRestaurants());
});

/*
        
    the function to search the restaurantData array for a specific
    restaurant by id.
        
*/
router.get('/restaurants/:id', (req, res) => {
    const restaurantID = parseInt(req.params.id);
    const restaurant = getRestaurant(restaurantID);

    if(restaurant){
        res.render('restaurant-details', { restaurant });
    }
    else{
        res.status(404).send(`Restaurant ${restaurantID} not found`);
    }
});

/*

    the function to add a restarant and iterates the data into the 
    restaurantData array.

*/
router.post('/restaurants', express.json(), (req, res) => {
    const newRestaurant = req.body;
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
});

/* 
    
    the funciton to delete a restaurant by id.
    
*/
router.delete('/restaurants/:id', (req, res) => {
    const restaurantID = parseInt(req.params.id);
    const message = deleteRestaurant(restaurantID);
    res.status(200).send(message);

    if (isDeleted) {
        res.status(200).send(`Restaurant ${restaurantID} deleted successfully`);
    } else {
        res.status(404).send(`Restaurant ${restaurantID} not found`);
    }
});


export {router as backendRouter};