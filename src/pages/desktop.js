import React from "react";
import { Text, View, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from '../stylesheets/desktopstylesheet';

export default function Desktop(){
    return (
        // Only using <> </> here just to group the objects and peace of mind.
        <> 
        <View style={styles.formContainer}>
            <View style={styles.formStyling}>
                <View style={styles.formHeaderContainer}>
                    <ImageBackground source={require('../../assets/FormHeadShape.png')} style={styles.formHeaderImage}/>
                    <Text style={styles.formHeader}>SCHEDULE A DEMO</Text>
                    <Text style={styles.formHeaderSubtitle}>Learn More About FloQast</Text>
                </View>
                <View style={styles.formSubheaderContainer}>
                    <Text style={styles.formSubHeader}>Learn How FloQast Can<Text style={styles.formSubHeaderHighlight}>Improve Your Month-End</Text></Text>
                    <View style={styles.formSubHeaderFieldGroup}>
                        {/* We can further separate both of this text inputs as both wouldn't be affected by the responsive nature of the app. */}
                        <TextInput style={styles.formTextInput} mode='outlined' placeholder='Juan dela Cruz' label="Name" textColor='black'/>
                        <TextInput style={styles.formTextInput} mode='outlined' placeholder='Example@example.com' label="Email" textColor='black'/>
                        <Button mode="contained" icon="calendar" buttonColor='#85BF3A' textColor='white' uppercase={true} labelStyle={styles.formButton} onPress={()=>alert("Hi!")}>Schedule Now</Button>
                    </View>
                </View>
            </View>
        </View>
        </>  
    );
}