import { Pressable, Text, TouchableHighlightBase } from 'react-native';

type Props = {
  onPress?: () => void;
  title: string;
};

export const SmallButton: React.FC<Props> = ({ onPress, title }) => {
  return (
    <Pressable
      style={{
        borderColor: '#2e2e2e',
        borderWidth: 1,
        padding: 10,
        width: 150,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#151515',
      }}
      onPress={onPress}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  );
};
