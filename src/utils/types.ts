/* eslint-disable prettier/prettier */

import { ImageProps } from 'react-native';

export interface HeaderProps {
  title?: String
}

export interface GradientBgIconProps {
    name: String,
    color: String,
    size: Number,
}

export interface ItemCardProps {
  id: string,
  index: number,
  type: string,
  roasted: string,
  imagelink_square:ImageProps,
  name:string,
  special_ingredient:string,
  average_rating: number,
  price: any,
  buttonPressHandler: any,
}

export interface BGIconProps {
  name: string,
  size: number,
  color: string,
  bgColor: string,
}