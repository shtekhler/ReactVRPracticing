import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

import VideoPlayer from "./VideoPlayer";

export default class WelcomeToVR extends React.Component {
  render() {
    console.log(this.state);
    return (
      <View>
        <VideoPlayer
          style={{
            transform: [{ translate: [0, 0, -8] }]
          }}
        />
        <Text
          style={{
            backgroundColor: "#777879",
            fontSize: 0.8,
            fontWeight: "400",
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translate: [0, 0, -3] }]
          }}
        >
          Jeff Goldblum
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("WelcomeToVR", () => WelcomeToVR);
