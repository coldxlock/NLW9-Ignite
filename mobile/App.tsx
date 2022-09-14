import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter"

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  
  return (
    <Background >
      <StatusBar 
        barStyle="light-content" //deixa o conteúdo do status do celular (hora,bateria) como branco
        backgroundColor="transparent" //deixar fundo transparent
        translucent //colocar translucido pq backgroundColor deixa ele branco
      />
      { fontsLoaded ? <Home /> :  <Loading/> }

    </Background>
  );
}


