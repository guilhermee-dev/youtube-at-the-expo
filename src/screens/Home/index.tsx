import React, { useState } from "react";
import { View, ActivityIndicator, useWindowDimensions } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { styles, videoHeight, screenSpace } from "./styles";

export function Home() {
  const [videoReady, setVideoReady] = useState(false);

  const { width } = useWindowDimensions();
  const videoWidth = width - (screenSpace * 2);

  return (
    <View style={styles.container}>
      <View style={styles.containerPlayer}>
        <YoutubeIframe
          videoId="ELmOfJa43pc"
          width={videoWidth}
          height={videoReady ? videoHeight : 0}
          onReady={() => setVideoReady(true)}
        />

        {!videoReady && <ActivityIndicator color="white" />}
      </View>
    </View>
  );
}
