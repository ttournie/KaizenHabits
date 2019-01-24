import React from 'react';
import {Text} from 'react-native';

class GraphScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Overview',
        };
      };

    render() {
        return (
            <Text> Graph Page</Text>
        );
    }
}

export default GraphScreen;