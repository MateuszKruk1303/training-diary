import { NativeBaseProvider } from 'native-base';

import Icons from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { screens } from './screens';

import { theme } from './config';

type MyThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends MyThemeType {}
}

const Shell = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {screens.map(({ title, component, Icon }) => (
            <Tab.Screen
              key={title}
              name={title}
              component={component}
              options={{
                tabBarIcon: (props) => <Icon {...props} />,
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Shell;
