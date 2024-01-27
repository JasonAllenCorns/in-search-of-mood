import { Container, Em, Grid, Separator } from "@radix-ui/themes";
import SearchForm from "./SearchForm/SearchForm";

export default async function SearchContainerPanel() {
  return (
    <Container>
      <Em>Find some recommendations</Em>
      <Separator
        my="3"
        size="4"
      ></Separator>
      <SearchForm />
    </Container>
  );
}
