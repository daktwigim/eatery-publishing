import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

/* ---------- Screens ---------- */
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Add from '../pages/Add';
import Feeds from '../pages/Feeds';
import FindId from '../pages/FindId';
import FindPassword from '../pages/FindPassword';

const screens = [
  { name: 'Signin', component: Signin },
  { name: 'Signup', component: Signup },
  { name: 'Home', component: Home },
  { name: 'Add', component: Add },
  { name: 'Feeds', component: Feeds },
  { name: 'FindId', component: FindId },
  { name: 'FindPassword', component: FindPassword },
];
const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {screens.map((screen) => (
          <Drawer.Screen name={screen.name} component={screen.component} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
