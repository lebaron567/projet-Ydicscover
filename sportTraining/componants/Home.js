import React from "react";
import { View, TextInput, Button, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const exercises = [
    {
        title: 'Squat « jump »',
        description: 'Descendre le poids du corps sur les talons sans décoller les talons du sol. Envoyer les fessiers vers l’arrière et serrer votre sangle abdominale. Lorsque vous remontez, faites un saut de manière explosive puis atterrir en fléchissant les genoux pour un meilleur amorti.',
        image: require('../assets/clipart4149702.png'), // Remplacez le chemin par le chemin de votre image
    },
    {
        title: 'Chaise dos au mur',
        description: 'lacer les jambes à 90° et rentrer le ventre. Placer vos mains sur vos épaules pour ne pas vous aider..',
        image: require('../assets/chaise.png'), // Remplacez le chemin par le chemin de votre image
    },
    {
        title: 'Fentes dynamiques',
        description: 'Le genou devant ne doit pas dépasser la pointe de pied. Les pieds sont écartés largeur de bassin.',
        image: require('../assets/fonte.jpg'), // Remplacez le chemin par le chemin de votre image
    }
    ]

    const ExerciseCard = ({ title, description, image }) => (
        <Card style={styles.containers}>
          <Card.Content>
            <Title>{title}</Title>
            <Image source={image} style={styles.stretch} />
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
                <View >
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
        width: 300,
        height: 300, // Ajustez la hauteur en fonction de la résolution de votre image
        resizeMode: 'cover',
        borderRadius: 10, // Assurez-vous que la bordure correspond à celle de la carte
      },
      container: {
        padding: 20,
        flexDirection: 'column',
      },
      containers: {
        borderWidth: 2,
        flexDirection: 'column',
        margin: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
        borderRadius: 10,
        elevation: 4,
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    
});
