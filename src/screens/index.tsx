import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Screen, IconProps } from '../models';

import { Home } from './Home';
import { Test } from './Test';

export const screens: Screen[] = [
  {
    title: 'Home',
    component: Home,
    Icon: (props: IconProps) => <AntDesign name="barschart" {...props} />,
  },
  {
    title: 'Test',
    component: Test,
    Icon: (props: IconProps) => (
      <Ionicons name="ios-barbell-outline" {...props} />
    ),
  },
];
