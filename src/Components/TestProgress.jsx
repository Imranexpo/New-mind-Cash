import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  LinearProgress
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export const TestProgress = ({ completed, total }) => {
  const percentage = Math.round((completed / total) * 100);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

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
        avatar={<CheckCircle color="primary" />}
        title={
          <Typography variant="h6" fontWeight="bold">
            Your Progress
          </Typography>
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box position="relative" width={112} height={112} mb={2}>
            <svg width="112" height="112" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke="#673ab7"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" fontWeight="bold">
                {percentage}%
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Completed
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" color="textSecondary" mb={2}>
            You've completed <strong>{completed}</strong> out of <strong>{total}</strong> tests
          </Typography>

          <Box width="100%" mb={2}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2" fontWeight="medium">
                Weekly tests
              </Typography>
              <Typography variant="body2">8/10</Typography>
            </Box>
            <LinearProgress variant="determinate" value={80} sx={{ height: 8, borderRadius: 5 }} />
          </Box>

          <Box width="100%" mt={2}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2" fontWeight="medium">
                Monthly tests
              </Typography>
              <Typography variant="body2">4/6</Typography>
            </Box>
            <LinearProgress variant="determinate" value={67} sx={{ height: 8, borderRadius: 5 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
