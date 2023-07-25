import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";

/**
 * @description This component is used for the column menu in the Admin and Performance pages
 * @param {*} props
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */
const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
