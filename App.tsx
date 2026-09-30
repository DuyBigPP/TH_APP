import React, {useState, useMemo} from 'react';
import {ScrollView, StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from './src/components/Header';
import StatsSection from './src/components/StatsSection';
import SearchBar from './src/components/SearchBar';
import SubjectList from './src/components/SubjectList';
import BottomNav from './src/components/BottomNav';
import {SUBJECTS} from './src/data/mockData';
import {LightTheme, DarkTheme} from './src/theme/colors';

function HomeScreen() {
  const insets = useSafeAreaInsets();
  const systemColorScheme = useColorScheme();
  const [userTheme, setUserTheme] = useState<'light' | 'dark' | null>(null);

  const activeTheme = userTheme ?? (systemColorScheme === 'dark' ? 'dark' : 'light');
  const isDark = activeTheme === 'dark';
  const colors = isDark ? DarkTheme : LightTheme;

  const toggleTheme = () => {
    setUserTheme(prev => {
      const current = prev ?? (systemColorScheme === 'dark' ? 'dark' : 'light');
      return current === 'dark' ? 'light' : 'dark';
    });
  };

  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('n1');

  const filteredSubjects = useMemo(() => {
    if (!searchText.trim()) return SUBJECTS;
    const keyword = searchText.toLowerCase();
    return SUBJECTS.filter(subject =>
      subject.name.toLowerCase().includes(keyword),
    );
  }, [searchText]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.background, paddingTop: insets.top},
      ]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Header colors={colors} isDark={isDark} onToggleTheme={toggleTheme} />
        <StatsSection colors={colors} />
        <SearchBar
          colors={colors}
          value={searchText}
          onChangeText={setSearchText}
        />
        <SubjectList colors={colors} data={filteredSubjects} />
      </ScrollView>

      <BottomNav
        colors={colors}
        activeTab={activeTab}
        onTabPress={setActiveTab}
        bottomInset={insets.bottom}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 10,
  },
});
