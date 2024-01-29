"use client";
import { Box, Section } from "@radix-ui/themes";
import SearchFilterPanel from "./SearchFilterPanel";
import * as Form from '@radix-ui/react-form';

export default async function SearchForm() {
  return (
    <Section
      size="1"
      display="block"
      style={{border: "1px solid green"}}
    >
      <Box p="3">
        <Form.Root>
          <SearchFilterPanel />
        </Form.Root>
      </Box>
    </Section>
  );
}
