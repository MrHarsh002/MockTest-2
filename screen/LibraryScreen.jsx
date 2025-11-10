import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const LibraryScreen = () => {
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

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Library</Text>
        <Text style={{ fontSize: 18, color: '#444444ff' }}>Doctor's approved audio episodes</Text>
      </View>

      <View>
        <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10 }}>
          <Feather name="search" size={24} color="#000000ff" style={{ position: 'absolute', left: 25, zIndex: 1 }} />
          <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 20, padding: 10, flex: 1, textAlign: "center", fontSize: 16, backgroundColor: "#fff" }} placeholder="Search for symptom or condition..." />
        </View>
      </View>

      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20 }}>
          <MaterialIcons name="category" size={24} color="black" />
          <Text>Categories</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20 }}>
          <MaterialIcons name="category" size={24} color="black" />
          <Text>Categories</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20 }}>
          <MaterialIcons name="category" size={24} color="black" />
          <Text>Categories</Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({})