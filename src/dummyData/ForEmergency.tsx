export type EmergencyTypes = "Emergency" | "Medical" | "Other";

const forEmergencies: { [key in EmergencyTypes]: { title: string; data: { id: number; name: string; avatar: any; time: string; message: string; address: string }[] }[] } = {
    Emergency: [
        {
            title: "Emergency Services Near You",
            data: [
                {
                    id: 1,
                    name: "Local Fire Department",
                    time: "1 km Away",
                    message: "Contact : 911",
                    address: "123 Main St, Your City",
                    avatar: require('../../src/assests/images/doctor.png'),
                },
                {
                    id: 2,
                    name: "City Police Station",
                    time: "2 kms Away",
                    message: "Contact : 911",
                    address: "456 Elm St, Your City",
                    avatar: require('../../src/assests/images/doctor.png'),
                },
            ],
        },
    ],
    Medical: [
        {
            title: "Medical Services Near You",
            data: [
                {
                    id: 1,
                    name: "City Hospital",
                    time: "3 kms Away",
                    message: "Contact : 233:789450",
                    address: "789 Oak St, Your City",
                    avatar: require('../../src/assests/images/doctor.png'),
                },
                {
                    id: 2,
                    name: "Town Clinic",
                    time: "5 kms Away",
                    message: "Contact : 233:789450",
                    address: "101 Pine St, Your City",
                    avatar: require('../../src/assests/images/doctor.png'),
                },
            ],
        },
    ],
    Other: [
        {
            title: "Other Emergency Services Near You",
            data: [
                {
                    id: 1,
                    name: "Emergency Shelter",
                    time: "4 kms Away",
                    message: "Contact : 233:789450",
                    address: "202 Maple St, Your City",
                    avatar: require('../../src/assests/images/doctor.png'),
                },
                {
                    id: 2,
                    name: "Disaster Relief Center",
                    time: "6 kms Away",
                    message: "Contact : 233:789450",
                    address: "303 Birch St, Your City",
                    avatar: require('../../src/assests/images/doctor.png'),
                },
            ],
        },
    ],
};

export default forEmergencies;
