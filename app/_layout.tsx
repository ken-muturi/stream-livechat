import React from "react";
import {Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import CustomHeader from "@/components/CustomHeader";

const IntialLayout = () => {
  return (
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarBackground: () => (
          <BlurView
            intensity={100}
            tint={'extraLight'}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.05)',
            }}
          />
        ),
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
      >
          <Tabs.Screen 
            name="index" 
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            }} />
                  <Tabs.Screen
        name="books"
        options={{
          title: 'books',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
          header: () => <CustomHeader />,
          headerTransparent: true,
        }}
      />
        </Tabs>);
}

const RootLayout = () => {
  return (  <GestureHandlerRootView style={{flex:1}}>
    <IntialLayout />
    </GestureHandlerRootView>
  );
}
export default RootLayout;
