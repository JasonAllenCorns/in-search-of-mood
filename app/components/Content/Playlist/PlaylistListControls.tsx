import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text } from "@radix-ui/themes";


type Props = {
  showingHowMany: number;
  total: number;
};
export async function PlaylistListControls({ ...props }: Props) {
  const { showingHowMany, total } = props;
  return (
    <Flex
      direction="row"
      gap="2"
      justify="end"
      my="3"
      mr="2"
    >
      <Text
        size="1"
        as="div"
        align="right"
      >
        Showing {showingHowMany} of {total}
      </Text>
      <IconButton size="2" variant="ghost" style={{cursor: "pointer"}}>
        <TriangleLeftIcon width="16" height="16" />
      </IconButton>
      <IconButton size="2" variant="ghost" style={{cursor: "pointer"}}>
        <TriangleRightIcon width="16" height="16" />
      </IconButton>
    </Flex>
  );
}
