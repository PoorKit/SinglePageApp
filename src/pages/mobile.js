import React from "react";
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from '../stylesheets/mobilestylesheet';

export default function Mobile(){
    return (
        <>
        <View style={styles.formContainer}>
            <View style={styles.formStyling}>
                <View style={styles.formHeaderContainer}>
                    <Text style={styles.formHeader}>SCHEDULE A DEMO</Text>
                    <Text style={styles.formHeaderSubtitle}>Learn More About FloQast</Text>
                </View>
                <View style={styles.formSubheaderContainer}>
                    <Text style={styles.formSubHeader}>Learn How FloQast Can <Text style={styles.formSubHeaderHighlight}>Improve Your Month-End</Text></Text>
                    <View style={styles.formSubHeaderFieldGroup}>
                        {/* We can further separate both of this text inputs as both wouldn't be affected by the responsive nature of the app. */}
                        <TextInput style={styles.formTextInput} mode='outlined' placeholder='Juan dela Cruz' label="Name" textColor='black'/>
                        <TextInput style={styles.formTextInput} mode='outlined' placeholder='Example@example.com' label="Email" textColor='black'/>
                    </View>
                    <View style={{paddingBottom:40, paddingTop:20, width: '50%', alignSelf:'center'}}>
                    <Button mode="contained" icon="calendar" buttonColor='#85BF3A' textColor='white' uppercase={true} labelStyle={styles.formButton} onPress={()=>alert("Hi!")}>Schedule Now</Button>
                    </View>
                </View>
            </View>
        </View>
        </>
    )
}