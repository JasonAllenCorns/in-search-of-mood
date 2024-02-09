"use client";
import { Input } from "@nextui-org/react";

type AdditionalProps = {
  className?: string;
};
type ExtendedComponentProps = React.PropsWithChildren<AdditionalProps>;
//
export default function TempoSelectionComponent(props: ExtendedComponentProps) {
  const handleTempoChange: (tempo: number | undefined) => void = (tempo) => {
    console.log("(jason.corns) tempo", tempo);
  };
  return (
    <div className={`container mx-auto ${props.className || ""}`}>
      <Input
        type="number"
        inputMode="numeric"
        label="Tempo"
        placeholder="Target tempo e.g. 140"
        description="The target tempo, or beats-per-minute, to seed the recommendations"
        onChange={(evt) => {
          const tempoVal = Math.floor(parseFloat(evt?.target?.value));
          console.log("(jason.corns) tempoVal", tempoVal);
          handleTempoChange(tempoVal);
        }}
      />
    </div>
  );
}
