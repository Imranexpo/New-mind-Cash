import React, { useState } from "react";
import { Avatar, Menu, MenuItem, IconButton, Typography, Divider, Box } from "@mui/material";
import { Logout, Settings, Person } from "@mui/icons-material";
import ProfileImg from '../assets/41697.jpg'


export const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} className="flex items-center gap-2 hover:bg-slate-100 p-2 rounded transition-colors">
        <Avatar alt="Student" src={ProfileImg} />
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-medium" style={{ fontWeight: '600' }}>M.Mohammed Imran</span>
          <span className="text-xs text-muted-foreground">Class 11-A</span>
        </div>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            width: 220,
            padding: 1,
            borderRadius: 2,
          },
        }}
      >
        <Box sx={{ padding: "8px 12px" }}>
          <Typography variant="subtitle1" fontWeight={600}>
            M.Mohammed Imran
          </Typography>
          <Typography variant="body2" color="text.secondary">
            imranameen045@gmail.com
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Person fontSize="small" sx={{ marginRight: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Settings fontSize="small" sx={{ marginRight: 1 }} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Logout fontSize="small" sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
