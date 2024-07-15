import { FlatList, Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomSearchbar from "../../reuseableComponent/CustomSearchBar";
import ForvendorList from "../../dummyData/forVendorList";
import VendorListComponent from "../../reuseableComponent/VendorListComponent";

function VendorList() {
    return (

        <KeyboardAvoidingView style={{ backgroundColor: 'white', flex: 1 , }}>
          <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ backgroundColor: 'white' }}>
            <CustomSearchbar />
            <FlatList
              data={ForvendorList}
              scrollEnabled={false}
              renderItem={({item} ) => <VendorListComponent item={item} />}
              keyExtractor={(_item, index) => index.toString()}
              contentContainerStyle={{ padding: 5 }} />
            <TouchableOpacity style={{  marginStart: 23, marginBottom: 10 }}>
              <Text style={{ color: '#1D71D4', fontFamily: 'Karla', fontStyle: 'normal', fontWeight: '700', fontSize: 12 }}>
                More
                <Image source={require("../../../src/assests/images/rightArrow.png")} style={{ resizeMode: 'contain', width: 20, height: 13, tintColor: "#1D71D4" }} />
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity style={{
            backgroundColor: "#C7DDF6",
            height: 60,
            elevation: 3,
            width: 60,
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
                width: 36,
                height: 36
              }}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )
}
export default VendorList;