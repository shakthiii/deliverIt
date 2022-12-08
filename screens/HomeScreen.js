import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  //to hide the header part
  const navigation = useNavigation();

  //to hide the header part
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-600">
        {/* Header */}
        <View className="flex-row pb-3 items-center space-x-2 mx-4">
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" className="" />
        </View>
        {/* Search box */}
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
