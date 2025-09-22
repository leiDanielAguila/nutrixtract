import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import {
  Flex,
  Text,
  Stack,
  TextInput,
  Box,
  Textarea,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconUser } from "@tabler/icons-react";

export default function ContactUs() {
  const emailIcon = <IconAt size={16} />;
  const nameIcon = <IconUser size={16} />;
  const contactUsForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      fullName: "",
      email: "",
      concern: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      fullName: (value) =>
        value.length < 3 ? "Name must be at least 2 characters" : null,
      concern: (value) =>
        value.length < 3 ? "Please enter your concern" : null,
    },
  });

  const handleFormSubmit = (values: typeof contactUsForm.values) => {
    console.log(values);
  };

  return (
    <>
      <Flex 
        mt={48} 
        direction={{ base: "column", md: "row" }}
        px={{ base: 16, md: 0 }}
        gap={{ base: 24, md: 0 }}
      >
        <Stack 
          gap="md" 
          w={{ base: "100%", md: "40%" }} 
          ml={{ base: 0, md: 34 }} 
          mr={{ base: 0, md: 64 }}
        >
          <Text
            fw={700}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              fontSize: window?.innerWidth < 768 ? 20 : 24,
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            Contact Us
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
            Got a question? We'd love to hear from you! Whether you need help,
            have an idea, or just want to say hello, feel free to send us a
            message.
          </Text>
          <Text 
            c="#556B2F" 
            fw="700" 
            style={{ fontFamily: "Montserrat" }}
            ta={{ base: "center", md: "left" }}
          >
            nutrixtract@gmail.com
          </Text>
        </Stack>
        <form onSubmit={contactUsForm.onSubmit(handleFormSubmit)}>
          <Box w={{ base: "100%", md: 550 }}>
            <Stack>
              <TextInput
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.6,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
                  fontSize: window?.innerWidth < 768 ? 14 : 16,
                }}
                key={contactUsForm.key("fullName")}
                {...contactUsForm.getInputProps("fullName")}
                withAsterisk
                leftSectionPointerEvents="none"
                leftSection={nameIcon}
                label="Full Name"
                placeholder="Your name"
              />
              <TextInput
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.6,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
                  fontSize: window?.innerWidth < 768 ? 14 : 16,
                }}
                key={contactUsForm.key("email")}
                {...contactUsForm.getInputProps("email")}
                withAsterisk
                leftSectionPointerEvents="none"
                leftSection={emailIcon}
                label="Email"
                placeholder="Your email"
              />
              <Textarea
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.6,
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
                  fontSize: window?.innerWidth < 768 ? 14 : 16,
                }}
                autosize
                minRows={2}
                maxRows={6}
                key={contactUsForm.key("concern")}
                {...contactUsForm.getInputProps("concern")}
                label="Your concern"
                placeholder="How can we help?"
              />
              <Button
                fullWidth
                radius={"md"}
                variant="filled"
                color="#556B2F"
                type="submit"
              >
                Submit
              </Button>
              <Text ta={{ base: "center", md: "justify" }}>
                By contacting us, you agree to our {<b>Terms of service</b>} and{" "}
                {<b>Privacy Policy</b>}
              </Text>
            </Stack>
          </Box>
        </form>
      </Flex>
    </>
  );
}