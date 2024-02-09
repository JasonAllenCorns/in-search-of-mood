"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Divider,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { ViewfinderCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import TempoSelectionComponent from "./SearchFormComponents/TempoSelectionComponent";
import GenreSelectComponent from "./SearchFormComponents/GenreSelectComponent";
import EnergySliderComponent from "./SearchFormComponents/EnergySliderComponent";

export default function SearchFilterPanel() {
  /* TODO: see notes re: Provider */
  const [panelToggle, setPanelToggle] = useState(false);
  const [selected, setSelected] = useState("genre");

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        <Tabs
          aria-label="Filter Options"
          selectedKey={selected}
          onSelectionChange={(selected) => {
            console.log("(jason.corns) selected", selected);
            const selectedTabKey = (selected || "").toString()
            setSelected(selectedTabKey);
          }}
        >
          <Tab
            key="genre"
            title="By Musical Genre"
          >
            <div className="min-h-32">
              <Card>
                <GenreSelectComponent />
              </Card>
            </div>
          </Tab>
          <Tab
            key="artist"
            title="From an Artist"
          >
            <div className="min-h-32">
            </div>
          </Tab>
          <Tab
            key="track"
            title="From a Track"
          >
          <div className="min-h-32"></div></Tab>
        </Tabs>
      </div>
      <div className="flex flex-row gap-6 px-1">
        <TempoSelectionComponent className="w-4/12"/>
        <div className="px-4 w-1/12">
          <Divider orientation="vertical" className="mx-2" />
        </div>
        <EnergySliderComponent className="w-7/12" />
      </div>
      <Accordion>
        <AccordionItem
          key="anchor"
          aria-label="Anchor"
          indicator={panelToggle ? <XMarkIcon /> : <ViewfinderCircleIcon />}
          title="More filters"
        >
          <div className="grid-cols-3 gap-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
