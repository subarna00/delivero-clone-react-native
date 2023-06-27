import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="testing"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="testing"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="testing"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="testing"
        />
        <CategoryCard
          imgUrl="https://links.papareact.com/gn7"
          title="testing"
        />
      </ScrollView>
    </View>
  );
};

export default Categories;
