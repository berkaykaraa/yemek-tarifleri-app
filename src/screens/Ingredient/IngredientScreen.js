import React, { useLayoutEffect } from "react";
import { FlatList, ScrollView, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getIngredientUrl, getRecipesByIngredient, getCategoryName } from "../../data/MockDataAPI";

export default function IngredientScreen(props) {
  const { navigation, route } = props;

  const ingredientId = route.params?.ingredient;
  const ingredientUrl = getIngredientUrl(ingredientId);
  const ingredientName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Tarif", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  return (
      <View>
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
        <Image style={styles.photoIngredient} source={{ uri: "" + ingredientUrl }} />
      </View>
      <Text style={styles.ingredientInfo}>{ingredientName} Tarifi:</Text>
      <View>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={getRecipesByIngredient(ingredientId)} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
      </View>
      </View>
  );
}
