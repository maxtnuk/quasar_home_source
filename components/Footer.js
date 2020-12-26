import React from 'react';
import { Text,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  disclaimer: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    lineHeight: 40,
  },
});

export default function Footer() {
  return (
    <Text type="lightGray" style={styles.disclaimer}>
      i am header
    </Text>
  );
};
