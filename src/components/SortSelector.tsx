import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {}

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  //   const displayText = selectedPlatform
  //     ? selectedPlatform.name
  //     : "Select a Platform";

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* {displayText} */} Order by: Revelence
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => (
          <MenuItem
            onClick={() => onPlatformSelect(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))} */}
        <MenuItem>Revelence</MenuItem>
        <MenuItem>test</MenuItem>
        <MenuItem>test</MenuItem>
        <MenuItem>test</MenuItem>
        <MenuItem>test</MenuItem>
        <MenuItem>test</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
