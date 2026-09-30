import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NAV_ITEMS} from '../data/mockData';
import {ThemeColors} from '../theme/colors';
import Icon from './Icon';

interface Props {
  colors: ThemeColors;
  activeTab: string;
  onTabPress: (tabId: string) => void;
  bottomInset?: number;
}

export default function BottomNav({colors, activeTab, onTabPress, bottomInset = 0}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.navBg,
          borderTopColor: colors.border,
          paddingBottom: Math.max(bottomInset, 10),
        },
      ]}>
      {NAV_ITEMS.map(item => {
        const isActive = item.id === activeTab;
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.tab}
            activeOpacity={0.7}
            onPress={() => onTabPress(item.id)}>
            <Icon
              name={item.icon}
              size={22}
              color={isActive ? colors.navActive : colors.navInactive}
              strokeWidth={isActive ? 2.2 : 1.6}
            />
            <Text
              style={[
                styles.tabLabel,
                {color: isActive ? colors.navActive : colors.navInactive},
                isActive && styles.tabLabelActive,
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 11,
    letterSpacing: 0.1,
  },
  tabLabelActive: {
    fontWeight: '600',
  },
});
