import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
function Logo() {
  return (
    <>
      <Image
        className="w-[175px] h-[139px]"
        source={require("../assets/Logos.png")}
      />
      <Text className="text-[40px] text-[#53E88B] tracking-wider">
        FoodNinja
      </Text>
      <Text className="tracking-widest text-[13px] font-semibold text-[#09051C]">
        Deliever Favorite Food
      </Text>
    </>
  );
}

export default Logo;
