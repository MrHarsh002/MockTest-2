import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import checkupItems from '../assets/data/checkupItems';

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

      <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20 }}>
          <MaterialIcons name="category" size={24} color="black" />
          <Text>Categories</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20 }}>
          <FontAwesome5 name="briefcase-medical" size={24} color="black" />
          <Text>Symptons</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, gap: 10, backgroundColor: '#fff', margin: 10, borderRadius: 20 }}>
          <Entypo name="stopwatch" size={24} color="black" />
          <Text>Duration</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={checkupItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} activeOpacity={0.85}>
              <View style={styles.iconBox}>
                {item.icons ? (
                  item.icons
                ) : (
                  <MaterialIcons name="healing" size={28} color="#0672b8" />
                )}
              </View>

              {/* main content */}
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.metaRow}>
                  <View style={styles.metaItem}>
                    <FontAwesome5 name="play" size={12} color="#666" />
                    <Text style={styles.metaText}>{` ${item.episodes} Episodes`}</Text>
                  </View>

                  <View style={styles.metaItem}>
                    <Feather name="clock" size={12} color="#666" />
                    <Text style={styles.metaText}>{` Updated ${formatShortDate(item.updatedAt)}`}</Text>
                  </View>
                </View>

                <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
                  {item.description}
                </Text>
              </View>
              <View style={styles.chevBox}>
                <Entypo name="chevron-right" size={20} color="#999" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

    </SafeAreaView>
  )
}

export default LibraryScreen

function formatShortDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  } catch (e) {
    return iso;
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: Platform.OS === 'android' ? 3 : 0,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#e6f6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0b3b4a',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 12,
    color: '#666666aa',
  },
  description: {
    marginTop: 6,
    color: '#666666ff',
    fontSize: 14,
  },
  chevBox: {
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});