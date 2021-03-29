import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { multiply } from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./slide";
import Subslide from "./sub-slide";

interface ComponentNameProps {}

const BORDER_RADIUS = 75;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // borderTopRightRadius: 75,
  },
  slider: {
    height: SLIDE_HEIGHT,
    // opacity: 0.34,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "white",
  },
});

const slides = [
  {
    title: "Health",
    subtitle: "Monitor your Pets Health",
    desc: "Petting a dog is known to reduce your stress and also calm anxiety.",
    color: "#77AF9C",
  },
  {
    title: "Impactful",
    subtitle: "Largy Community of Users",
    desc:
      "You are responsible for their well-being and in being so, you have to change your lifestyle to fit them and their needs in too.",
    color: "#F9CDAD",
  },
  {
    title: "Protection",
    subtitle: "Never Worry outside the Home",
    desc: "Always know where your Pet is located",
    color: "#FEC9C9",
  },
  {
    title: "Happiness",
    subtitle: "A Happy Home results in a Happy Pet",
    desc: "Love your Pet and it'll be your ultimate companion ",
    color: "#FFDA8E",
  },
];

function Onboarding() {
  const scroll = React.useRef<ScrollView>(null);
  // const x = useValue(0);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, desc }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, desc }}
            />
          ))}
        </Animated.View>
      </View>
    </Animated.View>
  );
}

export default Onboarding;
