import { Container, Flex, Slider, Text } from "@radix-ui/themes";

export default function EnergySliderComponent() {
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
        <Text>Mellow</Text>
        <Text>Frenetic</Text>
      </Flex>
    </Container>
  );
}
