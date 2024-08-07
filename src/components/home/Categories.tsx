/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList } from '../../utils/constants';
import { BORDERRADIUS, COLORS, SPACING } from '../../theme/theme';
import { setFilteredCoffeeData } from '../../store/dataSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const coffeeList = useSelector((state: any) => state.coffeeList);
  const [categories] = useState(getCategoriesList(coffeeList));
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    let filteredData = [];
    if(category === 'All'){
        filteredData = coffeeList;
    }else{
        filteredData = coffeeList?.filter((data: any) => data?.name === category);
    }
    dispatch(setFilteredCoffeeData(filteredData));
  };
  return (
    <View style={styles.container}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainerStyle}
        >
        {
            categories?.map((category) => (
                <TouchableOpacity onPress={() => handleSelectedCategory(category)} key={category}>
                    <Text style={[styles.categoryText, selectedCategory === category && {color: COLORS.primaryOrangeHex}]}>{category}</Text>
                    {selectedCategory === category && <View style={styles.activeItem} />}
                </TouchableOpacity>
            ))
        }
        </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:SPACING.space_30,
    },
    categoryContainerStyle:{
        marginTop:SPACING.space_15,
        columnGap:SPACING.space_15,
    },
    categoryText:{
        color:COLORS.secondaryLightGreyHex,
    },
    activeItem:{
        color:COLORS.primaryOrangeHex,
        height:SPACING.space_10,
        width:SPACING.space_10,
        borderRadius:BORDERRADIUS.radius_25,
        alignSelf:'center',
        marginTop:SPACING.space_8,
    },
});


