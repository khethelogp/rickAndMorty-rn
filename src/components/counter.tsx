import React from 'react'
import { View, Text } from 'react-native'
import { useAppSelector, useAppDispatch } from '@/hook'
import tw from 'twrnc'
import { decrement, increment } from '@/redux/features/counterSlice'
import Button from './global/button'

const Counter = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <View style={[tw`flex justify-center items-center w-full h-full`]}>
      <Text style={tw`text-7xl text-white font-black`}>{count}</Text>
      <View>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button
          title="Decrement"
          color="red"
          onPress={() => dispatch(decrement())}
        />
      </View>
    </View>
  )
}

export default Counter
