import React from 'react'
import { MediaPlayerState, VideoControl, Video, View} from "react-vr";

class VideoPlayer extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
  };
}
render() {
  console.log(MediaPlayerState)
  
  return (
    <View>
    <Video style={{width: 10, height:10}} source={{uri: './20373715_674858059391912_2385181882783367168_n.mp4'}}
       playerState={this.state.playerState} />
     <VideoControl
       style={{height: 4, width: 4}}
       playerState={this.state.playerState} />
    </View>
  );
}
}

export default VideoPlayer