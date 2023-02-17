import { useState } from "react";
import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 32,
}));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutRoot>
      {/* <MainNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
      <MainSidebar
        onClose={(): void => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      /> */}

      {children}
      {/* <Footer /> */}
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
