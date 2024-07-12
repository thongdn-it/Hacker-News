import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HNParamList = {
  ListStories: undefined;
  DetailStory: { id: string };
};

export type MBAppStackScreenProps<T extends keyof HNParamList> =
  NativeStackScreenProps<HNParamList, T>;

export type HNListStoriesScreenProps = MBAppStackScreenProps<'ListStories'>;
export type HNDetailStoryScreenProps = MBAppStackScreenProps<'DetailStory'>;
