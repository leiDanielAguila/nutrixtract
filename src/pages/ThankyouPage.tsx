import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import CircleLogo from "../assets/circle-logo.svg";

import {
  AppShell,
  AppShellMain,
  Center,
  Text,
  Image,
  Stack,
  Button
} from "@mantine/core";

export default function ThankyouPage() {
  return (
    <AppShell
      padding={0}
      style={{
        backgroundImage: "linear-gradient(to top left, #C6D870, #8FA31E)",
        minHeight: "100vh",
      }}
    >
      <AppShellMain>
        <Center w={"100%"} h={"100vh"}>
          <Stack gap={24} align="center" px={20}>
            <Image
              src={CircleLogo}
              w={200}
              alt="Nutrixtract logo"
              style={{ filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.85))" }}
            />
            <Text
              ta="center"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: window?.innerWidth < 768 ? 20 : 24,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <b>Welcome to Nutrixtract</b>
            </Text>
            <Text
              mt={8}
              ta="center"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.6,
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
                fontSize: window?.innerWidth < 768 ? 14 : 16,
              }}
            >
              Your <b>Email</b> has been confirmed, feel free to open the
              application again.
            </Text>
            <Button
              className="download-btn"
              size="lg"
              variant="filled"
              color="#556B2F"
              radius={"xl"}
              w="auto"
            >
              Go to Website
            </Button>
          </Stack>
        </Center>
      </AppShellMain>
    </AppShell>
  );
}