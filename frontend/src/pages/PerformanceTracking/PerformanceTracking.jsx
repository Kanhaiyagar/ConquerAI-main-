import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Line } from 'rc-progress';

const PerformanceTracking = () => {
  const {    } = useContext(AppContext);
  
  const [timeRange, setTimeRange] = useState('week');
  const [performanceData, setPerformanceData] = useState(null);
  const [coursePerformance, setCoursePerformance] = useState([]);
  const [studyStats, setStudyStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch comprehensive performance data
  const fetchPerformanceData = async () => {
    try {
      setLoading(true);
      const token = await getToken();

      // Fetch progress for all enrolled courses
      const progressData = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/get-course-progress`,
            { courseId: course._id },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          const totalLectures = calculateNoOfLectures(course);
          const lectureCompleted = data.progressData 
            ? data.progressData.lectureCompleted.length 
            : 0;
          const progressPercent = totalLectures > 0 
            ? Math.round((lectureCompleted / totalLectures) * 100) 
            : 0;

          return {
            courseId: course._id,
            courseTitle: course.courseTitle,
            courseThumbnail: course.courseThumbnail,
            totalLectures,
            lectureCompleted,
            progressPercent,
            duration: calculateCourseDuration(course),
            rating: course.courseRatings?.length > 0 
              ? Math.round(
                  course.courseRatings.reduce((sum, r) => sum + r.rating, 0) / 
                  course.courseRatings.length
                ) 
              : 0,
          };
        })
      );

      setCoursePerformance(progressData);

      // Calculate overall statistics
      if (progressData.length > 0) {
        const totalLectures = progressData.reduce((sum, p) => sum + p.totalLectures, 0);
        const completedLectures = progressData.reduce((sum, p) => sum + p.lectureCompleted, 0);
        const overallProgress = totalLectures > 0 
          ? Math.round((completedLectures / totalLectures) * 100) 
          : 0;
        const avgRating = Math.round(
          progressData.reduce((sum, p) => sum + p.rating, 0) / progressData.length
        );
        const completedCourses = progressData.filter(p => p.progressPercent === 100).length;

        setPerformanceData({
          overallProgress,
          completedCourses,
          enrolledCourses: enrolledCourses.length,
          avgRating,
          totalLectures,
          completedLectures,
        });

        setStudyStats({
          weeklyHours: generateWeeklyData(),
          scoreDistribution: calculateScoreDistribution(progressData),
        });
      }

      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  // Generate weekly study data (mock - can be replaced with backend data)
  const generateWeeklyData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(() => Math.floor(Math.random() * 5) + 1);
  };

  // Calculate score distribution
  const calculateScoreDistribution = (data) => {
    const distribution = {
      excellent: data.filter(p => p.progressPercent >= 90).length,
      good: data.filter(p => p.progressPercent >= 80 && p.progressPercent < 90).length,
      average: data.filter(p => p.progressPercent >= 70 && p.progressPercent < 80).length,
      belowAvg: data.filter(p => p.progressPercent >= 60 && p.progressPercent < 70).length,
      poor: data.filter(p => p.progressPercent < 60).length,
    };
    return distribution;
  };

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      setTimeout(() => {
        fetchPerformanceData(userData);
      }, 500);
    }
  }, [enrolledCourses]);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full 
                         animate-spin mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading your performance data...</p>
        </div>
      </div>
    );
  }

  if (!performanceData || coursePerformance.length === 0) {
    return (
      <>
        <div className='md:px-36 px-8 py-10 text-center'>
          <h1 className='text-3xl font-semibold text-gray-900 mb-4'>Performance Tracking</h1>
          <p className='text-gray-600'>
            Enroll in courses to start tracking your learning performance.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className='md:px-36 px-8 pt-10 pb-20'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-semibold text-gray-900 mb-2'>Performance Tracking</h1>
          <p className='text-gray-600'>Monitor your learning progress and achievements</p>
        </div>

        {/* Time Range Filter */}
        <div className='flex gap-3 mb-8 flex-wrap'>
          {['week', 'month', 'semester'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-6 py-2 rounded-lg font-medium capitalize transition-all ${
                timeRange === range
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Key Metrics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8'>
          <MetricCard
            title='Overall Progress'
            value={`${performanceData.overallProgress}%`}
            icon='📊'
            color='blue'
          />
          <MetricCard
            title='Courses Enrolled'
            value={performanceData.enrolledCourses}
            icon='📚'
            color='purple'
          />
          <MetricCard
            title='Completed'
            value={performanceData.completedCourses}
            icon='✅'
            color='green'
          />
          <MetricCard
            title='Lectures Done'
            value={performanceData.completedLectures}
            subtitle={`/ ${performanceData.totalLectures}`}
            icon='📝'
            color='orange'
          />
          <MetricCard
            title='Avg Rating'
            value={`${performanceData.avgRating}/5`}
            icon='⭐'
            color='yellow'
          />
        </div>

        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
          {/* Weekly Study Hours Chart */}
          <div className='lg:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-900 mb-6'>Weekly Study Hours</h2>
            <div className='flex items-end justify-between h-64 gap-2'>
              {studyStats && studyStats.weeklyHours.map((hours, index) => {
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const maxHeight = Math.max(...studyStats.weeklyHours);
                const heightPercent = (hours / maxHeight) * 100;
                return (
                  <div key={index} className='flex-1 flex flex-col items-center'>
                    <div className='w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t 
                                   hover:from-blue-700 hover:to-blue-500 transition-all'
                         style={{ height: `${heightPercent}%` }}>
                    </div>
                    <p className='text-xs text-gray-600 mt-2'>{days[index]}</p>
                    <p className='text-xs font-semibold text-gray-800'>{hours}h</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Score Distribution */}
          <div className='bg-white rounded-lg shadow-md p-6 border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-900 mb-6'>Score Distribution</h2>
            <div className='space-y-3'>
              {studyStats && (
                <>
                  <DistributionBar 
                    label='Excellent (90%+)' 
                    count={studyStats.scoreDistribution.excellent}
                    color='bg-green-500'
                  />
                  <DistributionBar 
                    label='Good (80-89%)' 
                    count={studyStats.scoreDistribution.good}
                    color='bg-blue-500'
                  />
                  <DistributionBar 
                    label='Average (70-79%)' 
                    count={studyStats.scoreDistribution.average}
                    color='bg-yellow-500'
                  />
                  <DistributionBar 
                    label='Below Avg (60-69%)' 
                    count={studyStats.scoreDistribution.belowAvg}
                    color='bg-orange-500'
                  />
                  <DistributionBar 
                    label='Poor (<60%)' 
                    count={studyStats.scoreDistribution.poor}
                    color='bg-red-500'
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Course Performance Table */}
        <div className='bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8'>
          <h2 className='text-lg font-semibold text-gray-900 mb-6'>Course Performance</h2>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b-2 border-gray-300'>
                  <th className='text-left py-3 px-4 font-semibold text-gray-700 text-sm'>Course</th>
                  <th className='text-left py-3 px-4 font-semibold text-gray-700 text-sm'>Progress</th>
                  <th className='text-left py-3 px-4 font-semibold text-gray-700 text-sm max-sm:hidden'>
                    Lectures
                  </th>
                  <th className='text-left py-3 px-4 font-semibold text-gray-700 text-sm max-sm:hidden'>
                    Duration
                  </th>
                  <th className='text-left py-3 px-4 font-semibold text-gray-700 text-sm'>Rating</th>
                  <th className='text-left py-3 px-4 font-semibold text-gray-700 text-sm'>Status</th>
                </tr>
              </thead>
              <tbody>
                {coursePerformance.map((course, index) => (
                  <tr key={index} className='border-b border-gray-200 hover:bg-gray-50 transition'>
                    <td className='py-4 px-4'>
                      <div className='flex items-center gap-3'>
                        <img 
                          src={course.courseThumbnail} 
                          alt={course.courseTitle} 
                          className='w-12 h-12 rounded object-cover'
                        />
                        <span className='font-medium text-gray-900 truncate max-w-xs'>
                          {course.courseTitle}
                        </span>
                      </div>
                    </td>
                    <td className='py-4 px-4'>
                      <div className='flex items-center gap-2'>
                        <div className='w-24 bg-gray-300 rounded-full h-2'>
                          <div
                            className={`h-2 rounded-full transition-all ${
                              course.progressPercent >= 80
                                ? 'bg-green-500'
                                : course.progressPercent >= 50
                                ? 'bg-blue-500'
                                : 'bg-yellow-500'
                            }`}
                            style={{ width: `${course.progressPercent}%` }}
                          />
                        </div>
                        <span className='font-semibold text-gray-900 w-12'>
                          {course.progressPercent}%
                        </span>
                      </div>
                    </td>
                    <td className='py-4 px-4 max-sm:hidden text-gray-700'>
                      {course.lectureCompleted} / {course.totalLectures}
                    </td>
                    <td className='py-4 px-4 max-sm:hidden text-gray-700'>
                      {course.duration}
                    </td>
                    <td className='py-4 px-4 text-yellow-500 font-semibold'>
                      {course.rating > 0 ? `${course.rating}⭐` : 'N/A'}
                    </td>
                    <td className='py-4 px-4'>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        course.progressPercent === 100
                          ? 'bg-green-100 text-green-800'
                          : course.progressPercent >= 50
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {course.progressPercent === 100 
                          ? '✓ Completed' 
                          : course.progressPercent >= 50 
                          ? 'In Progress' 
                          : 'Just Started'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className='text-lg font-semibold text-gray-900 mb-6'>Your Achievements</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AchievementCard
              icon='🏆'
              title='Course Master'
              description='Complete 5 courses'
              progress={Math.min(performanceData.completedCourses, 5)}
              total={5}
            />
            <AchievementCard
              icon='🎯'
              title='Perfect Scorer'
              description='Get 90%+ in 3 courses'
              progress={coursePerformance.filter(c => c.progressPercent >= 90).length}
              total={3}
            />
            <AchievementCard
              icon='📚'
              title='Knowledge Seeker'
              description='Enroll in 10 courses'
              progress={performanceData.enrolledCourses}
              total={10}
            />
            <AchievementCard
              icon='⚡'
              title='Consistent Learner'
              description='Complete all lectures in 1 course'
              progress={performanceData.completedCourses}
              total={1}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Metric Card Component
const MetricCard = ({ title, value, subtitle, icon, color }) => {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50',
    purple: 'border-purple-200 bg-purple-50',
    green: 'border-green-200 bg-green-50',
    orange: 'border-orange-200 bg-orange-50',
    yellow: 'border-yellow-200 bg-yellow-50',
  };

  return (
    <div className={`rounded-lg shadow-md p-4 border ${colorClasses[color]}`}>
      <div className='flex items-start justify-between mb-3'>
        <h3 className='text-gray-700 font-medium text-sm'>{title}</h3>
        <span className='text-2xl'>{icon}</span>
      </div>
      <div className='text-2xl font-bold text-gray-900'>{value}</div>
      {subtitle && <p className='text-xs text-gray-600 mt-1'>{subtitle}</p>}
    </div>
  );
};

// Distribution Bar Component
const DistributionBar = ({ label, count, color }) => {
  return (
    <div className='space-y-1'>
      <div className='flex justify-between items-center'>
        <p className='text-sm text-gray-700'>{label}</p>
        <span className='text-sm font-semibold text-gray-900'>{count}</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${count > 0 ? 100 : 0}%` }}
        />
      </div>
    </div>
  );
};

// Achievement Card Component
const AchievementCard = ({ icon, title, description, progress, total }) => {
  const progressPercent = Math.round((progress / total) * 100);
  const isUnlocked = progress >= total;

  return (
    <div className={`rounded-lg shadow-md p-5 border transition-all ${
      isUnlocked 
        ? 'border-yellow-300 bg-yellow-50' 
        : 'border-gray-200 bg-white'
    }`}>
      <div className={`text-4xl mb-3 ${isUnlocked ? 'scale-110' : 'opacity-60'}`}>
        {icon}
      </div>
      <h3 className='text-sm font-bold text-gray-900 mb-1'>{title}</h3>
      <p className='text-xs text-gray-600 mb-3'>{description}</p>
      <div className='w-full bg-gray-300 rounded-full h-2 mb-1'>
        <div
          className={`h-2 rounded-full transition-all ${
            isUnlocked 
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' 
              : 'bg-blue-500'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className='text-xs font-semibold text-gray-700'>
        {progress}/{total}
      </p>
    </div>
  );
};

export default PerformanceTracking;