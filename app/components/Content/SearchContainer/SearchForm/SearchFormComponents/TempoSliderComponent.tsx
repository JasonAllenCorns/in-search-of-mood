import { Container, Flex, Slider, Text } from "@radix-ui/themes";

export default async function TempoSliderComponent() {
  return (
    <Container>
      <Flex
        direction="column"
        align="stretch"
        justify="center"
        wrap="nowrap"
        py="4"
        style={{ width: "100%" }}
      >
        <Slider
          defaultValue={[50]}
          variant="surface"
          radius="small"
        />
      </Flex>
      <Flex
        direction={"row"}
        style={{ width: "100%" }}
        wrap="nowrap"
        justify="between"
      >
        <Text>Slow</Text>
        <Text>Fast</Text>
      </Flex>
    </Container>
  );
}
