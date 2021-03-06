import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "../Form/style";
import ResultImc from "./ResultImc/";


export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [TextButton, setTextButton] = useState("Calcular")


function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setWeight(null)
        setHeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("calcular")
    setMessageImc("preencha o peso e altura")
}



    return(
        <View style={styles.FormContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() =>{
                    validationImc()
                }}
                >
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity> 
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        </View>
    );
}