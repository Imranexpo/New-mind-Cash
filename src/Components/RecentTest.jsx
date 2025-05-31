import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { CheckCircle, Cancel, AccessTime } from "@mui/icons-material";

export const RecentTests = ({ tests }) => {
  return (
    <Card
      sx={{
        transition: "0.3s",
        marginBottom: 4,
        padding: 1.3,
        border: "inherit",
        "&:hover": {
          boxShadow: 3,
          borderColor: "primary.main",
        },
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Recent Tests
          </Typography>
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        {tests.map((test) => (
          <Box
            key={test.id}
            display="flex"
            alignItems="center"
            gap={2}
            p={2}
            border="1px solid #e0e0e0"
            borderRadius={2}
            mb={2}
          >
            <Avatar
              sx={{
                bgcolor:
                  test.status === "passed"
                    ? "#d1fae5"
                    : test.status === "failed"
                      ? "#fee2e2"
                      : "#fef3c7",
                color:
                  test.status === "passed"
                    ? "#16a34a"
                    : test.status === "failed"
                      ? "#dc2626"
                      : "#d97706",
                width: 40,
                height: 40,
              }}
            >
              {test.status === "passed" && <CheckCircle />}
              {test.status === "failed" && <Cancel />}
              {test.status === "pending" && <AccessTime />}
            </Avatar>

            <Box flex={1}>
              <Typography variant="subtitle2">{test.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {test.subject} • {test.date}
              </Typography>
            </Box>

            {test.status !== "pending" && (
              <Typography
                variant="body2"
                fontWeight="medium"
                sx={{
                  color: test.status === "passed" ? "#16a34a" : "#dc2626",
                }}
              >
                {test.score}/100
              </Typography>
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
