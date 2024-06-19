import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={40}
        placeholder="Search for games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
