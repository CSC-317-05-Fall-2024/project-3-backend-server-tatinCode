/*

    the array for restaurantData and holds the restaurants for the
    ejs file.

*/
let restaurantData = [
    {
        "id": 0,
        "name": "Lorem Restaurant 0",
        "phone": "(567)-364-786",
        "address": "0000 Lorem wy, Ipsum, LM",
        "photo": "images/restLorem0.jpg",
    },
    {
        "id": 1,
        "name": "Lorem Restaurant 1",
        "phone": "(567)-364-786",  
        "address": "0001 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem1.jpg",
    },
    {
        "id": 2,
        "name": "Lorem Restaurant 2",
        "phone": "(567)-364-786",
        "address": "0010 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem2.jpg",
    },
    {
        "id": 3,
        "name": "Lorem Restaurant 3",
        "phone": "(567)-364-786",
        "address": "0011 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem3.jpg",
    },
    {
        "id": 4,
        "name": "Lorem Restaurant 4",
        "phone": "(567)-364-786",
        "address": "0100 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem4.jpg",
    },
    {
        "id": 5,
        "name": "Lorem Restaurant 5",
        "phone": "(567)-364-786",
        "address": "0101 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem5.jpg",
    },
    {
        "id": 6,
        "name": "Lorem Restaurant 6",
        "phone": "(567)-364-786",
        "address": "0110 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem6.jpg",
    },
    {
        "id": 7,
        "name": "Lorem Restaurant 7",
        "phone": "(567)-364-786",
        "address": "0111 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem7.jpg",
    },
    {
        "id": 8,
        "name": "Lorem Restaurant 8",
        "phone": "(567)-364-786",
        "address": "1001 Lorem wy, Ipsum, LM",
        "photo": "/images/restLorem8.jpg",
    }
];

/*

    the variable for the lastID of the restaurantData array.
    Used by the function getNextID().

*/
let lastID = restaurantData.length - 1;

function getNextID() {
    return ++lastID;
}

/*

    the function for the restaurantData array

*/
function getRestaurants() {
    return restaurantData;
}

/*

    the function to search the restaurantData array for a specific
    restaurant by id.

*/
function getRestaurant(id){
    return restaurantData.find(restaurant => restaurant.id === id);
}

/*

    the function to add a restarant and iterates the data into the 
    restaurantData array.

*/
function createRestaurant(newRestaurant){ 
    const id = getNextID();
    const restaurant = { id, ...newRestaurant };
    restaurantData.push(restaurant);
    return restaurant;
}

/*

    deleteRestaurant() deletes the restauarnt given by the id as parameter.    

*/
function deleteRestaurant(id){
    // restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    // return `Restaurant with id ${id} has been deleted`;
    const initialLength = restaurantData.length;
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);

    // Check if deletion was successful
    if (initialLength !== restaurantData.length) {
        return `Restaurant with id ${id} has been deleted.`;
    } else {
        return `Restaurant with id ${id} not found.`;
    }
}

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };