import React from 'react'
import Header from '../Components/Header';
import { Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TodaysTest } from '../Components/TodayTest';
import { RecentTests } from '../Components/RecentTest';
import { TestProgress } from '../Components/TestProgress';
import { UpcomingTests } from '../Components/UpcomingTest';


const PurpleOutlinedChip = styled(Chip)({
  color: '#6c63ac',
  borderColor: '#6c63ac',
  fontWeight: 500,
});


const StudentDashboard = () => {
  const recentTests = [
    {
      id: "t1",
      title: "Biology Mid-Term",
      subject: "Biology",
      date: "May 1, 2025",
      status: "passed",
      score: 85,
    },
    {
      id: "t2",
      title: "Mathematics Quiz #3",
      subject: "Mathematics",
      date: "April 28, 2025",
      status: "failed",
      score: 58,
    },
    {
      id: "t3",
      title: "Physics Weekly Quiz",
      subject: "Physics",
      date: "April 25, 2025",
      status: "passed",
      score: 92,
    },
  ];
  const upcomingTests = [
    {
      id: "ut1",
      title: "Chemistry Final",
      subject: "Chemistry",
      date: "May 5, 2025",
      time: "10:00 AM",
    },
    {
      id: "ut2",
      title: "History Review",
      subject: "History",
      date: "May 7, 2025",
      time: "2:30 PM",
    },
    {
      id: "ut3",
      title: "English Literature",
      subject: "English",
      date: "May 10, 2025",
      time: "11:15 AM",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="container-fuild mx-auto px-4 py-8">
        <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
          <Typography variant="h5" fontWeight="bold">Student Dashboard</Typography>
          <PurpleOutlinedChip label="Academic Year 2024-2025" variant="outlined" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" >
          <div className="lg:col-span-2 space-y-6 animate-fade-in" >
            <Typography variant="h6" gutterBottom>Today's Test</Typography>
            <TodaysTest
              title="Mathematics Quarterly Assessment"
              subject="Mathematics - Algebra and Calculus"
              questions={25}
              duration={45}
              endTime="11:30 AM"
            />
            <Typography variant="h6" className="mt-8" gutterBottom>Recent Activity</Typography>
            <RecentTests tests={recentTests} />
          </div>
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Typography variant="h6" gutterBottom>Your Progress</Typography>
            <TestProgress completed={12} total={16} />
            <UpcomingTests tests={upcomingTests} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default StudentDashboard
