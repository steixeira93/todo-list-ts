import React from 'react';

import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.textBtn}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFDADA',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  textBtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
