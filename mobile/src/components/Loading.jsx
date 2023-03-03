import { ActivityIndicator, View } from "react-native";

export default function Loading() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#191920' 
    }}>
      <ActivityIndicator color="#fff"/> 
    </View>
  );
}