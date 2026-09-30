import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STATS} from '../data/mockData';
import {ThemeColors} from '../theme/colors';
import Icon from './Icon';

interface Props {
  colors: ThemeColors;
}

export default function StatsSection({colors}: Props) {
  return (
    <View style={styles.container}>
      {STATS.map(stat => (
        <View
          key={stat.id}
          style={[styles.card, {backgroundColor: colors.card, borderColor: colors.border}]}>
          <View style={[styles.iconBox, {backgroundColor: stat.color + '14'}]}>
            <Icon name={stat.icon} size={20} color={stat.color} />
          </View>
          <Text style={[styles.value, {color: colors.text}]}>
            {stat.value}
          </Text>
          <Text style={[styles.label, {color: colors.textSecondary}]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 14,
    borderWidth: 1,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
    letterSpacing: 0.2,
  },
});
