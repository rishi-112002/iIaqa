import { Text } from "react-native";

export default function TextComponentUserScreen(props: { text: string }) {
    const { text } = props;
    return (
        <Text style={{ color: '#4A90E2', fontSize: 14, fontWeight: '600' }}>
           {text}
        </Text>
    )
}