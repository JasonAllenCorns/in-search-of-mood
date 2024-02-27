"use client";
import React, { useMemo, useState } from "react";
import { Input } from "@nextui-org/react";
import { useRecommendationsContext } from "context/RecommendationsProvider";

type TempoSelectionProps = {
  className?: string;
};

const TempoSelectionComponent: React.FC<TempoSelectionProps> = ({
  className,
}) => {
  const { recFormData, saveRecFormData, setUseTempo } =
    useRecommendationsContext() || {};
  const [errorMessage, setErrorMessage] = useState("");

  const isInvalid = useMemo<boolean | undefined>(() => {
    let inValidity = false;
    const parsedTempo: number = recFormData?.tempo
      ? parseFloat(recFormData?.tempo?.toString())
      : 0;

    if (!recFormData?.tempo || recFormData?.tempo === "") {
      setErrorMessage("");
      inValidity = false;
    }
    if (
      !!(
        recFormData?.tempo &&
        (isNaN(parsedTempo) || parsedTempo > 999 || parsedTempo < 1)
      )
    ) {
      setErrorMessage(
        `Tempo value must be a number greater than 0 but less than 1000. You gave ${recFormData?.tempo}.`
      );
    } else {
      inValidity = false;
      setErrorMessage("");
    } // Guiness world record is 1015; can't help you beyond that
    return inValidity;
  }, [recFormData?.tempo]);

  //   (): Record<string> => ({
  //   if (value === "") return false;

  //   return (isNaN(value) || value?.length? > 3)
  // }), [value])

  const handleTempoClear = (): void => {
    setUseTempo?.(false);
    saveRecFormData?.({ tempo: false });
  };

  const handleTempoChange = (tempoValue: string | undefined): void => {
    const newTempo = tempoValue || "";
    setUseTempo?.(newTempo?.length > 0);
    saveRecFormData?.({ tempo: newTempo });
  };

  return (
    <div className={`container mx-auto ${className || ""}`}>
      <Input
        type="number"
        inputMode="numeric"
        label="Tempo"
        placeholder="Target tempo e.g. 140"
        description="The target tempo, or beats-per-minute, to seed the recommendations"
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        value={typeof recFormData?.tempo === "string" ? recFormData.tempo : ""}
        onClear={handleTempoClear}
        onValueChange={handleTempoChange}
      />
    </div>
  );
};

export default TempoSelectionComponent;
