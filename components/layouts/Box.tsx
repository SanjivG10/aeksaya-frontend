import { Box } from "@chakra-ui/react";

interface IBoxProps {
  bg?: string;
}

const CustomBox: React.FC<IBoxProps> = ({ bg = "tomato", children }) => {
  return (
    <Box className="box" bg={bg}>
      {children}
    </Box>
  );
};

export default CustomBox;
