import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 100,
          otherParam: 'hi there'
        })}
      />
      <Button
        title="See Data"
        onPress={
          () => navigation.push('Data', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {

  const { itemId, otherParam } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Home"
        onPress = {
          () => navigation.navigate('Home', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to top of navigation stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="See Data"
        onPress = {
          () => navigation.push('Data', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
}

function DataScreen({ navigation, route }) { // navigation is a prop here that needs to be passed down
  const { itemId, otherParam } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Data goes here</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
        <Stack.Screen
          name="Data"
          component={DataScreen}
          options={{ title: 'Data??' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;