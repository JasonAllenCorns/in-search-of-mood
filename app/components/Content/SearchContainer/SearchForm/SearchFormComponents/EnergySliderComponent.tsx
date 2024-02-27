"use client";
import React, { useState } from "react";
import { Slider, Switch } from "@nextui-org/react";
import { useRecommendationsContext } from "context/RecommendationsProvider";

type EnergySliderProps = {
  className?: string;
};

const EnergySliderComponent: React.FC<EnergySliderProps> = ({ className }) => {
  const { recFormData, saveRecFormData, useEnergy, setUseEnergy } =
    useRecommendationsContext() || {};
  const initialEnergyLevel = recFormData?.energy || 0.4;
  const setEnergyLevelValue = (
    energy: number | number[] = recFormData?.energy || 0.4
  ) => {
    const singleEngeryValue = energy?.[0] || energy;
    saveRecFormData?.({ energy: singleEngeryValue });
  };

  return (
    <div className={`container mx-auto ${className || ""}`}>
      <div className="flex flex-row gap-3">
        <Switch
          color="secondary"
          isSelected={useEnergy}
          onValueChange={setUseEnergy}
        />
        <Slider
          isDisabled={!useEnergy}
          size="md"
          step={0.1}
          color="foreground"
          label="Energy"
          showSteps={true}
          maxValue={1}
          minValue={0}
          defaultValue={initialEnergyLevel}
          onChangeEnd={(value) => setEnergyLevelValue(value)}
          getValue={(value) => {
            const singleSelectValue = value?.[0] || value;
            return `${Math.floor(singleSelectValue * 11)}`;
          }}
          marks={[
            { value: 0.1, label: "Chill" },
            { value: 0.5, label: "Up and alive" },
            { value: 0.9, label: "Apoplectic" },
          ]}
          classNames={{
            base: "max-w-md gap-3 max-w-md",
            track: "border-s-secondary-100",
            filler: "bg-gradient-to-r from-secondary-100 to-secondary-500",
          }}
        />
      </div>
    </div>
  );
};

export default EnergySliderComponent;
