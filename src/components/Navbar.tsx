import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "../pages/landingpage.css";
import { Flex, Text, Button, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";
import { scrollToContact } from "../utils/landingPage.utils";
import type { NavbarProps } from "../types/navbar.types";

export default function Navbar({ isScrolled, isClicked }: NavbarProps) {
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <>
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
                  onClick={() => {
                    item === "Contact us" && scrollToContact();
                    item === "About us" && isClicked();
                  }}
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
          {/* new comment */}
          <a
            href="https://github.com/SeanArnisto/nutrivision-frontend-main/releases/download/1.0.1/Nutrixtract.apk
"
            download
          >
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
          </a>
        </Flex>
      </Flex>
    </>
  );
}
