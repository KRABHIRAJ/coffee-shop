/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BORDERRADIUS, COLORS, SPACING} from '../../theme/theme';
import CustomIcon from '../CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCoffeeData } from '../../store/dataSlice';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const coffeeList = useSelector((state: any) => state.coffeeList);

  useEffect(() => {
    if(searchText.length === 0){
      dispatch(setFilteredCoffeeData(coffeeList));
      return;
    }

    let timer;

    timer = setTimeout(() => {
      const filteredCoffee = coffeeList?.filter((data: any) => data.name.toLowerCase().includes(searchText.toLowerCase()));
      dispatch(setFilteredCoffeeData(filteredCoffee));
    },300);

    return () => clearTimeout(timer);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
  return (
    <View style={styles.container}>
        <View style={styles.searchIconContainer}>
            <CustomIcon
                name="search"
                size={16}
                color={
                searchText.length > 0
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryLightGreyHex
                }
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                placeholder="Enter to search"
                placeholderTextColor={COLORS.secondaryLightGreyHex}
            />
        </View>

    <TouchableOpacity onPress={() => setSearchText('')}>
      {
        searchText.length > 0 &&
        <CustomIcon name="close" size={16} color={COLORS.primaryLightGreyHex} />
      }
    </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryGreyHex,
    marginHorizontal: SPACING.space_30,
    marginTop: SPACING.space_20,
    paddingLeft: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:SPACING.space_20,
  },
  searchIconContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  textInput: {
    marginLeft:SPACING.space_8,
    color: COLORS.primaryWhiteHex,
  },
});
