import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FallRestartSeasonPic from './assets/images/FallRestartSeason.png';
import TropicalNightsPic from './assets/images/TropicalNights.png';
import ForzierePic from './assets/images/forziere.png';
import ForziereBigPic from './assets/images/forzierebig.png';
import GPPic from './assets/images/GP.png';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  return (
    <>
    <StatusBar
        barStyle='light-content'
        backgroundColor='#1E1E1E'
      />
      <ScrollView
        style={{flex: 1, backgroundColor: '#1E1E1E'}}
        contentContainerStyle={{paddingBottom: 60}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>FIFA22 / PS4</Text>
              <Image
                style={styles.imageRefresh}
                source={require('./assets/images/refresh.png')}></Image>
              <Ionicons
                style={{position: 'absolute', left: 128.8}}
                name="game-controller"
                size={8}
                color="#9a96a2"
              />
            </View>
          </View>
          <Image style={styles.imageFallSeason} source={FallRestartSeasonPic} />
          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={25} color="#ffffff" />
            <Text style={styles.notificationText}>Notifiche attive</Text>
          </View>
          <Image style={styles.imageTropical} source={TropicalNightsPic} />
          <LinearGradient
            style={styles.linearGradient}
            colors={['#33009a', '#7f56ff', '#ff4782']}
            start={{x: 0, y: 0}}
            end={{x: 1.4, y: 0}}>
            <Text style={styles.gradientText}>Gioca ora</Text>
          </LinearGradient>
          <LinearGradient
            colors={['rgba(236, 27, 227, 0.4)', 'rgba(236, 27, 227, 0.0)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.progressBarGradient}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.imageForziere} source={ForzierePic} />
              <View style={styles.line}>
                <View style={styles.greenLine}></View>
              </View>
              <View>
                <Image
                  style={styles.imageForziereBig}
                  source={ForziereBigPic}
                />
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.imageGP} source={GPPic} />
                  <Text style={[styles.forziereText, {fontSize: 14}]}>
                    1650/2000
                  </Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <View>
                <Image style={styles.imageForziere} source={ForzierePic} />
                <View style={{flexDirection: 'row', marginLeft: 20}}>
                  <Image style={styles.imageGP} source={GPPic} />
                  <Text style={[styles.forziereText, {fontSize: 12}]}>
                    3000
                  </Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
          </LinearGradient>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={styles.questionMarkContainer}>
              <LinearGradient
                style={styles.questionMarkGradient}
                start={{x: 0, y: 0.9}}
                end={{x: 0, y: 0}}
                colors={[
                  'rgba(214, 16, 170, 1)',
                  'rgba(56, 84, 58, 0.47)',
                  'rgba(0, 80, 65, 0.48)',
                ]}>
                <Image
                  style={styles.imageQuestionForziere}
                  source={require('./assets/images/question-forziere.png')}
                />
              </LinearGradient>
              <Text style={styles.lockedText}>LOCKED</Text>
            </View>
            <View style={styles.pointsContainer}>
              <LinearGradient
                style={styles.pointsGradient}
                start={{x: 0, y: 0.9}}
                end={{x: 0, y: 0}}
                colors={[
                  'rgba(214, 182, 16, 1)',
                  'rgba(56, 84, 58, 0.47)',
                  'rgba(0, 80, 65, 0.48)',
                ]}>
                <Image
                  style={styles.imageGPBig}
                  source={require('./assets/images/GPBig.png')}
                />
              </LinearGradient>
              <Text style={[styles.lockedText, {marginLeft: 25}]}>
                GOLDEN POINTS
              </Text>
            </View>
            <LinearGradient
              colors={['#7a0164', '#db0775', '#ff0a71', '#7a0164']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.buttonGradient}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Montserrat-Bold',
                  color: '#ffffff',
                }}>
                +30
              </Text>
            </LinearGradient>
          </View>
          <LinearGradient
            colors={['#612db8', '#ec1be3']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.dropsGradient}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <View style={styles.exclusiveContainer}>
                  <Text style={styles.exclusiveText}>Exclusive drops</Text>
                </View>
                <Text style={styles.vanSeasonText}>Vans season</Text>
                <View
                  style={{
                    marginTop: 35,
                    marginLeft: 15,
                    height: 4,
                    width: 24,
                    backgroundColor: '#b94fc6',
                  }}></View>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    color: '#e6e1e6',
                    marginTop: 10,
                    marginLeft: 15,
                  }}>
                  Lorem ipsum dolor sit amet
                </Text>
                <Pressable
                  style={{
                    marginTop: 10,
                    marginLeft: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    width: 126,
                    height: 32,
                    backgroundColor: '#b94fc6',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      fontSize: 14,
                      color: '#ffffff',
                    }}>
                    Vai allo shop
                  </Text>
                </Pressable>
              </View>
              <Image
                style={{width: 144, height: 173, marginLeft: 10}}
                source={require('./assets/images/Udinese.png')}
              />
            </View>
          </LinearGradient>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 20,
              fontFamily: 'Montserrat-Bold',
              fontSize: 28,
              color: '#ffffff',
            }}>
            Creators
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{width: 103.67, height: 168}}>
              <Image
                style={{width: 103.67, height: 144, marginLeft: 15}}
                source={require('./assets/images/Cosco.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  width: 45,
                  height: 18,
                  backgroundColor: '#d5182a',
                  borderRadius: 5,
                  left: 20,
                }}>
                <Octicons
                  style={{marginTop: 2, marginLeft: 3}}
                  name="dot-fill"
                  size={14}
                  color="#ffffff"
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#ffffff',
                    marginLeft: 4,
                  }}>
                  Live
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                }}>
                Coscu
              </Text>
            </View>
            <View style={{width: 103.67, height: 168, marginLeft: 25}}>
              <Image
                style={{width: 103.67, height: 144, marginLeft: 15}}
                source={require('./assets/images/Rubius.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  width: 45,
                  height: 18,
                  backgroundColor: '#d5182a',
                  borderRadius: 5,
                  left: 20,
                }}>
                <Octicons
                  style={{marginTop: 2, marginLeft: 3}}
                  name="dot-fill"
                  size={14}
                  color="#ffffff"
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#ffffff',
                    marginLeft: 4,
                  }}>
                  Live
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                }}>
                Robius
              </Text>
            </View>
            <View style={{width: 103.67, height: 168, marginLeft: 25}}>
              <Image
                style={{width: 103.67, height: 144, marginLeft: 15}}
                source={require('./assets/images/Slakandu.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  width: 45,
                  height: 18,
                  backgroundColor: '#d5182a',
                  borderRadius: 5,
                  left: 20,
                }}>
                <Octicons
                  style={{marginTop: 2, marginLeft: 3}}
                  name="dot-fill"
                  size={14}
                  color="#ffffff"
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#ffffff',
                    marginLeft: 4,
                  }}>
                  Live
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                }}>
                SLAKANDU
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{width: 103.67, height: 168}}>
              <Image
                style={{width: 103.67, height: 144, marginLeft: 15}}
                source={require('./assets/images/Slakandu.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  width: 62,
                  height: 18,
                  backgroundColor: '#312f37',
                  borderRadius: 5,
                  left: 20,
                }}>
                <Octicons
                  style={{marginTop: 2, marginLeft: 3}}
                  name="dot-fill"
                  size={14}
                  color="#605d66"
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#605d66',
                    marginLeft: 4,
                  }}>
                  Offline
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                }}>
                SLAKANDU
              </Text>
            </View>
            <View style={{width: 103.67, height: 168, marginLeft: 25}}>
              <Image
                style={{width: 103.67, height: 144, marginLeft: 15}}
                source={require('./assets/images/Cosco.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  width: 62,
                  height: 18,
                  backgroundColor: '#312f37',
                  borderRadius: 5,
                  left: 20,
                }}>
                <Octicons
                  style={{marginTop: 2, marginLeft: 3}}
                  name="dot-fill"
                  size={14}
                  color="#605d66"
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#605d66',
                    marginLeft: 4,
                  }}>
                  Offline
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                }}>
                Cosco
              </Text>
            </View>
            <View style={{width: 103.67, height: 168, marginLeft: 25}}>
              <Image
                style={{width: 103.67, height: 144, marginLeft: 15}}
                source={require('./assets/images/Rubius.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  width: 45,
                  height: 18,
                  backgroundColor: '#d5182a',
                  borderRadius: 5,
                  left: 20,
                }}>
                <Octicons
                  style={{marginTop: 2, marginLeft: 3}}
                  name="dot-fill"
                  size={14}
                  color="#ffffff"
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                    color: '#ffffff',
                    marginLeft: 4,
                  }}>
                  Live
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                  color: '#ffffff',
                }}>
                Rubius
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
                color: '#b29dff',
                marginRight: 10,
                marginTop: 30,
              }}>
              Discover more
            </Text>
            <Ionicons
              style={{marginTop: 31}}
              name="chevron-forward"
              size={16}
              color="#b29dff"
            />
          </View>
          <View style={{flexDirection:'row'}}>
            <View
              style={{
                width: 170,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                backgroundColor: '#7f56ff',
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 5,
              }}>
              <Ionicons
                style={{marginRight: 10}}
                name="reader-outline"
                size={25}
                color="#ffffff"
              />
              <Text
                style={{
                  width: 96,
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                  color: '#ffffff',
                }}>
                Consulta regolamento
              </Text>
            </View>
            <View
              style={{
                width: 170,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row',
                height: 48,
                backgroundColor: '#b94fc6',
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  width: 68,
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                  color: '#ffffff',
                }}>
                Disattiva notifiche
              </Text>
              <Ionicons
                style={{marginLeft: 5}}
                name="notifications-outline"
                size={25}
                color="#ffffff"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    backgroundColor: '#181a1f',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  headerTextContainer: {
    flexDirection: 'row',
    backgroundColor: '#21222a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 32,
    width: 163,
  },
  headerText: {
    color: '#9a96a2',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  notificationContainer: {
    backgroundColor: '#b94fc6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: '100%',
    zIndex: 2,
  },
  notificationText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 10,
  },
  imageFallSeason: {
    position: 'absolute',
    top: 85,
    height: 117.88,
    zIndex: 0,
  },
  imageTropical: {
    height: 310,
    width: '100%',
    borderRadius: 30,
    zIndex: 1,
  },
  linearGradient: {
    height: 42,
    top: 340,
    marginHorizontal: 120,
    position: 'absolute',
    width: 167,
    borderRadius: 5,
    justifyContent: 'center',
    zIndex: 3,
  },
  gradientText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  progressBarGradient: {
    height: 210,
  },
  imageForziere: {
    height: 56,
    width: 56,
    marginTop: 40,
    marginLeft: 16,
  },
  line: {
    width: 50,
    marginTop: 65,
    marginLeft: 10,
    borderRadius: 40,
    height: 8,
    backgroundColor: '#474459',
  },
  greenLine: {
    width: 40,
    borderRadius: 40,
    height: 8,
    backgroundColor: '#2fe98c',
  },
  imageForziereBig: {
    width: 84,
    height: 84,
    marginTop: 25,
  },
  imageGP: {
    height: 16,
    width: 16,
    marginTop: 2,
  },
  forziereText: {
    marginLeft: 5,
    fontFamily: 'Montserrat-Bold',
    color: '#c9c4cf',
  },
  imageRefresh: {
    height: 16,
    width: 16,
    tintColor: '#9a96a2',
    marginTop: 1,
    marginLeft: 10,
  },
  questionMarkGradient: {
    width: 92,
    height: 92,
    borderRadius: 20,
  },
  pointsGradient: {
    width: 92,
    height: 92,
    borderRadius: 20,
    marginLeft: 30,
    zIndex: 2,
  },
  questionMarkContainer: {
    alignItems: 'center',
    width: 116,
    height: 137,
  },
  pointsContainer: {
    alignItems: 'center',
    width: 92,
    height: 137,
  },
  lockedText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#cdbeff',
    marginTop: 20,
  },
  imageQuestionForziere: {
    width: 77,
    height: 107,
  },
  imageGPBig: {
    width: 89.07,
    height: 86,
    zIndex: 3,
    position: 'absolute',
  },
  buttonGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    left: 190,
    width: 61,
    height: 32,
    borderRadius: 5,
    zIndex: 2,
  },
  dropsGradient: {
    marginTop: 20,
    height: 174,
    width: '90%',
    marginTop: 60,
    marginHorizontal: 22,
    borderRadius: 10,
  },
  exclusiveContainer: {
    width: 142,
    height: 24,
    backgroundColor: '#181a1f',
    margin: 15,
    borderRadius: 5,
  },
  exclusiveText: {
    marginTop: 2,
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ffffff',
  },
  vanSeasonText: {
    position: 'absolute',
    top: 45,
    left: 15,
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
});

export default App;
