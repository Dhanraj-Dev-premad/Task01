import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';


type CustomCheckBoxProps = {
  label?: string
  value?: boolean
  onChange?: (val: boolean) => void
  error?: string
}

const CustomCheckBox = ({
  label,
  value = false,
  onChange,
  error,
}: CustomCheckBoxProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Pressable onPress={() => onChange?.(!value)} hitSlop={8}>
          <MaterialDesignIcons
            name={value ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={30}
            color={error ? '#E53935' : '#0857A0'}
          />
        </Pressable>

        {label && <Text style={styles.label}>{label}</Text>}
      </View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

export default CustomCheckBox
const styles = StyleSheet.create ({
  wrapper: {
    // marginVertical: scale(4),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: scale(18),
  },

  label: {
    marginLeft: (8),
    fontSize: (14),
    
    color: '#000',
    flexShrink: 1,     
  },

  errorText: {
    marginLeft: (46),
    marginTop: (4),
    fontSize: (13),
    color: '#E53935',
  },
})