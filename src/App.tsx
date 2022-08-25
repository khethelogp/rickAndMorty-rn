/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react'

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { CharactersScreen, HomeScreen } from './screens'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { rickAndMortyApi } from './lib'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Provider store={store}>
      <ApiProvider api={rickAndMortyApi}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {/* <HomeScreen /> */}
          <CharactersScreen />
        </SafeAreaView>
      </ApiProvider>
    </Provider>
  )
}

export default App
