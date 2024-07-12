import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HNParamList } from './props';
import {
  HNListStoriesScreen,
  HNDetailStoryScreen,
} from '../features/stories/screens';

const Stack = createNativeStackNavigator<HNParamList>();

const HNAppNavigatior = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListStories" component={HNListStoriesScreen} />
        <Stack.Screen name="DetailStory" component={HNDetailStoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HNAppNavigatior;
