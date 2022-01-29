import React from "react";

import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink } from "./styles/SideBar.styled";

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
            {/* <SideBarMenu> */}
                <SideBarLink to="habits">
                    Habits
                </SideBarLink>
                <SideBarLink to="login">
                    Login
                </SideBarLink>
            {/* </SideBarMenu> */}

        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
