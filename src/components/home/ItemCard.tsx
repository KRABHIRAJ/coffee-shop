/* eslint-disable prettier/prettier */
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ItemCardProps } from '../../utils/types';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../CustomIcon';
import { BGIcon } from '..';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const ItemCard:React.FC<ItemCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
            start={{x:0, y:0}}
            end={{x:1, y:1}}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.LinearGradientCard}
        >
          <ImageBackground
            source={imagelink_square}
            resizeMode="cover"
            style={styles.imageStyle}
          >
            <View style={styles.ratingContainer}>
              <CustomIcon name="star" size={16} color={COLORS.primaryOrangeHex} />
              <Text style={styles.ratingText}>{average_rating}</Text>
            </View>
          </ImageBackground>
          <Text style={styles.cardName}>{name}</Text>
          <Text style={styles.specialIngredient}>{special_ingredient}</Text>
          <View style={styles.cardFooter}>
            <View style={styles.priceContainer}>
              <Text style={[styles.priceText, {color: COLORS.primaryOrangeHex}]}>$</Text>
              <Text style={styles.priceText}>{price.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartBtn}>
              <BGIcon name="add" size={FONTSIZE.size_12} color={COLORS.primaryWhiteHex} bgColor={COLORS.primaryOrangeHex} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container:{
    padding:SPACING.space_12,
  },
  LinearGradientCard:{
    borderRadius:BORDERRADIUS.radius_15,
    padding:SPACING.space_15,
    paddingBottom:SPACING.space_4,
    width:CARD_WIDTH + 30,
  },
  imageStyle:{
    height: CARD_WIDTH,
    width: CARD_WIDTH,
    borderRadius:BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow:'hidden',
    position:'relative',
  },
  ratingText:{
    color:'white',
    fontWeight:'400',

  },
  ratingContainer:{
    flexDirection:'row',
    right:0,
    top:0,
    position:'absolute',
    columnGap:7,
    backgroundColor:COLORS.primaryBlackHex,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:SPACING.space_12,
    borderBottomLeftRadius:BORDERRADIUS.radius_20,
    paddingVertical:SPACING.space_2 * 2,
    opacity:0.6,
  },
  cardName:{
    color:COLORS.primaryWhiteHex,
    fontSize:FONTSIZE.size_18,
  },
  specialIngredient:{
    color:COLORS.secondaryLightGreyHex,
    fontSize:FONTSIZE.size_14,
  },
  cardFooter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:SPACING.space_8,
    marginTop:SPACING.space_10,
  },
  addToCartBtn:{

  },
  priceContainer:{
    flexDirection:'row',
    columnGap:7,
  },
  priceText:{
    color:COLORS.primaryWhiteHex,
    fontWeight:'500',
    fontSize:FONTSIZE.size_20,
  }
});
