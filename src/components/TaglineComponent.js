import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useMediaQuery } from 'react-responsive';

export default function TaglineComponent(){
    const isMobile = useMediaQuery({query: '(max-width: 1080px)'});

    // Styles is here so that it can be dynamically changed by the isMobile condition.
    const styles = StyleSheet.create({
        taglineContainer:{
            flex:3,
            minWidth: isMobile ? '100%' : '1080',
            maxWidth:1224,
            width: isMobile ? '100%' : '60%',
            justifyContent:'center',
          },
          taglineStyling:{
            flex:1,
            paddingTop:"3%",
            paddingBottom:"5%",
          },
          taglineRight:{
            alignSelf:'center',
          },
          taglineHeaderTitle:{
            fontFamily: "roboto-italic",
            fontSize: 32,
            fontWeight: 400,
            fontStyle: "italic",
            textAlign: "right",
            color: "#3F3F3F",
            textAlign:'left',
          },
          taglineHeaderTitleHighlight:{
            fontFamily: "roboto-mediumitalic",
            fontSize: 48,
            fontWeight: 500,
            fontStyle: "italic",
            textAlign: "right",
            color: "#85BF3A",
          }
    });

    
    return (
        <View style={styles.taglineContainer}>
            <ImageBackground source={require('../../assets/tagrectangle.png')} style={{opacity: 0.8,}}>
                <View style={styles.taglineStyling}>
                    <View style={styles.taglineRight}>
                        <Text style={styles.taglineHeaderTitle}>
                        <Image source={require('../../assets/PgLogo.png')} style={{height:65,width:256}} resizeMethod="scale" resizeMode='contain'/>
                        The{'\n'} <Text style={styles.taglineHeaderTitleHighlight}>Fastest, Most Accurate{'\n'}</Text> Way to Close Your Books!
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

