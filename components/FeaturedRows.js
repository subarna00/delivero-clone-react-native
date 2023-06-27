import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

const FeaturedRows = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 px-4 text-xm">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant Cards */}
        <ResturantCard
          id={12}
          title="this is test title"
          rating={4.5}
          genre="Japanese"
          address="Ratopul"
          imgUrl="https://links.papareact.com/gn7"
          short_description="this is short test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={12}
          title="this is test title"
          rating={4.5}
          genre="Japanese"
          address="Ratopul"
          imgUrl="https://links.papareact.com/gn7"
          short_description="this is short test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ResturantCard
          id={12}
          title="this is test title"
          rating={4.5}
          genre="Japanese"
          address="Ratopul"
          imgUrl="https://links.papareact.com/gn7"
          short_description="this is short test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
