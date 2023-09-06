import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FoodTypes from '../const/food.type';
import foodList from '../const/foods';

const { width } = Dimensions.get('screen');
const FoodsScreen = ({ navigation }) => {
    const MenuCard = ({ item }) => {
        var item = item.item;
        return (
            <View style={styles.menu_card_container}>
                <View style={styles.menu_card_image_container}>
                    <Image style={styles.menu_card_image} source={item.image} />
                </View>
                <Text style={styles.menu_card_name}>{item.name}</Text>
            </View>
        )
    }

    const FoodCard = ({ food }) => {
        var food = food.item;
        return (
            <View style={styles.card}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={styles.card_image} source={food.image} />
                </View>
                <View style={styles.card_body}>
                    <View>
                        <Text style={{...styles.card_footer_price, fontSize: 24 }}>{food.name}</Text>
                        <Text style={styles.card_body_name}>{food.name}</Text>
                    </View>
                    <View style={styles.card_footer}>
                        <Text style={styles.card_footer_price}>${food.price}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("DetailsScreen", food)
                            }}>
                            <View style={styles.card_footer_add_button}>
                                <Icon name='add' size={20} color={COLORS.white} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.main}>
            <StatusBar translucent backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <View style={styles.header_container}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.header_back_icon}>
                                <Icon name='arrow-back-ios' size={20} color={COLORS.dark} onPress={() => navigation.navigate("HomeScreen")} />Hello,
                            </Text>
                            <Text style={styles.header_username}> Suvia</Text>
                        </View>
                        <Text style={styles.header_description}>What do you want today?</Text>
                    </View>
                    <Image style={styles.header_profile_photo} source={require('../assets/profile-photo.jpg')} />
                </View>
            </View>
            <View style={styles.header_search_bar}>
                <View style={styles.header_search_container}>
                    <Icon name='search' size={30} color={COLORS.dark} onPress={() => navigation.navigate("HomeScreen")} />
                    <TextInput placeholder='Search for food' style={styles.header_search_input} />
                </View>
                <View style={styles.header_settings_icon}>
                    <Icon name='settings' size={30} color={COLORS.white} onPress={() => navigation.navigate("HomeScreen")} />
                </View>
            </View>

            <View style={{top: 20, left: 5
            }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={FoodTypes}
                    renderItem={type => <MenuCard item={type} />}
                />
            </View>
            <FlatList
                style={{ marginTop: 50, elevation: 12 }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={foodList}
                renderItem={dish => <FoodCard food={dish} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, flexDirection: 'column' },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        top: 24.0,
        paddingBottom: 10,
        elevation: 2
    },
    header_container: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 5, 
    },
    header_back_icon: { fontSize: 28, color: COLORS.secondary },
    header_settings_icon: {
        backgroundColor: COLORS.orange,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 70,
    },
    header_username: { fontSize: 28, color: COLORS.dark },
    header_description: { fontSize: 18, color: COLORS.secondary },
    header_profile_photo: {
        width: '20%',
        height: '90%',
        right: -90,
        borderRadius: 100,
    },
    header_search_bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 40
    },
    header_search_container: {
        backgroundColor: 'rgba(15, 15, 15, .1)',
        padding: 5,
        borderRadius: 10,
        paddingLeft: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    header_search_input: { borderRadius: 10, width: '70%', fontSize: 18,},
    
    card: {
        height: 220,
        backgroundColor: COLORS.white,
        marginBottom: 70,
        shadowRadius: 15,
        overflow: 'visible',
        marginHorizontal: 10,
        width: (width / 2) - 25,
        elevation: 13,
    },
    card_image: { borderRadius: 100, height: 120, width: "65%", alignSelf: "center", top: -50, },
    card_body: { flexDirection: 'column', paddingLeft: 20 },
    card_body_name: { color: COLORS.secondary, fontSize: 16 },
    
    card_footer_price: { color: COLORS.dark, fontWeight: 'bold' },
    card_footer_add_button: { height: 20, width: 20, right: 10, borderRadius: 100, backgroundColor: COLORS.orange },
    card_footer: {
        top: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    
    menu_card_image: { borderRadius: 100, height: 30, width: 30, },
    menu_card_image_container: {
        backgroundColor: COLORS.white,
        borderRadius: 100,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu_card_container: {
        backgroundColor: 'rgba(255, 155, 55, 0.2)',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        padding: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    menu_card_name: { fontSize: 20, color: COLORS.orange, paddingLeft: 10 }
})

export default FoodsScreen;
