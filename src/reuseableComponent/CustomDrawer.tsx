import DropDownPicker from "react-native-dropdown-picker";

function CustomDrawer(props :{items:any , isOpen:any ,  selectedValue:any , setIsOpen:any , setSelectedValue:any,  placeHolder:any}) {
    const {items , isOpen ,selectedValue , setIsOpen , setSelectedValue  , placeHolder} = props
    console.log(items , isOpen ,selectedValue , setIsOpen , setSelectedValue)
    return (
    <DropDownPicker
        items={items}
        open={isOpen}
        value={selectedValue}
        setOpen={() => setIsOpen(!isOpen)}
        setValue={(val) => setSelectedValue(val)}
        placeholder={placeHolder}
        style={{
            alignItems: 'center',
            backgroundColor: "white",
            borderColor: "#1581FF",

        }}
        labelStyle={{
            color: "black",
            backgroundColor: "white"
        }}
        selectedItemLabelStyle={{
            color: "white"
        }}
        dropDownContainerStyle={{
            backgroundColor: "white",
            borderColor: "#1581FF",
        }}
        textStyle={{ color: "black" }}
        autoScroll
        placeholderStyle={{ color: "#5E5C5C", fontWeight: '300', fontSize: 14 }}

    />)
}
export default CustomDrawer;
