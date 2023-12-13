import React from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activiter: 'activiter'
        }
    }

    setActivit = (activiter) => {
        this.setState({
            activiter: activiter
        });
    }

    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(text) => this.setActivit(text)}
                    style={styles.input}
                    value={this.state.activiter}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('About')}
                    title="Afficher la page About"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
