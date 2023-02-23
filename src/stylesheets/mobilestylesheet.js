import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer:{
      flex:1,
      justifyContent:'center',
    },
    formStyling:{
      alignItems:'center',
      alignContent:'center',
      alignSelf:'center',
      backgroundColor:'white',
      width: '100%',
      borderRadius:5,
    },
    formHeaderContainer:{
      flex:1,
      justifyContent:'center',
      paddingBottom:20,
      paddingTop:20,
      width:'100%',
      backgroundColor:'#85BF3A',
    },
    formHeaderImage:{
      position: 'absolute',
      zIndex: -1,
      resizeMode:'contain',
      resizeMethod: 'resize',
      width:"100%",
      height:"100%",
      overflow:'hidden',
      borderTopLeftRadius:5,
      borderBottomLeftRadius:5,
    },
    formHeader:{
      fontFamily: "roboto-bold",
      fontSize: 28,
      fontWeight: "bold",
      fontStyle: "normal",
      textAlign: "center",
      color: "#FFFFFF",
    },
    formHeaderSubtitle:{
      fontFamily: "roboto-bold",
      fontSize: 18,
      fontStyle: "normal",
      textAlign: "center",
      color: "#FFFFFF",
    },
    formSubheaderContainer:{
      flex:2,
      justifyContent:'center',
      width:'80%',
      paddingBottom:20,
      paddingTop:20,
    },
    formSubHeader:{
      fontFamily: "roboto-bold",
      fontSize: 19,
      fontWeight: "bold",
      fontStyle: "normal",
      textAlign: "center",
      color: "#6D6E70",
    },
    formSubHeaderHighlight:{
      color: "#85BF3A",
    },
    formSubHeaderFieldGroup:{
      marginTop:10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignContent:'center',
      flexDirection: 'row',
    },
    formTextInput:{
      backgroundColor:'white',
      height:40,
    },
    formButton:{
      fontFamily: "roboto-medium",
      fontSize: 16,
      fontWeight: 500,
      fontStyle: "normal",
      textAlign: "center",
      color: "#FFFFFF",
    },
});
export default styles;
  