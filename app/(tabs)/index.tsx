import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        // KODE INI UNTUK MEMANGGIL FOTO PRIBADI ANDA
        source={require("../../assets/foto-saya.jpeg")}
        style={styles.profilePic}
      />

      <Text style={styles.name}>Herdianta Persada Purba</Text>
      <Text style={styles.nim}>NIM: 243303621238</Text>
      <Text style={styles.major}>Jurusan: Sistem Informasi</Text>

      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 Terus belajar dan berkembang untuk masa depan yang lebih baik.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Latar belakang hitam
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  profilePic: {
    width: 140, // Lebar foto
    height: 140, // Tinggi foto
    borderRadius: 70, // Supaya fotonya jadi lingkaran
    borderWidth: 3,
    borderColor: "#ffff99", // Warna kuning muda untuk bingkai
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  nim: {
    fontSize: 14,
    color: "#ffff99",
    marginTop: 5,
  },

  major: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 20,
  },

  bioCard: {
    backgroundColor: "#111", // Warna latar kartu bio sedikit abu-abu
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#333",
    width: "100%",
  },

  bioText: {
    color: "#ccc",
    textAlign: "center",
    fontStyle: "italic",
  },
});
