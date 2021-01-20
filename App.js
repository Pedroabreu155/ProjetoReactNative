import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');

function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
        alert("Seu IMC é: " + imc.toFixed(2) + "\n\nVocê está abaixo do Peso!")
    }
    else if(imc >= 18.6 && imc < 24.9){
        alert("Seu IMC é: " + imc.toFixed(2) + "\n\nVocê está no peso ideal!")
    }
    else if(imc >= 24.9 && imc < 34.9){
        alert("Seu IMC é: " + imc.toFixed(2) + "\n\nVocê está levemente acima do peso!")
    }
    else if(imc > 34.9){
        alert("Seu IMC é: " + imc.toFixed(2) + "\n\nVocê está muito acima do peso!")
    }
}


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calcule seu IMC</Text>


            <TextInput
            style={styles.input}
            value={peso}
            onChangeText={ (peso) => setPeso(peso) }
            placeholder={"Digite seu peso (Kg)"}
            keyboardType='numeric'
            />

            <TextInput
            style={styles.input}
            value={altura}
            onChangeText={ (altura) => setAltura(altura) }
            placeholder={"Digite sua altura (cm)"}
            keyboardType='numeric'
            />

            <TouchableOpacity style={styles.button}
             onPress={handleSubmit}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
           
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ff7',
        color: '#ffffff'
    },
    title:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 65,

    },

    input:{
        borderRadius:10,
        backgroundColor:'#0a7',
        margin: 25,
        padding:10,
        color: '#000000',
        fontSize:24
    },

    button:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 55,
        marginRight:55,
        backgroundColor: '#000',
        padding: 10,
        borderRadius:10
    },

    buttonText:{
        color: '#fff',
        fontSize: 20
    }
    
})