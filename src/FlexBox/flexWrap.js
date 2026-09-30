import { SafeAreaView, View, Text } from "react-native";

const data = [
  "demon",
  "rishi i am good",
  "hii raj how are you",
  "very very long text",
  "it's time to study",
  "work hard",
  "work samrt"
];

const FlexWrap = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#f4c5c5",
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: "orange",
                padding: 10,
                margin: 5,
              }}
            >
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default FlexWrap;