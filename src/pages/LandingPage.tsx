import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "../pages/landingpage.css";
import { AppShell, Image, Flex, Text, Stack, Button } from "@mantine/core";
import phone from "../assets/landing-page-phone.png";
import logo from "../assets/nutri-logo.png";

export default function LandingPage() {
  return (
    <div>
      <AppShell
        padding={"md"}
        header={{ height: 50 }}
        style={{
          backgroundImage: "linear-gradient(to top left, #C6D870, #8FA31E)",
        }}
      >
        <AppShell.Header style={{ background: "transparent", border: 0 }}>
          <Flex justify={"flex-end"} mr={26} align="center" h="100%" gap={"xl"}>
            <Text
              className="nav-link"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: 18,
                fontWeight: 500,
                cursor: "pointer",
                marginRight: 24,
              }}
            >
              Home
            </Text>
            <Text
              className="nav-link"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: 18,
                fontWeight: 500,
                cursor: "pointer",
                marginRight: 24,
              }}
            >
              About us
            </Text>
            <Text
              className="nav-link"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: 18,
                fontWeight: 500,
                cursor: "pointer",
                marginRight: 0,
              }}
            >
              Contact us
            </Text>
            <Button
              mt={4}
              className="download-btn-nav"
              size="md"
              variant="filled"
              color="#556B2F"
              radius={"xl"}
              style={{fontFamily: 'Montserrat, sans-serif'}}
            >
              Download
            </Button>
          </Flex>
        </AppShell.Header>
        <AppShell.Main>
          <Flex>
            <Stack justify="center" ml={32} mb={"120"}>
              <Image src={logo} w={"60%"} />
              <Text
                ml={12}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 24,
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                }}
              >
                {<b>Your daily nutrition tracker</b>}
              </Text>
              <Text
                ml={12}
                mb={17}
                ta="justify"
                mt={4}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.6,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
                }}
              >
                Track your daily carbs, protein, and sodium with ease.
                {<b> Nutrixtract</b>} insights you need to make smarter food
                choices.
              </Text>
              {/* Call to Action Buttons  */}
              <Flex justify={"flex-start"} gap={"md"} ml={9}>
                {/* Download Button */}
                <Button
                  className="download-btn"
                  size="lg"
                  variant="filled"
                  color="#556B2F"
                  radius={"xl"}
                >
                  Download now
                </Button>
                {/* Learn more Button next time na siguro to lagyan */}
                <Button
                  className="learn-more-btn"
                  size="lg"
                  variant="outline"
                  color="white"
                  radius={"xl"}
                >
                  Learn more
                </Button>
              </Flex>
            </Stack>
            <Image src={phone} w={"52%"} pt={32} ml="auto"></Image>
          </Flex>
        </AppShell.Main>
      </AppShell>
    </div>
  );
}
