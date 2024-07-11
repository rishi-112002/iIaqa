 export type Shoptypes = "GroceryStores" | "Pharmacy" | "Stationary" | "Other";

const forNearShops: { [key in Shoptypes]: { title: string; data: { id: number; name: string; avatar: any; time: string; message: string }[] }[] } = {
    GroceryStores: [
        {
            title: "Supermarkets Near You",
            data: [
                {
                    id: 1,
                    name: "D - Mart Ready",
                    time: "1 km Away",
                    message: "Contact : 033:789450",
                    avatar: require('../../src/assests/images/shops.png'),
                },
                {
                    id: 2,
                    name: "Star Bazar",
                    time: "4 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
        {
            title: "Kirana Stores Near You",
            data: [
                {
                    id: 3,
                    name: "Sundaram Kirana",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 4,
                    name: "Sundaram Kirana",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 5,
                    name: "Sundaram Kirana",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 6,
                    name: "Sundaram Kirana",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
    ],
    Pharmacy: [
        {
            title: "Pharmacies Near You",
            data: [
                {
                    id: 1,
                    name: "Apollo Pharmacy",
                    time: "1 km Away",
                    message: "Contact : 033:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 2,
                    name: "MedPlus",
                    time: "2 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
    ],
    Stationary: [
        {
            title: "Stationary Shops Near You",
            data: [
                {
                    id: 1,
                    name: "Paper World",
                    time: "1 km Away",
                    message: "Contact : 033:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 2,
                    name: "Office Supplies",
                    time: "2 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
    ],
    Other: [
        {
            title: "Police Stations Near You",
            data: [
                {
                    id: 1,
                    name: "Police Station",
                    time: "2 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 2,
                    name: "Police Station",
                    time: "4 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 3,
                    name: "Police Station",
                    time: "6 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
        {
            title: "Hospitals Near You",
            data: [
                {
                    id: 4,
                    name: "Apollo Hospital",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 5,
                    name: "Apollo Hospital",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
                {
                    id: 6,
                    name: "Apollo Hospital",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
        {
            title: "Fire Services Near You",
            data: [
                {
                    id: 7,
                    name: "Fire Service",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    avatar: require('../../src/assests/images/shops.png'),

                },
            ],
        },
    ],
};

export default forNearShops;
