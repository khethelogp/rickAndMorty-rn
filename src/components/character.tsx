import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import tw from 'twrnc'
import { CharacterModel } from '@/types'
import { useGetCharacterByNameQuery } from '@/lib'

type Props = {
  character: CharacterModel
}

const Character = ({ character }: Props) => {
  // const { data, isLoading } = useGetCharacterByNameQuery(1)

  // if (isLoading) <ActivityIndicator size="large" />
  return (
    <View style={[tw`flex flex-row w-full bg-[#3b3e43] rounded m-2`]}>
      {/* character image */}
      <Image source={{ uri: character.image }} style={[tw`w-[40%] h-50`]} />

      {/* character details */}
      <View style={tw`p-3 flex justify-between`}>
        <Text style={tw`text-white text-2xl font-bold`}>{character.name}</Text>
        <View style={tw`flex flex-row items-center`}>
          <Text
            style={tw`${
              character.status == 'Alive' ? `text-[#55cc44]` : `text-[#d63d2e]`
            } text-xl font-black mr-2`}
          >
            •
          </Text>
          <Text style={tw`text-white text-md`}>
            {`${character.status} -  ${character.species}`}
          </Text>
        </View>

        <View style={tw`flex flex-col py-2`}>
          <Text style={tw`text-[#aaa]`}>Last known location:</Text>
          <Text style={tw`text-white`}>{character.location.name}</Text>
        </View>

        <View style={tw`flex flex-col py-2`}>
          <Text style={tw`text-[#aaa]`}>First seen in:</Text>
          <Text style={tw`text-white`}>{character.episode[0].slice(-2)}</Text>
        </View>
      </View>
    </View>
  )
}

export default Character
