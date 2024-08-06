import React from 'react';
import {  StyleSheet, KeyboardAvoidingView, Platform, Button, View} from 'react-native';
// import { ResizeMode, Video } from 'expo-av';
import { VLCPlayer } from 'react-native-vlc-media-player';

const calcVLCPlayerHeight = (windowWidth: number, aspetRatio: number) => {
  return windowWidth * aspetRatio;
  };

const Page = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  // url='https://together-cleanly-jaybird.ngrok-free.app/084da04b-ba9a-47d8-96f1-d61ce45c9028.html'

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <VLCPlayer
      
        style={styles.video}
        // videoAspectRatio="16:9"
        autoAspectRatio={true}
        resizeMode="cover"
        // autoReloadLive={true}
        // autoplay={true}
        source={{ 
          uri: "https://together-cleanly-jaybird.ngrok-free.app/084da04b-ba9a-47d8-96f1-d61ce45c9028.html",
          // initOptions: [
          //   '--no-audio',
          //   '--rtsp-tcp',
          //   '--network-caching=150',
          //   '--rtsp-caching=150',
          //   '--no-stats',
          //   '--tcp-caching=150',
          //   '--realrtsp-caching=150',
          // ],
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40
  },
})
export default Page