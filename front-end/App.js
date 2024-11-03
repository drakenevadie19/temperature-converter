import { Text, View, ImageBackground } from 'react-native';
import { s } from "./App.style"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from "./assets/hot.png"
import Input from './components/Input/Input';

export default function App() {
  return (
    <>
      {/* this will make the background cover all parts, including rabbit-ears of iphone and navigation tab */}
      <ImageBackground style={s.backgroundImage} source={hotBackground}> 
        <SafeAreaProvider>
          <SafeAreaView style={s.root}>
            <View style={s.workspace}>
              <Text>Temperature</Text>
              <Input defaultValue={0} />
              <Text>Button</Text>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}