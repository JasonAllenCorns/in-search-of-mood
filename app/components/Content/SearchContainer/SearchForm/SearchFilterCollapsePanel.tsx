"use client";
import React from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

export default function SearchFilterCollapsePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Collapsible.Content>
    {children}
    </Collapsible.Content>
  );
}
