import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foodList from '../const/foods';
import { useState } from 'react';

const { width } = Dimensions.get('screen')

const CartScreen = ({ navigation, route }) => {
    const [totalPrice, setPrice] = useState(0)

    const food = route.params;
    const Card = ({ item }) => {
        var item = item.item;
        return (
            <View style={styles.card} key={item.id}>
                <View style={styles.card_container}>
                    <View style={styles.card_image_container}>
                        <Image style={styles.card_image} source={food.image} />
                    </View>

                    <View style={styles.card_item_content}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.card_item_content_style}>{food.name}</Text>
                            <Text style={{ color: COLORS.secondary }}>{food.name}</Text>
                            <Text style={styles.card_item_content_style}>${food.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.card_item_count}>{1}</Text>
                            <TouchableOpacity>
                                <View style={styles.card_item_cart_button}>
                                    <Icon name="remove" size={25} color={COLORS.white} onPress={() => { }} />
                                    <Icon name="add" size={25} color={COLORS.white} onPress={() => { }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} color={COLORS.dark} onPress={() => navigation.navigate("DetailsScreen", food)} />
                <Text style={styles.header_text}>Cart</Text>
            </View>
            <FlatList
                numColumns={1}
                data={foodList}
                renderItem={item => <Card item={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: COLORS.white },
    header: {
        height: "20%",
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    header_text: { fontSize: 20, color: COLORS.dark },

    card: {
        height: 120,
        backgroundColor: COLORS.white,
        marginBottom: 30,
        shadowRadius: 15,
        overflow: 'visible',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        width: width - 25,
        elevation: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    card_container: { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
    card_image_container: { justifyContent: 'center', height: 100, width: 150 },
    card_image: {
        justifyContent: 'center',
        height: "70%",
        width: "47%",
        borderRadius: 100,
    },
    card_item_content: { justifyContent: 'space-between', flexDirection: 'row', width: "55%" },
    card_item_content_style: { color: COLORS.dark, fontSize: 18, fontWeight: 'bold' },
    card_item_count: { fontWeight: 'bold', color: COLORS.dark, fontSize: 20, left: 25 },
    card_item_cart_button: {
        flexDirection: 'row',
        backgroundColor: COLORS.orange,
        paddingHorizontal: 10,
        padding: 5,
        borderRadius: 20,
    }
})
export default CartScreen;