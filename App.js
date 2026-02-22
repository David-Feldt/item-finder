import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, ActivityIndicator } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({ latitude: 43.6532, longitude: -79.3832 }); // Toronto coords

  const searchItems = async () => {
    if (!searchQuery) {
      alert('Please enter what you\'re looking for');
      return;
    }

    setLoading(true);
    
    // Mock data for demo
    const mockResults = [
      {
        id: '1',
        name: 'Canadian Tire',
        vicinity: '123 Yonge St, Toronto',
        image: 'https://via.placeholder.com/150/FF6B6B/FFFFFF?text=Canadian+Tire',
        distance: '0.8',
        lat: 43.6582,
        lng: -79.3832
      },
      {
        id: '2', 
        name: 'Home Depot',
        vicinity: '456 Queen St W, Toronto',
        image: 'https://via.placeholder.com/150/4ECDC4/FFFFFF?text=Home+Depot',
        distance: '1.2',
        lat: 43.6482,
        lng: -79.3932
      },
      {
        id: '3',
        name: 'Walmart',
        vicinity: '789 Dundas St, Toronto', 
        image: 'https://via.placeholder.com/150/45B7D1/FFFFFF?text=Walmart',
        distance: '2.1',
        lat: 43.6632,
        lng: -79.3732
      }
    ];

    setTimeout(() => {
      setResults(mockResults);
      setLoading(false);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemAddress}>{item.vicinity}</Text>
        <Text style={styles.itemDistance}>{item.distance} km away</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔍 Item Finder</Text>
        <Text style={styles.subtitle}>Find nearby items fast</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for? (e.g., flashlight)"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={searchItems}
        />
        <Button 
          title="Search" 
          onPress={searchItems}
          color="#007AFF"
        />
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Finding nearby items...</Text>
        </View>
      )}

      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.resultsList}
        ListEmptyComponent={
          !loading && results.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {searchQuery ? 'No results found' : 'Search for items to get started'}
              </Text>
            </View>
          ) : null
        }
      />

      {results.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Found {results.length} places near you
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  searchInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#6c757d',
  },
  resultsList: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 4,
  },
  itemAddress: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 2,
  },
  itemDistance: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'white',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  footerText: {
    textAlign: 'center',
    color: '#6c757d',
    fontSize: 14,
  },
});