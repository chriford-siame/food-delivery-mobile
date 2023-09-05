import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import COLORS from "../const/colors";

const WIDTH = Dimensions.get("screen")
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <View style={styles.content_container}>
                <Image style={styles.content_image} source={require('../assets/home-icon.png')} />
                <View style={styles.content_head_text_container}>
                    <Text style={styles.content_head_text}>
                        Delicious Food
                    </Text>
                    <Text>We help you to find best and delicious food</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('FoodsScreen')}>
                    <View style={styles.footer_button}>
                        <Text style={styles.footer_button_text}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 0.95 },
    content_container: {
        flex: 1,
        alignItems: 'center',
        top: 60,
    },
    content_image: {
        width: '65%',
        height: '40%',
        overflow: 'hidden',
        borderRadius: 220,
        marginLeft: 20,
    },
    content_head_text_container: {justifyContent: 'center',alignItems: 'center'},
    content_head_text: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: COLORS.danger
    },
    
    footer: { justifyContent: 'center', alignItems: 'center' },
    footer_button: {
        backgroundColor: COLORS.primary,
        width: '50%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    footer_button_text: {
        fontSize: 18,
        color: COLORS.white
    },
})
export default HomeScreen;