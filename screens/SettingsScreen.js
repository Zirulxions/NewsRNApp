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

SettingsScreen.navigationOptions = {
  title: 'Developer information',
};

function goToGithub(){
  WebBrowser.openBrowserAsync(
    'https://www.github.com/Zirulxions'
  );
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
    color: '#ffffff',
  },
  getStartedText: {
    fontSize: 17,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
  },
});
