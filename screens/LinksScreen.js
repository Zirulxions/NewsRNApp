import React from 'react';
import { ScrollView, FlatList } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

import { getNews } from './src/news';
import Article from './src/components/Article';

var page = 0;

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    page++;
    getNews(page)
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
        onEndReached = { this.fetchNews }
      />
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
  title: 'News!',
};
