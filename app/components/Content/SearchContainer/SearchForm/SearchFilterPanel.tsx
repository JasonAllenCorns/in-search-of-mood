"use client";
import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Tabs from "@radix-ui/react-tabs";
import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";
import { useRecommendationsContext } from "context/RecommendationsProvider";
import TempoSliderComponent from "./SearchFormComponents/TempoSliderComponent";
import GenreSelectComponent from "./SearchFormComponents/GenreSelectComponent";

export default function SearchFilterPanel() {
  /* TODO: see notes re: Provider */
  const { recFormState } = useRecommendationsContext() || {};
  const [panelToggle, setPanelToggle] = useState(false);

  const handleButtonClick: () => void = () => {
    console.log('(jason.corns) --------------------------------------- start group: recFormState');
    console.log('(jason.corns) logged details from ~/Sites/in-search-of-mood/app/components/Content/SearchContainer/SearchForm/SearchFilterPanel.tsx');
    console.log("(jason.corns) recFormState", recFormState);
    console.log('(jason.corns) ----------------------------------------- end group: recFormState');
  }
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={panelToggle}
      onOpenChange={setPanelToggle}
    >
      <Grid
        columns="1"
        gap="3"
        width="auto"
      >
        <div>
          <Button onClick={() => handleButtonClick()}
        >Click Here</Button>
        </div>
        <Tabs.Root defaultValue="genreTab">
          <Tabs.List aria-label="Select recommendations seed values">
            <Tabs.Trigger value="genreTab">Select some genres</Tabs.Trigger>
            <Tabs.Trigger value="artistTab">
              Select an artist or two
            </Tabs.Trigger>
            <Tabs.Trigger value="trackTab">Start off from a track</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="genreTab">
            <GenreSelectComponent />
          </Tabs.Content>
          <Tabs.Content value="artistTab"></Tabs.Content>
          <Tabs.Content value="trackTab"></Tabs.Content>
        </Tabs.Root>
      </Grid>
      <Grid
        columns="3"
        gap="3"
        width="auto"
      >
        <TempoSliderComponent />
      </Grid>
      <Collapsible.Trigger asChild>
        <Flex gap="3">
          <Box width="9">
            <button className="IconButton">
              {panelToggle ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </Box>
          <Box>
            <Text>More filters</Text>
          </Box>
        </Flex>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <Grid
          columns="3"
          gap="3"
          width="auto"
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </Grid>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
