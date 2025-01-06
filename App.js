import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Ảnh đại diện */}
      <Image
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
        style={styles.avatar}
      />
      {/* Tên */}
      <Text style={styles.name}>Hoàng Công Mạnh</Text>
      {/* Giới thiệu ngắn */}
      <Text style={styles.bio}>
        Xin chào! Tôi là một lập trình viên đam mê phát triển ứng dụng di động.
      </Text>
      {/* Thông tin liên hệ */}
      <Text style={styles.contact}>Email: hoangmanh6889@gmail.com</Text>
      <Text style={styles.contact}>SĐT: 0123 456 789</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  contact: {
    fontSize: 14,
    color: '#888',
  },
});
