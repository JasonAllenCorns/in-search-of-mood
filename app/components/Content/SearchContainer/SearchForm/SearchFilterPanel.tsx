"use client";
import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";

export default function SearchFilterPanel({
  children,
}: {
  children: React.ReactNode;
}) {

/* TODO: see notes re: Provider */



  const [panelToggle, setPanelToggle] = useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={panelToggle}
      onOpenChange={setPanelToggle}
    >
      <Collapsible.Trigger asChild>
        <button className="IconButton">
          {panelToggle ? <Cross2Icon /> : <RowSpacingIcon />}
        </button>
      </Collapsible.Trigger>
      {children}
    </Collapsible.Root>
  );
}
