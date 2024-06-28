import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CampaignDetails({ route }) {
  const { campaign } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{campaign.name}</Text>
      <Text style={styles.description}>{campaign.description}</Text>
      <Text style={styles.month}>Mês: {campaign.month}</Text>
      <Text style={styles.features}>{campaign.features}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
  month: {
    marginTop: 10,
    fontStyle: 'italic',
  },
  features: {
    marginTop: 10,
    fontSize: 16,
  },
});
