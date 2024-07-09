import { FlatList, ScrollView, Text, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import HomeScreeenGroupsComponent from "../../reuseableComponent/HomeScreenGroupsComponent";
import HomeDirectMessageComponent from "../../reuseableComponent/HomeDirectMessageComponent";

function Home() {

const userData = [
  {
    name: "Piyush",
    time: "Today 11:21 AM",
    message: "Have you ever booked any service with them. What will be your feedback?",
    avatar: require('../../../src/assests/images/userIcon3.png'), 
  },
  {
    name: "Rahul",
    time: "Today 11:31 AM",
    message: "Hi, I have forwarded my CV. Can you please forward to your HR",
    avatar: require('../../../src/assests/images/userIcon2.png'), 
  },
];
  const data = [
    {
      groupName: "Service Group",
      time: "Today 9:20 AM",
      message: "We're excited to announce our Cloth Donation Drive! If you have gently used clothes that you no longer need...",
      icon: require('../../../src/assests/images/Service.png'),
    },
    {
      groupName: "Fun Group",
      time: "Today 10:21 AM",
      message: "How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It's HTML5",
      icon: require('../../../src/assests/images/funGroup.png'),

    },
    {
      groupName: "Aparna Home Chefs",
      time: "Today 10:21 AM",
      message: "We are making Mater paneer, roti, plain Paratha today dinner please confirm 2 pm 500ml Mater...",
      icon: require('../../../src/assests/images/Cheif.png'),

    },
    {
      groupName: "iLaqa Yoga",
      time: "Today 10:21 AM",
      message: "Recharge your mind, body, and soul at our exclusive Bali Yoga Retreat. Nestled in the heart of nature...",
      icon: require('../../../src/assests/images/YogaGroup.png'),
    },
  ];
  return (
    <ScrollView style={{ flex: 1 }} nestedScrollEnabled={true}>
      <CustomSearchbar />
      <Text style={{ marginStart: 16, marginTop: 10, fontSize: 18, fontWeight: '600', color: '#1D71D4' }}>
        My Activity
      </Text>
      <FlatList
        data={data}
        renderItem={HomeScreeenGroupsComponent}
        keyExtractor={(_item, index) => index.toString()}
        contentContainerStyle={{ padding: 5 }} />
      <View style={{
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: 2,
      }} />
      <Text style={{ marginStart: 17, marginTop: 10, fontSize: 18, fontWeight: '600', color: '#1D71D4' }}>
        Direct Messages
      </Text>
      <FlatList
        data={userData}
        renderItem={({ item }) => <HomeDirectMessageComponent item={item} />}
        keyExtractor={(_item, index) => index.toString()}
        contentContainerStyle={{ padding: 5 }}
      />
    </ScrollView>

  )
}
export default Home;