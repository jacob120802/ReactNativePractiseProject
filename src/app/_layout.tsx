import { Stack, Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Profile from "./Profile";
import Home from "./Home";
const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        {/* Drawer with primary routes */}
        <Drawer.Screen name="Index" options={{ headerTitle: "Home Page" }} />
        <Drawer.Screen name="User/[id]" options={{ headerTitle: "User Page" }} />
        <Drawer.Screen name="Home" options={{ headerTitle: "Route Page" }} />
        <Drawer.Screen
          name="Message"
          options={{
            drawerLabel: "Tab Navigation",
            title: "Tab Navigation",
          }}
        />
        <Drawer.Screen name="DrawerProfile" options={{ headerTitle: "My Profile" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

// Tab layout as a separate component
const TabsLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen name="Index" options={{ headerTitle: "Tab Home" }} />
        {/* <Tabs.Screen name="User/[id]" options={{ headerTitle: "Tab User Page" }} /> */}
        <Tabs.Screen name="Home" options={{ headerShown: false }} />
        <Tabs.Screen name="Message" options={{ headerTitle: "Message In-Box" }} />
        <Tabs.Screen name="Profile" options={{ headerTitle: "My Profile Page" }} />
      </Tabs>
    </GestureHandlerRootView>
  );
};

//Stack layout as a separate component
const StackLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="Index" options={{ headerTitle: "Stack Home Page", headerStyle: { backgroundColor: "pink" } }} />
        <Stack.Screen name="User/[id]" options={{ headerTitle: "Stack User Page" }} />
        <Stack.Screen name="Home" options={{ headerTitle: "Stack Route Page" }} />
        <Stack.Screen name="Message" options={{ headerTitle: "Stack Message Page" }} />
        <Stack.Screen name="StackProfile" options={{ headerTitle: "My Profile Page" }} />
      </Stack>
    </GestureHandlerRootView>
  );
};
export default TabsLayout;
