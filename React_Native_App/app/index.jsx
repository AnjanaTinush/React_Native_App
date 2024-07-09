import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants"; // Ensure the images object exists in this path
import CustomButton from "../components/CustomButton"; // Ensure the CustomButton component exists and is exported correctly

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
        }}
      >
        <View className="w-full justify-center items-center min-h-[75vh] px-2">
          <Image
            source={images.logo}
            style={{ width: 130, height: 84, marginTop: 20 }} // Added marginTop to push the content down a bit
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={{ maxWidth: 380, width: "100%", height: 298, marginTop: 20 }}
            resizeMode="contain"
          />

          <View style={{ position: "relative", marginTop: 20 }}>
            <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold", textAlign: "center" }}>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text style={{ color: "#FFD700" }}>Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={{ width: 136, height: 15, position: "absolute", bottom: -8, right: -32 }}
              resizeMode="contain"
            />
          </View>

          <Text style={{ fontSize: 14, fontFamily: "Roboto-Regular", color: "#D3D3D3", marginTop: 28, textAlign: "center" }}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-10 h-12"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
