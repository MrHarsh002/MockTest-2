import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen"
import LibraryScreen from "../screen/LibraryScreen"
import PlaylistScreen from "../screen/PlaylistScreen"
import ProfileScreen from "../screen/ProfileScreen"
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, }) => (
            <View>
              <Feather
                name="home"
                size={28}
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, }) => (
            <View>
              <Feather
                name="book"
                size={28}
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tab.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, }) => (
            <View>
             <FontAwesome name="microphone" size={24} color={color} />
            </View>
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, }) => (
            <View>
              <Feather
                name="user"
                size={28}
                color={color}
              />
            </View>
          ),
          tabBarShowLabel: true,
        }}
      />
    </Tab.Navigator>
  );
}
