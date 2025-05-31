import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Chip,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { CalendarCheck, Clock } from "lucide-react";


export const TodaysTest = (props) => {
  return (
    <Card
      sx={{
        transition: "0.3s",
        marginBottom: 4,
        padding: 1.3,
        border: 'inherit',
        "&:hover": {
          boxShadow: 3,
          borderColor: "primary.main",
        },
      }}
    >
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Box>
              <Typography variant="h6">{props.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {props.subject}
              </Typography>
            </Box>
            <Chip
              label="Today"
              variant="outlined"
              sx={{
                bgcolor: "primary.light",
                color: "primary.main",
                borderColor: "primary.main",
              }}
              size="small"
            />
          </Box>
        }
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                height: 32,
                width: 32,
                borderRadius: "50%",
                backgroundColor: "primary.light",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CalendarCheck size={16} />
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Questions
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {props.questions}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                height: 32,
                width: 32,
                borderRadius: "50%",
                backgroundColor: "primary.light",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Clock size={16} />
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Duration
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {props.duration} mins
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ px: 2, py: 1.5, justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          Available until {props.endTime}
        </Typography>
        <Button variant="contained" size="small">
          Start Test
        </Button>
      </CardActions>
    </Card>
  );
};
