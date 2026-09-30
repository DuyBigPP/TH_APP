import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {STUDENT} from '../data/mockData';
import {ThemeColors} from '../theme/colors';
import Icon from './Icon';

interface Props {
  colors: ThemeColors;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({colors, isDark, onToggleTheme}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>
        <Text style={[styles.greeting, {color: colors.textSecondary}]}>
          Xin chào,
        </Text>
        <Text style={[styles.name, {color: colors.text}]}>
          {STUDENT.name}
        </Text>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={[styles.actionBtn, {backgroundColor: colors.card, borderColor: colors.border}]}
          onPress={onToggleTheme}
          activeOpacity={0.7}>
          <Icon
            name={isDark ? 'sun' : 'moon'}
            size={20}
            color={isDark ? '#F59E0B' : colors.text}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, {backgroundColor: colors.card, borderColor: colors.border}]}
          activeOpacity={0.7}>
          <Icon name="bell" size={20} color={colors.text} />
          <View style={styles.notifDot} />
        </TouchableOpacity>

        <View style={[styles.avatar, {backgroundColor: colors.avatarBg}]}>
          <Text style={styles.avatarText}>{STUDENT.initials}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  infoSection: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    letterSpacing: 0.2,
    marginBottom: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  notifDot: {
    position: 'absolute',
    top: 10,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
