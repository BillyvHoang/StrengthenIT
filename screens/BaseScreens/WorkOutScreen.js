import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
function WorkOutScreen() {
  return <View style={styles.container}></View>;
}

export default WorkOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.MainColor,
  },
});
