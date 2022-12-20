import { Progress } from "@chakra-ui/react";

const SeekBar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
  return (
    <>
      <Progress
        mt={3}
        w={{ base: "15rem", lg: "32rem" }}
        mx="auto"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        size="xs"
        colorScheme="green"
        borderRadius="7px"
        // color="#1db954"
      />
    </>
  );
};

export default SeekBar;
