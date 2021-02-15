import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import ServicePage from '../screens/ServicePage';
import OrderListPage from "../screens/OrderListPage"
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Service') {
            iconName = focused
              ? 'accessibility-outline'
              : 'accessibility-outline';
          } else if (route.name === 'Order List') {
            iconName = focused ? 'ios-list-box' : 'ios-list-box';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Service" component={ServicePage} />
      <Tab.Screen name="Order List" component={OrderListPage} />
    </Tab.Navigator>
  )
}
