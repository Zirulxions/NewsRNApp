import React from 'react';
import { View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
//import { ExpoLinksView } from '@expo/samples';

import { getNews } from './src/news';
import Article from './src/components/Article';

var page = 1;
var status = false

export default class LinksScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
    this.arrayholder = [];
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    if(status){
      page++;
    }
    status = false;
    getNews(page)
      .then(articles => {
        this.setState({ articles, refreshing: false });
        this.arrayholder = articles;
        console.log(articles);
      })
      .catch(() => this.setState({ refreshing: false }));
  }

  fetchPrevPage() {
    page--;
    if(page <= 0){
      alert("You are already on page 1");
      page++;
    } else {
      getNews(page)
        .then(articles => {
          this.setState({ articles, refreshing: false });
          this.arrayholder = articles;
        })
        .catch(() => this.setState({ refreshing: false }));
    }
  }

  fetchNextPage() {
    status = true;
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  handleRefresh() {
    status = false;
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

/*
  checkButton() {
    if(page > 1){
      this.setState({buttonState: true})
    }
    else {
      this.setState({buttonState: false});
    }
  }
*/

/*
  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData =
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      article: newData,
    });
  };
*/

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search..."
        lightTheme
        round
        //onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
          //onEndReached = { this.fetchNews }
          ListHeaderComponent = {this.renderHeader}
        />
        <View>
          <Button
            title="Next Page ►"
            type="outline"
            onPress={ this.fetchNextPage.bind(this) }
          />
          <Button
            title="◄ Previous Page"
            type="outline"
            onPress={ this.fetchPrevPage.bind(this) }
          />
        </View>
      </View>
    );
  }
}

/**
{
 * Go ahead and delete ExpoLinksView and replace it with your content;
 * we just wanted to provide you with some helpful links.
 }
<ExpoLinksView />
*/

LinksScreen.navigationOptions = {
  title: '♠ USA News ♠',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /*
  containerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '40%',
    height: 40,
    flexDirection: 'row',
  },
  */
});
