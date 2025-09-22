import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "../pages/landingpage.css";
import { AppShell, Image, Flex, Text, Stack, Button, Box } from "@mantine/core";
import phone from "../assets/landing-page-phone.png";
import logo from "../assets/nutri-logo.png";
import { useMediaQuery } from "@mantine/hooks";

export default function LandingPage() {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      <AppShell
        padding={{ base: "xs", md: "md" }}
        header={{ height: { base: 60, md: 50 } }}
        style={{
          backgroundImage: "linear-gradient(to top left, #C6D870, #8FA31E)",
        }}
      >
        <AppShell.Header style={{ backgroundColor: "transparent", border: 0 }}>
          <Flex
            justify={{ base: "space-between", md: "flex-end" }}
            mr={{ base: 16, md: 26 }}
            ml={{ base: 16, md: 0 }}
            align="center"
            h="100%"
            gap={{ base: "sm", md: "xl" }}
            wrap="wrap"
          >
            {/* Mobile Logo - Only shows on mobile */}
            <Box display={{ base: "block", md: "none" }}>
              <Text
                className="nav-link"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Nutrixtract
              </Text>
            </Box>

            {/* Desktop Navigation - Hidden on mobile */}
            <Box display={{ base: "none", md: "block" }}>
              <Flex gap="xl">
                {["Home", "About us", "Contact us"].map((item) => (
                  <Text
                    key={item}
                    className="nav-link"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: 18,
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </Text>
                ))}
              </Flex>
            </Box>

            {/* Download button - Shown on both mobile and desktop */}
            <Button
              className="download-btn-nav"
              size="sm"
              variant="filled"
              color="#556B2F"
              radius="xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Download
            </Button>
          </Flex>
        </AppShell.Header>
        <AppShell.Main>
          <Flex direction={{ base: "column", md: "row" }}>
            <Stack
              justify="center"
              align={isMd ? "flex-start" : "center"}
              ml={isMd ? 32 : 16}
              mb={isMd ? 120 : 40}
            >
              <Image
                src={logo}
                w={{ base: "80%", md: "60%" }}
                maw={{ base: 250, md: 300 }}
              />
              <Text
                ml={{ base: 0, md: 12 }}
                ta={{ base: "center", md: "left" }}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: window?.innerWidth < 768 ? 20 : 24,
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
                }}
              >
                <b>Your daily nutrition tracker</b>
              </Text>
              <Text
                ml={{ base: 0, md: 12 }}
                mb={17}
                ta={{ base: "center", md: "justify" }}
                mt={4}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.6,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
                  fontSize: window?.innerWidth < 768 ? 14 : 16,
                }}
              >
                Track your daily carbs, protein, and sodium with ease.
                <b> Nutrixtract</b> insights you need to make smarter food
                choices.
              </Text>
              {/* Call to Action Buttons  */}
              <Flex
                justify={{ base: "center", md: "flex-start" }}
                gap="md"
                ml={{ base: 0, md: 9 }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* Download Button */}
                <Button
                  className="download-btn"
                  size="lg"
                  variant="filled"
                  color="#556B2F"
                  radius={"xl"}
                  w={{ base: "100%", sm: "auto" }}
                >
                  Download now
                </Button>
                {/* Learn more Button */}
                <Button
                  className="learn-more-btn"
                  size="lg"
                  variant="outline"
                  color="white"
                  radius={"xl"}
                  w={{ base: "100%", sm: "auto" }}
                >
                  Learn more
                </Button>
              </Flex>
            </Stack>
            <Image
              className="phone-image"
              src={phone}
              w={{ base: "90%", md: "52%" }}
              pt={{ base: 20, md: 32 }}
              ml={{ base: 0, md: "auto" }}
            />
          </Flex>
        </AppShell.Main>
      </AppShell>
    </div>
  );
}
