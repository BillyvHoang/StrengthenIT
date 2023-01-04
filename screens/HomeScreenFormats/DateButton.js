import { View, Text, Pressable } from "react-native";

function DateButton({ children }) {
  function presshandler() {
    console.log("1D Pressed!");
  }

  return (
    <Pressable onPress={presshandler}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default DateButton;
