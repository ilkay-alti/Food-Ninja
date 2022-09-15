import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import classNames from "classnames";
import Logo from "../components/Logo";

const RegisterScreen = ({ navigation }) => {
  const isAndroid = Platform.OS === "android";
  return (
    <SafeAreaView
      className={classNames("flex-1  flex items-center justify-center px-6", {
        "pt-8": isAndroid,
      })}
    >
      <Logo />
      <>
        <Text className="mt-[60px] mb-[40px] text-[20px] font-extrabold">
          Login To Your Account
        </Text>

        <TextInput
          placeholder="Email"
          className="border-[1px] border-[#F4F4F4] text-[#3B3B3B] h-14 px-7 w-full rounded-2xl "
        />
        <TextInput
          placeholder="Password"
          className="border-[1px] border-[#F4F4F4] text-[#3B3B3B] h-14 px-7 my-3 w-full rounded-2xl "
        />
        <Text className="text-[#09051C] text-[12px] font-extrabold">
          Or Continue With
        </Text>
        <View className="my-5 flex-row space-x-[21px]">
          <TouchableOpacity className="bg-[#F4F4F4] h-14 w-[152px] flex-row space-x-[12px] justify-center items-center rounded ">
            <Image source={require("../assets/facebook.png")} />
            <Text className="text-sm text-[#09051C] font-semibold ">
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#F4F4F4] h-14 w-[152px] flex-row space-x-[12px] justify-center items-center rounded ">
            <Image source={require("../assets/google.png")} />
            <Text className="text-sm text-[#09051C] font-semibold ">
              Google
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
        >
          <Text className="text-[#53E88B] text-xs  font-bold underline underline-offset-8 decoration-solid">
            Forgot Your Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-9 bg-[#53E88B] w-36 h-14 justify-center items-center rounded-2xl">
          <Text className="text-white text-base font-bold">Login</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
};

export default RegisterScreen;
