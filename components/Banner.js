import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const Banner = () => {
  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://ssl.pstatic.net/static/comic/images/bnr_careers.jpg',
          }}
          style={{width: '100%', height: 200}}></Image>
      </View>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://shared-comic.pstatic.net/thumb/webtoon/743139/thumbnail/thumbnail_IMAG04_f38c8596-b339-4d83-8be2-aec716336c73.jpg',
          }}
          style={{width: '100%', height: 200}}></Image>
      </View>
      <View style={styles.slide}>
        <Image
          source={{
            uri: 'https://naverwebtoon-phinf.pstatic.net/20220527_238/16536398740631Qhjo_JPEG/upload_7531656900592402652.JPEG?type=p100',
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
