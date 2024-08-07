/* eslint-disable prettier/prettier */
import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { BORDERRADIUS, SPACING } from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/app_images/avatar.png')} style={styles.profilePic} />
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
    container:{
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: BORDERRADIUS.radius_8,
    },
    profilePic:{
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: BORDERRADIUS.radius_8,
    },

});
