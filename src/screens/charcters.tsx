import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { rickAndMortyApi, useGetAllCharactersQuery } from '@/lib'
import tw from 'twrnc'
import { Character } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'

const CharactersScreen = () => {
  const [page, setPage] = useState(1)
  const {
    data: characters,
    isLoading,
    isSuccess,
    isFetching
  } = useGetAllCharactersQuery(page)
  const listData = isSuccess && characters['results']

  const renderItem = (props: any) => {
    const { item } = props
    return <Character character={item} />
  }

  const renderLoader = () => {
    return (
      <View style={tw`flex items-center justify-center`}>
        <ActivityIndicator size="large" color="#ccc" />
      </View>
    )
  }

  const loadMoreItems = () => {
    setPage(page + 1)
    isFetching
    !isLoading
  }

  if (isLoading) return <ActivityIndicator size="large" />
  return (
    <SafeAreaView>
      <View style={tw`w-full h-full p-3`}>
        {/* <Text style={tw`text-white`}>{JSON.stringify(characters)}</Text> */}
        <FlatList
          data={listData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0}
        />
      </View>
    </SafeAreaView>
  )
}

export default CharactersScreen
