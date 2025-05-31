import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
} from "@mui/material";
import { EventNote } from "@mui/icons-material";

export const UpcomingTests = ({ tests }) => {
  return (
    <Card sx={{
      transition: "0.3s",
      marginBottom: 4,
      padding: 1.3,
      border: "inherit",
      "&:hover": {
        boxShadow: 3,
        borderColor: "primary.main",
      },
    }}>
      <CardHeader
        avatar={<EventNote color="primary" />}
        title={
          <Typography variant="h6" fontWeight="bold">
            Upcoming Tests
          </Typography>
        }
        sx={{ pb: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Box display="flex" flexDirection="column" gap={1}>
          {tests.map((test) => (
            <Box
              key={test.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              borderRadius={2}
              bgcolor="action.hover"
              sx={{ transition: "background 0.2s", "&:hover": { bgcolor: "grey.100" } }}
            >
              <Box>
                <Typography variant="body1" fontWeight="medium">
                  {test.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {test.subject}
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="body2" fontWeight="medium">
                  {test.date}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {test.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
