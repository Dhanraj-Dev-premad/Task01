
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const AboutPage1 = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
        <Text style={styles.headerSubtitle}>
          Get to know more about our app
        </Text>
      </View>

      {/* App Card */}
      <View style={styles.appCard}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>A</Text>
        </View>

        <Text style={styles.appName}>My App</Text>

        <Text style={styles.appDescription}>
          A simple and beautiful mobile experience designed to make
          your everyday tasks easier and more enjoyable.
        </Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Who We Are</Text>

        <Text style={styles.description}>
          We believe technology should be simple, fast, and easy to use.
          Our goal is to create a smooth experience with a clean and
          user-friendly interface.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Offer</Text>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.iconText}>✓</Text>
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Simple Experience</Text>
            <Text style={styles.featureDescription}>
              Easy-to-use interface with simple navigation.
            </Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.iconText}>⚡</Text>
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Fast & Reliable</Text>
            <Text style={styles.featureDescription}>
              Designed to provide a smooth and reliable experience.
            </Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureIcon}>
            <Text style={styles.iconText}>♥</Text>
          </View>

          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Made With Care</Text>
            <Text style={styles.featureDescription}>
              Every detail is designed with users in mind.
            </Text>
          </View>
        </View>
      </View>

      {/* App Info */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Version</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Developer</Text>
          <Text style={styles.infoValue}>My App Team</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Platform</Text>
          <Text style={styles.infoValue}>React Native</Text>
        </View>
      </View>

      {/* Contact Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        © 2026 My App. All rights reserved.
      </Text>
    </ScrollView>
  );
};

export default AboutPage1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    marginTop: 25,
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1F2937',
  },

  headerSubtitle: {
    fontSize: 15,
    color: '#7A8494',
    marginTop: 6,
  },

  appCard: {
    backgroundColor: '#648DDB',
    borderRadius: 24,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
  },

  logo: {
    width: 75,
    height: 75,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  logoText: {
    fontSize: 34,
    fontWeight: '800',
    color: '#648DDB',
  },

  appName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  appDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#EAF0FF',
    textAlign: 'center',
    marginTop: 10,
  },

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#6B7280',
  },

  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginTop: 12,
    alignItems: 'center',
  },

  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#EEF3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#648DDB',
  },

  featureContent: {
    flex: 1,
    marginLeft: 14,
  },

  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },

  featureDescription: {
    fontSize: 13,
    color: '#8A93A3',
    marginTop: 4,
    lineHeight: 18,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 18,
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 17,
  },

  infoLabel: {
    fontSize: 14,
    color: '#7A8494',
  },

  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },

  button: {
    height: 52,
    borderRadius: 16,
    backgroundColor: '#648DDB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9AA2AF',
    marginTop: 22,
  },
});






// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AboutPage1 = () => {
//   return (
//     <View>
//       <Text>AboutPage1</Text>
//     </View>
//   )
// }

// export default AboutPage1

// const styles = StyleSheet.create({})