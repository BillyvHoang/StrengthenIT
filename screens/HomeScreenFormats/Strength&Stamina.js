import { View } from "react-native";
import SelectButton from "./buttons/SelectionButton";
import { StrengthStaminaStyle } from "../../constants/HomeScreenFormatStyle.js/StrengthStaminaStyle";

function StrengthStamina() {
  return (
    <View style={StrengthStaminaStyle.homeContainer}>
      <View style={StrengthStaminaStyle.buttonContainer}>
        <SelectButton style={StrengthStaminaStyle.Button}>
          Strength
        </SelectButton>
        <SelectButton>Stamina</SelectButton>
      </View>
    </View>
  );
}

export default StrengthStamina;
