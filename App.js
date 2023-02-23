import { StyleSheet, ImageBackground, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

// Making it Responsive
import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Importing Pages
import Desktop from './src/pages/desktop';
import Mobile from './src/pages/mobile';
import TaglineComponent from './src/components/TaglineComponent';


export default function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1080px)'
  })
  return (
    // Paper Provider is for the React Native Paper to be properly initialized.
    <PaperProvider>
      <ImageBackground source={require('./assets/bckgrnd.png')} style={styles.background}>
            <View style={styles.container}>
              {/* Tagline Component is seperated for the sole purpose of making components */}
              <TaglineComponent/>
              {/* This is the prompt for changing layout (Desktop: Card-like layout || Mobile: Footer-Layout) */}
              {isDesktopOrLaptop ? <Desktop/> : <Mobile/>}
            </View>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    zIndex: -1,
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    resizeMethod: 'resize',
  },
})

