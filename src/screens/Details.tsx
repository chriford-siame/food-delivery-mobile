import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../const/colors';

const DetailsScreen = ({ navigation, route }) => {
    const food = route.params;
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <View style={styles.header_container}>
                    <Icon name='arrow-back-ios' size={28} color={COLORS.dark} onPress={() => { navigation.navigate('FoodsScreen') }} />
                    <Text style={styles.header_container_title}>Details</Text>
                </View>
            </View>
            <View>
                <Image source={food.image} style={styles.item_image} />
            </View>
            <View style={styles.item}>
                <View style={styles.item_container}>
                    <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                        <Text style={styles.item_container_name}>{food.name}</Text>
                        <View style={styles.item_container_favorite_icon}>
                            <Icon name='favorite' size={20} color={COLORS.orange} />
                        </View>
                    </View>
                </View>
                <View style={styles.item_description_container}>
                    <Text style={styles.item_container_description}>
                        {food.description}
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('CartScreen', food)}>
                    <View style={styles.btn}>
                        <Text style={styles.item_cart_button}>Add To Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, flexDirection: 'column', backgroundColor: COLORS.white },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: '20%',
        backgroundColor: COLORS.white
    },
    header_container: { flexDirection: 'row' },
    header_container_title: {color: COLORS.dark, fontSize: 20},
    
    btn: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: COLORS.white, 
        bottom: -70,
        borderRadius: 20,
        padding: 10,
    },

    item: {
        top: 20,
        bottom: 0,
        backgroundColor: COLORS.orange,
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        height: "100%"
    },
    item_image: {
        width: "55%",
        height: 220,
        borderRadius: 200,
        alignSelf: 'center',
        borderColor: COLORS.primary,
        borderWidth: 2,
    },
    item_container: {},
    item_container_name: { fontSize: 25, color: COLORS.white },
    item_description_container: {
        top: 20,
        paddingBottom: 10,
    },
    item_container_description: {fontSize: 18, color: COLORS.white},
    item_container_favorite_icon: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    item_cart_button: {fontSize: 20, color: COLORS.orange, fontWeight: 'bold'},
})

export default DetailsScreen;