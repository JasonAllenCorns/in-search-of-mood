"use client"; 
import * as Form from "@radix-ui/react-form";
import { RocketIcon } from "@radix-ui/react-icons";
import { Container } from "@radix-ui/themes";

export default function TempoSliderComponent() {
  const handleTempoChange: (tempo: number | undefined) => void = (tempo) => {
    console.log("(jason.corns) tempo", tempo);
  };
  return (
    <Container>
      <Form.Field className="FormField" name="tempo">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Tempo</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <RocketIcon
            height="16"
            width="16"
          />
          <input
            type="text"
            inputMode="numeric"
            placeholder="Target tempo e.g. 140"
            onChange={(evt) => {
              const tempoVal = Math.floor(parseFloat(evt?.target?.value));
              handleTempoChange(tempoVal);
            }}
          />
        </Form.Control>
      </Form.Field>
    </Container>
  );
}
