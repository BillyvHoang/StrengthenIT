import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function DateButton({ children }) {
  function presshandler() {
    console.log("Pressed!");
  }

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer
      }
      onPress={presshandler}
    >
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

  buttonInnerContainer1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    padding: 12,
    backgroundColor: "#1F1E1E",
  },

  buttonInnerContainer: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    padding: 12,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "#1F1E1E",
  },
});
