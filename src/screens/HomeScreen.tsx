/* eslint-disable prettier/prettier */
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { Categories, Header, ItemCard, SearchBar } from '../components';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  const filteredCoffeeData = useSelector((state: any) => state?.filteredCoffeeData);
  const beanList = useSelector((state: any) => state?.beanList);
  const bottomTabHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
       >
        <Text style={styles.headingText}>{'Find the best\ncoffee for you'}</Text>
        <SearchBar />
        <Categories />
        {
          filteredCoffeeData?.length > 0 ?
            <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.coffeeListStyle}
              data={filteredCoffeeData}
              renderItem={({item}) => (
                <ItemCard
                  key={item.id}
                  id = {item.id}
                  index = {item.index}
                  type = {item.type}
                  roasted = {item.roasted}
                  imagelink_square = {item.imagelink_square}
                  name = {item.name}
                  special_ingredient = {item.special_ingredient}
                  average_rating = {item.average_rating}
                  price = {item.prices[2]}
                  buttonPressHandler = {() => {}}
              />
              )}
             />
        : <View style={styles.noCoffeeContainer}>
          <Text style={styles.noCoffeeText}>No Coffee to show.</Text>
        </View>
        }
        <Text style={styles.beansTitle}>Coffee beans</Text>
        <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.coffeeListStyle}
              data={beanList}
              renderItem={({item}) => (
                <ItemCard
                  key={item.id}
                  id = {item.id}
                  index = {item.index}
                  type = {item.type}
                  roasted = {item.roasted}
                  imagelink_square = {item.imagelink_square}
                  name = {item.name}
                  special_ingredient = {item.special_ingredient}
                  average_rating = {item.average_rating}
                  price = {item.prices[2]}
                  buttonPressHandler = {() => {}}
              />
              )}
             />
             <View style={{height: bottomTabHeight}} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.primaryBlackHex,
    flex:1,
  },
  headingText:{
    color:COLORS.primaryWhiteHex,
    paddingHorizontal:SPACING.space_30,
    fontSize:FONTSIZE.size_24,
    fontWeight: '800',
    letterSpacing:1,
  },
  coffeeListStyle:{
    paddingHorizontal: SPACING.space_16,
  },
  beansTitle:{
    fontSize: FONTSIZE.size_18,
    color:COLORS.primaryWhiteHex,
    paddingHorizontal: SPACING.space_30,
    marginTop:SPACING.space_10,
  },
  noCoffeeContainer:{
    height:SPACING.space_36 * 5,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  noCoffeeText:{
    color:COLORS.primaryWhiteHex,
  },
});
