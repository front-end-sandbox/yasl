import React from "react"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

import SaveIcon from "icons/SaveIcon"
import InternetIcon from "icons/InternetIcon"
import SettingsIcon from "icons/SettingsIcon"
import { Button } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="static" enableColorOnDark color="transparent">
      <Toolbar>
        <Button variant="text" startIcon={<SaveIcon />}>
          Saved
        </Button>
        <Button variant="text" startIcon={<InternetIcon />}>
          Internet
        </Button>
        <Button variant="text" startIcon={<SettingsIcon />}>
          Settings
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header