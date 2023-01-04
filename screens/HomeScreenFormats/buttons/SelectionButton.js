import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function SelectButton({ children }) {
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

export default SelectButton;

export const styles = StyleSheet.create({
  Textsize: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
