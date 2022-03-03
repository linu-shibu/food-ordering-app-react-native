import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Tandoori Chicken",
    description: "Amazing chicken dish with tender chicken",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg",
  },
  {
    title: "Tandoori Dry Chicken",
    description: "Amazing chicken dish with tender chicken",
    price: "$19.20",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
  },
  {
    title: "Chilaquiles Special",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg",
  },
];

export default function MenuItem({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  return (
    <View>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.viewMenuItem}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: "lightgray",
                borderRadius: 0,
              }}
              fillColor={"green"}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={2} />
        </View>
      ))}
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={styles.infoStyle}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{
      uri: props.food.image,
    }}
    style={styles.foodImageStyle}
  />
);

const styles = StyleSheet.create({
  infoStyle: {
    width: 240,
    justifyContent: "space-evenly",
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "bold",
  },
  viewMenuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 8,
  },
  foodImageStyle: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
});

{
  /* {foods.map((food, index) => (
  <View key={index}>
    <View style={styles.viewMenuItem}>
      <FoodInfo food={food} />
      <FoodImage food={food} />
    </View>
    <Divider width={2} />
  </View>
))} */
}
