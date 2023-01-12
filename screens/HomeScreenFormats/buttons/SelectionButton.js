import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function SelectButton({ children }) {
  function presshandler() {
    console.log("Pressed!");
  }

  return (
    <Pressable onPress={presshandler}>
      <View style={styles.Button}>
        <Text style={styles.Textsize}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default SelectButton;

export const styles = StyleSheet.create({
  Textsize: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  Button: {
    width: 140,
    height: 35,
    backgroundColor: "#3A3839",
    borderRadius: 8,
  },
});
