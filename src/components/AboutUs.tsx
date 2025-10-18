import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import { Flex, Text, Stack, Image } from "@mantine/core";

import team from "../assets/teamscaffy.png";
import { useMediaQuery } from "@mantine/hooks";

export default function AboutUs() {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Flex
        mt={128}
        direction={{ base: "column", md: "row" }}
        px={{ base: 16, md: 0 }}
        gap={{ base: 24, md: 0 }}
        mb={{base: 24, md: 54}}
        mih={"80vh"}
      >
        <Stack
          gap="md"
          align={isMd ? "flex-start" : "center"}
          ml={{ base: 0, md: 34 }}
          mr={{ base: 0, md: 84 }}
        >
          <Text
            fw={700}
            ta="right"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: window?.innerWidth < 768 ? 20 : 24,
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            About Us
          </Text>
          <Text
            ta={{ base: "center", md: "justify" }}
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: 1.6,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
              fontSize: window?.innerWidth < 768 ? 14 : 16,
            }}
          >
            Nutrixtract is an application that tracks your daily carbs, sodium,
            and protein intake. It provides means for users to visually
            understand if their intakes are safe compared to their actual
            recommended intake based on age, weight, and height.
          </Text>
          <Text
            ta={{ base: "center", md: "justify" }}
            mt={12}
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: 1.6,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
              fontSize: window?.innerWidth < 768 ? 14 : 16,
            }}
          >
            This application is a thesis project of students from the University
            of the East, the idea came from nutritional labels from products
            being a headache to understand, to alleviate this confusion
            Nutrixtract was created. One scan of the nutritional label will give
            you the corresponding carbohydrates, sodium, and protein.
          </Text>
        </Stack>
        <Image
          src={team}
          fit="contain"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "100%", md: "50vh" }} 
          maw="100%"
          alt="Nutrixtract Team"
          mr={34}
        />
      </Flex>
    </>
  );
}
