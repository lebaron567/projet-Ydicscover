import React from "react";
import { View, TextInput, Button, StyleSheet, Image,Text, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const exercises = [
    {
      title: 'Squat « jump »',
      description: 'Descendre le poids du corps sur les talons sans décoller les talons du sol. Envoyer les fessiers vers l’arrière et serrer votre sangle abdominale. Lorsque vous remontez, faites un saut de manière explosive puis atterrir en fléchissant les genoux pour un meilleur amorti.',
      image: require('../assets/clipart4149702.png'), // Remplacez le chemin par le chemin de votre image
    }]

const ExerciseCard = ({ title, description, image }) => (
    <Card>
      <Card.Content>
        <Card.Cover source={image} />
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
  
  const ExercisePage = () => (
    <View style={styles.container}>
      <ScrollView>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} {...exercise} />
        ))}
      </ScrollView>
    </View>
  );

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activiter: 'exercices'
        }
    }

    setActivit = (activiter) => {
        this.setState({
            activiter: activiter
        });
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <TextInput
                    onChangeText={(text) => this.setActivit(text)}
                    style={styles.input}
                    value={this.state.activiter}
                />
                <Button
                    onPress={() => this.props.navigation.navigate('About')}
                    title="recherce"
                /> */}
                <View style={styles.containers}>
                <ScrollView>
                    {exercises.map((exercise, index) => (
                    <ExerciseCard key={index} {...exercise} />
                    ))}
                </ScrollView>
                </View>
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
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
      },
      container: {
        padding: 20,
        flexDirection: 'column',
      },
      containers: {
        border: 'solid',
        padding: 10,
        flexDirection: 'column',
        margin: 10,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    
});
