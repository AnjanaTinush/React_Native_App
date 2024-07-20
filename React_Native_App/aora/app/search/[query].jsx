import { View, Text } from 'react-native'
import { useLocalSearchParams } from "expo-router";
import React from 'react'

const Search = () => {
  const { query } = useLocalSearchParams();
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search