import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'

type Props = {
  title: string
  color?: string
  onPress: () => {}
}

const Button = ({ title = 'Press me', color = 'blue', onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={tw`${
          color === 'white' ? `bg-${color}` : `bg-${color}-500`
        } flex items-center justify-center shadow-lg rounded py-4 px-6 m-2`}
      >
        <Text
          style={tw`${
            color === 'white' ? `text-black` : `text-white`
          } text-xl leading-5 tracking-wider font-bold`}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default Button
