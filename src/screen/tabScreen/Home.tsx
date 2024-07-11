import { FlatList, Image, KeyboardAvoidingView, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import HomeScreeenGroupsComponent from "../../reuseableComponent/HomeScreenGroupsComponent";
import HomeDirectMessageComponent from "../../reuseableComponent/HomeDirectMessageComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

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

    }
  ];
  return (

    <KeyboardAvoidingView style={{ backgroundColor: 'white', flex: 1 , }}>
      <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ backgroundColor: 'white' }}>
        <CustomSearchbar />
        <Text style={{ marginStart: 16, fontSize: 16, fontWeight: '700', color: '#1D71D4', fontFamily: 'Karla' }}>
          My Activity
        </Text>
        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={HomeScreeenGroupsComponent}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{ padding: 5 }} />
        <TouchableOpacity style={{ marginTop: -15, marginStart: 23, marginBottom: 10 }}>
          <Text style={{ color: '#1D71D4', fontFamily: 'Karla', fontStyle: 'normal', fontWeight: '700', fontSize: 12 }}>
            More
            <Image source={require("../../../src/assests/images/rightArrow.png")} style={{ resizeMode: 'contain', width: 20, height: 13, tintColor: "#1D71D4" }} />
          </Text>
        </TouchableOpacity>
        <View style={{
          backgroundColor: '#D9D9D9',
          width: '100%',
          height: 1,
        }} />
        <Text style={{ marginStart: 17, marginTop: 10, fontSize: 16, fontWeight: '700', color: '#1D71D4', fontFamily: 'Karla' }}>
          Direct Messages
        </Text>
        <FlatList
          scrollEnabled={false}
          data={userData}
          renderItem={({ item }) => <HomeDirectMessageComponent item={item} />}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{ paddingLeft: 5 , paddingRight:5 , paddingTop:5  }} />
        <TouchableOpacity style={{ marginTop: -10, marginStart: 23  , paddingBottom:60}}>
          <Text style={{ color: '#1D71D4', fontFamily: 'Karla', fontStyle: 'normal', fontWeight: '700', fontSize: 12 }}>
            More
            <Image source={require("../../../src/assests/images/rightArrow.png")} style={{ resizeMode: 'contain', width: 20, height: 13, tintColor: "#1D71D4" }} />
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={{
        backgroundColor: "#C7DDF6",
        height: 50,
        elevation: 3,
        width: 50,
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        bottom: 65,
        right: 18,
      }}>
        <Image
          source={{ uri: "https://s3-alpha-sig.figma.com/img/40a9/bf81/27d9149abec6356a4f0a39d6b18071f5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kyOWP5WoKCP2lTtpDpGxMwVDLaQRh~hlk57p5cjwG5fvniSfw5Y6nO2z31I-Wg-YI-m2biN0AIkOrpO0xv6kF4geAVpaqtOYVrUsMtDanfJN7G4K7D~4bTcaqfRREalZv-XMQFn1Yq5K9197ej16cvkxCJc-8saxn3Vp0ViAXl~vJn84le6iPsUCS-G7A8240Oq59e3K7KAzWMoDyt1W1cZWI7Lcvbqcv9OC5dQbqnCIJxc2uIvJDIa9CwzrAtJ4tTbxkV0Q2nM4ykiMwqG4V~CdxWdHBAX5jB~VJMN2nazyenSlsvMCYyadEdzsgtthvNXKAgM2swRUdgn4g06XBQ__" }}
          style={{
            margin: 7,
            width: 30,
            height: 30
          }}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
export default Home;