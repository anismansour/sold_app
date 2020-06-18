import { Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.textColor,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
