import { Slider, Switch } from "@nextui-org/react";
import { useState } from "react";

type AdditionalProps = {
  className?: string;
};
type ExtendedComponentProps = React.PropsWithChildren<AdditionalProps>;

export default function EnergySliderComponent(props: ExtendedComponentProps) {
  const [energyLevel, setEnergyLevel] = useState(0.4);
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div className={`container mx-auto ${props.className || ""}`}>
      <div className="flex flex-row gap-3">
        <Switch
          color="secondary"
          isSelected={isSelected}
          onValueChange={setIsSelected}
        />
        <Slider
          isDisabled={!isSelected}
          size="md"
          step={0.1}
          color="foreground"
          label="Energy"
          showSteps={true}
          maxValue={1}
          minValue={0}
          defaultValue={energyLevel}
          onChangeEnd={(value) => {
            console.log("(jason.corns) Energy Value", value);
            setEnergyLevel(parseFloat((value || "").toString()));
          }}
          getValue={(value) =>
            `${Math.floor(parseFloat(value.toString()) * 11)}`
          }
          marks={[
            {
              value: 0.1,
              label: "Chill",
            },
            {
              value: 0.5,
              label: "Up and alive",
            },
            {
              value: 0.9,
              label: "Apoplectic",
            },
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
}
