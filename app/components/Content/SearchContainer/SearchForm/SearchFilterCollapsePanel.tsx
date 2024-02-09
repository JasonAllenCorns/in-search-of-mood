"use client";
import React from "react";

export default function SearchFilterCollapsePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4>Collapsible</h4>
      <hr />
      {children}
      <hr />
    </div>
  );
}
