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
    <View>
      <ScrollView>

        <View>
          <Text style={styles.autorText}>Author Nickname: Zirulxions</Text>
          <Text style={styles.autorTextReduced}>Author Name: Javier Delgado</Text>
          <Text style={styles.autorTextReduced}>Author Email: javierzirulxions@gmail.com</Text>
          <Text style={styles.autorTextReduced}>Author Country: Venezuela</Text>
        </View>

        <View style={styles.helpContainer}>
          <Text style={styles.getStartedText}>
            Author Github:
          </Text>
          <TouchableOpacity onPress={goToGithub} style={styles.helpLink}>
            <Text style={styles.linkText}>
              Zirulxions Github
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
    backgroundColor: '#fff',
  },
  autorText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
  },
  autorTextReduced: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 17,
    textAlign: 'left',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
