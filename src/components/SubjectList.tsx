import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Subject} from '../data/mockData';
import {ThemeColors} from '../theme/colors';
import Icon from './Icon';

interface Props {
  colors: ThemeColors;
  data: Subject[];
}

function SubjectCard({item, colors}: {item: Subject; colors: ThemeColors}) {
  const isCompleted = item.progress === 100;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.card, {backgroundColor: colors.card, borderColor: colors.border}]}>
      <View style={styles.cardTop}>
        <View style={[styles.iconBox, {backgroundColor: colors.primary + '12'}]}>
          <Icon name={item.icon} size={22} color={colors.primary} />
        </View>

        <View style={styles.info}>
          <Text style={[styles.subjectName, {color: colors.text}]}>
            {item.name}
          </Text>
          <Text style={[styles.lessonCount, {color: colors.textSecondary}]}>
            {item.completedLessons}/{item.totalLessons} bài học
          </Text>
        </View>

        {isCompleted ? (
          <View style={styles.completedBadge}>
            <Icon name="circle-check-big" size={14} color="#10B981" />
            <Text style={styles.completedText}>Xong</Text>
          </View>
        ) : (
          <Text style={[styles.progressPercent, {color: colors.primary}]}>
            {item.progress}%
          </Text>
        )}
      </View>

      <View style={[styles.progressBar, {backgroundColor: colors.progressBg}]}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${item.progress}%`,
              backgroundColor: isCompleted ? '#10B981' : colors.primary,
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function SubjectList({colors, data}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, {color: colors.text}]}>
          Môn học của bạn
        </Text>
        <TouchableOpacity>
          <Text style={[styles.seeAll, {color: colors.primary}]}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => <SubjectCard item={item} colors={colors} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  seeAll: {
    fontSize: 13,
    fontWeight: '600',
  },
  card: {
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  subjectName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  lessonCount: {
    fontSize: 13,
  },
  progressPercent: {
    fontSize: 15,
    fontWeight: '700',
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B98114',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  completedText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '600',
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
});
