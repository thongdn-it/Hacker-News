import { View } from 'react-native';

import { HNListStoriesScreenProps } from '../../../navigators';
import { useEffect } from 'react';
import { hnAPIClient } from '../../../network';

export const HNListStoriesScreen = ({}: HNListStoriesScreenProps) => {
  useEffect(() => {
    hnAPIClient.getListStories('topstories').then(e => {
      console.log(e);
    });
    return () => {};
  }, []);

  return <View></View>;
};
