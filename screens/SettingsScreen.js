import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function SettingsScreen() {
  return(
    <View style={styles.container}>
      <ScrollView>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={alertFunction}>
            <Image
              source={require('../assets/images/iluminati.gif')}
              style={styles.centerImage}
            />
          </TouchableOpacity>
        </View>

        <View>
          <MonoText style={styles.autorText}>Author Nickname: Zirulxions</MonoText>
        </View>
        <View>
          <MonoText style={styles.autorTextReduced}>Author Name: Javier Delgado</MonoText>
        </View>
        <View>
          <MonoText style={styles.autorTextReduced}>Author Email: javierzirulxions@gmail.com</MonoText>
        </View>
        <View>
          <MonoText style={styles.autorTextReduced}>Author Country: Venezuela</MonoText>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.getStartedText}>
            Author Github (Zirulxions):
          </Text>
          <TouchableOpacity onPress={goToGithub} style={styles.helpLink}>
            <Text style={styles.linkText}>
              https://www.gitbub.com/Zirulxions (Click Me!)
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
    //<ExpoConfigView />
  );
}

/**
 * Go ahead and delete ExpoConfigView and replace it with your content;
 * we just wanted to give you a quick view of your config.
return <ExpoConfigView />;
*/

var number = 0;

SettingsScreen.navigationOptions = {
  title: '♀ Developer ♀',
  //headerBackTitle: null,
  headerTitleStyle: {
    //alignSelf: 'center',
    //textAlign: 'center',
    //justifyContent: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    width: '100%',
  },
  headerStyle: {
    backgroundColor: '#083366',
  },
};

function goToGithub(){
  WebBrowser.openBrowserAsync(
    'https://www.github.com/Zirulxions'
  );
}

function alertFunction(){
  number = Math.floor(Math.random() * 10) + 1;
  switch(number){
    case 1:
      alert('Iluminati is Here... Watch Out');
      break;
    case 2:
      alert('20 Points for me..!');
      break;
    case 3:
      alert('If you see this, you are about to love someone');
      break;
    case 4:
      alert('IM WATCHING YOU');
      break;
    case 5:
      alert('OVER BY MY SELF!');
      break;
    case 6:
      alert('I wanna be your hero');
      break;
    case 7:
      alert('Im watching: Dragon Ball Z: Battle of the Gods');
      break;
    case 8:
      alert('Dont click me, it hurts');
      break;
    case 9:
      alert('I am... Lord... Voldemort');
      break;
    case 10:
      alert('I hate Kandi Kruch Zaga');
      break;
    default:
      alert('WTF ARE YOU DOING !? YOU SHOULD NOT BE ABLE TO SEE THIS!');
      break;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e78b7',
  },
  autorText: {
    fontSize: 24,
    color: '#ffffff',
    lineHeight: 27,
    textAlign: 'center',
    borderRadius: 3,
    paddingHorizontal: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  autorTextReduced: {
    fontSize: 20,
    color: '#ffffff',
    lineHeight: 23,
    textAlign: 'center',
    borderRadius: 3,
    paddingHorizontal: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#f8e71c',
    textDecorationLine: 'underline',
  },
  getStartedText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
  },
  centerImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
  },
});
