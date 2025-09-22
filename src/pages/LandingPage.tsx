import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "../pages/landingpage.css";
import { useState, useEffect } from "react";
import { AppShell, Image, Flex, Text, Stack, Button, Box } from "@mantine/core";
import phone from "../assets/landing-page-phone.png";
import logo from "../assets/nutri-logo.png";
import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import ContactUs from "../components/ContactUs";
import clsx from "clsx";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { height } = useViewportSize();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMd = useMediaQuery("(min-width: 768px)");

  const scrollToContact = () => {
    const contactSection = document.querySelector(".contact-us");
    if (contactSection) {
      const headerOffset = isMd ? 50 : 60; // Match your header height
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <AppShell
        padding={{ base: "xs", md: "md" }}
        header={{ height: { base: 60, md: 50 } }}
        style={{
          backgroundImage: "linear-gradient(to top left, #C6D870, #8FA31E)",
        }}
      >
        <AppShell.Header
          className="header-container"
          style={{
            background: isScrolled
              ? "rgba(143, 163, 30, 0.95)" // Scrolled color (with opacity)
              : "transparent", // Original transparent
            border: 0,
            transition: "background-color 0.9s ease", // Smooth transition
            backdropFilter: isScrolled ? "blur(10px)" : "none", // Optional blur effect
          }}
        >
          <Flex
            className="header-container"
            justify={"space-between"}
            align="center"
            h="100%"
            px={{ base: 16, md: 26 }}
          >
            {/* Logo - Shows on mobile always, on desktop only when scrolled */}
            <Box display={{ base: "block", md: "block" }}>
              <Text
                className={clsx("nav-link", "nav-logo", {
                  visible: !isMd || isScrolled, // always visible in mobile, scroll-gated in desktop
                })}
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

            {/* Right side navigation container */}
            <Flex
              className="nav-items-container"
              justify="flex-end"
              align="center"
              gap={{ base: "sm", md: "xl" }}
              wrap="wrap"
            >
              {/* Desktop Navigation - Hidden on mobile */}
              <Box display={{ base: "none", md: "block" }}>
                <Flex gap="xl">
                  {["Home", "About us", "Contact us"].map((item) => (
                    <Text
                      key={item}
                      className="nav-link"
                      onClick={() =>
                        item === "Contact us" ? scrollToContact() : null
                      }
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
          </Flex>
        </AppShell.Header>
        <AppShell.Main>
          <Flex direction={{ base: "column", md: "row" }}>
            <Stack
              justify="center"
              align={isMd ? "flex-start" : "center"}
              ml={isMd ? 32 : 0}
              mb={isMd ? 120 : 40}
            >
              <Image
                src={logo}
                w={{ base: "80%", md: "60%" }}
                maw={{ base: 250, md: 300 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <Text
                  ml={{ base: 0, md: 12 }}
                  ta={{ base: "center", md: "left" }}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: window?.innerWidth < 768 ? 20 : 24,
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <b>Your daily nutrition tracker</b>
                </Text>
              </motion.div>
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
                Monitor daily carbs, protein, and sodium with ease.
                <b> Nutrixtract</b> insights you need to make smarter food
                choices.
              </Text>
              <Box ml={12}>
                <TypeAnimation
                  sequence={[
                    "Track your daily carbs...",
                    2000,
                    "Track your protein...",
                    2000,
                    "Track your sodium...",
                    2000,
                  ]}
                  speed={70}
                  repeat={Infinity}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    fontSize: window?.innerWidth < 768 ? 20 : 24,
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                />
              </Box>
              {/* Call to Action Buttons  */}
              <Flex
                justify={{ base: "center", md: "flex-start" }}
                gap="md"
                ml={{ base: 0, md: 9 }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* Download Button */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2.2, delay: 0.2 }}
                >
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
                </motion.div>
                {/* Learn more Button */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2.2, delay: 0.2 }}
                >
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
                </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-us">
              <ContactUs />
            </div>
          </motion.div>
        </AppShell.Main>
      </AppShell>
    </div>
  );
}
