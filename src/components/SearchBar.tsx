import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {ThemeColors} from '../theme/colors';
import Icon from './Icon';

interface Props {
  colors: ThemeColors;
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({colors, value, onChangeText}: Props) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.searchBg, borderColor: colors.border},
      ]}>
      <Icon name="search" size={18} color={colors.textSecondary} />
      <TextInput
        style={[styles.input, {color: colors.text}]}
        placeholder="Tìm kiếm môn học..."
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => onChangeText('')}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <Icon name="x" size={16} color={colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    paddingHorizontal: 14,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 0,
  },
});
