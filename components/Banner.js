import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const Banner = () => {
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://shared-comic.pstatic.net/thumb/webtoon/747269/thumbnail/thumbnail_IMAG04_c0c91fa7-3417-4cc9-bdf6-633bb629f559.jpg',
          }}
          style={{width: '100%', height: 200}}></Image>
      </View>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://shared-comic.pstatic.net/thumb/webtoon/769209/thumbnail/thumbnail_IMAG04_223b32d1-824e-4ff7-a6af-d956dce07425.jpg',
          }}
          style={{width: '100%', height: 200}}></Image>
      </View>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://shared-comic.pstatic.net/thumb/webtoon/783053/thumbnail/thumbnail_IMAG04_77f75c21-cdcc-4d23-bc00-1ff829d0a209.jpg',
          }}
          style={{width: '100%', height: 200}}></Image>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {height: 200},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Banner;
