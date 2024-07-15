import ChatScreen from "../screen/tabScreen/ChatScreen";
 export type messageType = "All" | "Unread" | "Neighborhood"
const chatData: { [key in messageType]: { id: number; name: string; avatar: any; time: any; message: any }[] } = {
    All: [
        {
            name: "Your iLaqa Agent",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../src/assests/images/dummyAssets/communitymanager.png'),
            id: 1
        },
        {
            name: "Piyush",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../src/assests/images/userIcon3.png'),
            id: 2
        },
        {
            name: "Rahul",
            time: "Today 11:31 AM",
            message: "Hi, I have forwarded my CV. Can you please forward to your HR",
            avatar: require('../../src/assests/images/userIcon2.png'),
            id: 3
        }],
    Unread: [
        {
            name: "Your iLaqa Agent",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../src/assests/images/dummyAssets/communitymanager.png'),
            id: 1
        },
        {
            name: "Rajesh",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../src/assests/images/userIcon3.png'),
            id: 2
        },
        {
            name: "umar",
            time: "Today 11:31 AM",
            message: "Hi, I have forwarded my CV. Can you please forward to your HR",
            avatar: require('../../src/assests/images/userIcon2.png'),
            id: 3
        }],
    Neighborhood: [
        {
            name: "Your iLaqa Agent",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../src/assests/images/dummyAssets/communitymanager.png'),
            id: 1
        },
        {
            name: "raju",
            time: "Today 11:21 AM",
            message: "Have you ever booked any service with them. What will be your feedback?",
            avatar: require('../../src/assests/images/userIcon3.png'),
            id: 2
        },
        {
            name: "gajodhar",
            time: "Today 11:31 AM",
            message: "Hi, I have forwarded my CV. Can you please forward to your HR",
            avatar: require('../../src/assests/images/userIcon2.png'),
            id: 3
        }],

};

export default chatData;