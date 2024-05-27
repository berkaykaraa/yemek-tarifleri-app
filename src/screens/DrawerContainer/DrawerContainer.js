import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="ANASAYFA"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Anasayfa");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="KATEGORİLER"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Kategoriler");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="ARAMA"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
