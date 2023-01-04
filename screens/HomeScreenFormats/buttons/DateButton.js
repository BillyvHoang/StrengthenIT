import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function DateButton({ children }) {
  function presshandler() {
    console.log("Pressed!");
  }

  return (
    <Pressable onPress={presshandler}>
      <View>
        <Text style={styles.Textsize}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default DateButton;

export const styles = StyleSheet.create({
  Textsize: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
