import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CampaignDetails from './screens/CampaignDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Campanhas de Saúde' }} />
        <Stack.Screen name="Details" component={CampaignDetails} options={{ title: 'Detalhes da Campanha' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
