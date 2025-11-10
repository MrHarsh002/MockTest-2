import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import doctorPlaylists from '../assets/data/doctorPlaylist'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#c6f0ffff' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <MaterialIcons name="equalizer" size={28} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>HealthCast</Text>
                </View>
                <View>
                    <Image
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                        source={{ uri: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" }}
                    />
                </View>
            </View>
            <View>
                <Text style={{ padding: 10, fontSize: 30, fontWeight: '600', lineHeight: 34 }}>Understand medical {"\n"}conditions with {"\n"}<Text style={{ color: '#007AFF' }}>doctor-approved audio</Text></Text>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ backgroundColor: '#007AFF', color: '#fff', padding: 10, borderRadius: 20, width: 390, textAlign: "center", fontSize: 18 }}>Browse Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20, flex: 1 }}>
                <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10 }}>
                    <Feather name="search" size={24} color="#b6b6b6ff" style={{ position: 'absolute', left: 25 }} />
                    <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 20, padding: 10, flex: 1, textAlign: "center", fontSize: 16 }} placeholder="Search for symptom or condition..." />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, borderColor: '#ccc', borderWidth: 0.7, borderRadius: 20 }}>
                        <Entypo name="dot-single" size={30} color="#db9129ff" />
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>Asthma</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, borderColor: '#ccc', borderWidth: 0.7, borderRadius: 20 }}>
                        <Entypo name="dot-single" size={30} color="#58ef22ff" />
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>Chest pain</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, borderColor: '#ccc', borderWidth: 0.7, borderRadius: 20 }}>
                        <Entypo name="dot-single" size={30} color="#a42121ff" />
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>Heart diseases</Text>
                    </View>
                </View>
                <View >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Browse by Category</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                        <View style={{ alignItems: 'center', backgroundColor: '#bde6bdff', padding: 20, borderRadius: 20 }}>
                            <FontAwesome5 name="lungs" size={50} color="#16a022ff" />
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#16a022ff' }}>Body</Text>
                        </View>
                        <View style={{ alignItems: 'center', backgroundColor: '#ffe0e0ff', padding: 20, borderRadius: 20 }}>
                            <FontAwesome name="heartbeat" size={50} color="#f72206ff" />
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#f72206ff' }}>Symptoms</Text>
                        </View>
                        <View style={{ alignItems: 'center', backgroundColor: '#f1c0f1ff', padding: 20, borderRadius: 20 }}>
                            <MaterialIcons name="medical-services" size={50} color="#a200edff" />
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#a200edff' }}>Treatment</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Doctor-curated playlists</Text>
                    <Text style={{ fontSize: 14, color: '#3c00ffff' }}>See all</Text>
                </View>

                <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                    <FlatList
                        data={doctorPlaylists}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => (
                            <View style={styles.playlistDivider} />
                        )}
                        renderItem={({ item }) => (
                            <TouchableOpacity activeOpacity={0.7} style={styles.playlistItem}>
                                <View style={styles.playlistIconWrap}>
                                    {item.icons}
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.playlistTitle}>{item.title}</Text>
                                    <Text style={styles.playlistEpisodes}>{item.episodes} episodes</Text>
                                </View>
                                <Feather name="chevron-right" size={22} color="#9aa0a6" />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    playlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    playlistIconWrap: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#eef3ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    playlistTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },
    playlistEpisodes: {
        fontSize: 12,
        color: '#6b7280',
        marginTop: 2,
    },
    playlistDivider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#e6e6e6',
        marginLeft: 62,
    },
})