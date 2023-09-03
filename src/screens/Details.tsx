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
                <Image source={food.image} style={styles.foodImage} />
            </View>
            <View style={styles.foodDetail}>
                <View>
                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <Text style={{ fontSize: 25, color: COLORS.white }}>{food.name}</Text>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.white,
                        }}>
                            <Icon name='favorite' size={20} color={COLORS.orange} />
                        </View>
                    </View>
                </View>
                <View style={{
                    top: 20,
                    paddingBottom: 10,
                }}>
                    <Text style={{fontSize: 18, color: COLORS.white}}>
                        {food.description}
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('CartScreen', food)}>
                    <View style={styles.btn}>
                        <Text style={{fontSize: 20, color: COLORS.orange, fontWeight: 'bold'}}>Add To Cart</Text>
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
    foodImage: {
        width: "55%",
        height: 220,
        borderRadius: 200,
        alignSelf: 'center',
        borderColor: COLORS.primary,
        borderWidth: 2,
    },
    foodDetail: {
        top: 20,
        bottom: 0,
        backgroundColor: COLORS.orange,
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        height: "100%"
    }
})

export default DetailsScreen;