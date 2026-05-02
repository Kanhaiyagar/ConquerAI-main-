import React from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import LandingPage from './pages/Landing/LandingPage'
import AboutAnalytics from './pages/Landing/AboutAnalytics/AboutAnalytics'
import AboutChatbot from './pages/Landing/AboutChatbot/AboutChatbot'
import CompanyPage from './pages/Landing/Company/Company'
import FeaturesAndSolutions from './pages/Landing/Featuresandsolutions/Featuresandsolutions'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ProtectedRoute from './components/auth/ProtectedRoutes';
import DashboardPage from './pages/Dashboard/DashboardPage'
import DocumentListPage from './pages/Documents/DocumentListPage';
import DocumentDetailPage from './pages/Documents/DocumentDetailPage';
import FlashcardsListPage from './pages/Falshcards/FalshcardListPage';
import FlashcardPage from './pages/Falshcards/FlashcardPage';
import QuizTakePage from './pages/Quizzes/QuizTakePage';
import QuizResultPage from './pages/Quizzes/QuizResultPage';
import ProfilePage from './pages/Profile/profilePage';
import Pricing from './pages/Landing/Pricing/Pricing';
import ResourcesSection from './pages/Landing/ResourcesSection/ResourcesSection';
import ContactUs from './pages/Landing/ContactUs/ContactUs';
import HowItWorks from './pages/Landing/HowItWorks/HowItWorks';
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthContext'

const App = () => {
  const {isAuthenticated,loading}=useAuth()

  if(loading){
  return (
    
   <div className='flex items-center justify-center h-screen'>
    <p>Loading...</p>
   </div>
  )
}

return(
  <>
  
    <Toaster position="top-right" reverseOrder={false} />

    <Routes>
      <Route 
         path="/"
         element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingPage />}
         />
      <Route path="/about-analytics" element={<AboutAnalytics />} />
      <Route path="/about-chatbot" element={<AboutChatbot />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/features-and-solutions" element={<FeaturesAndSolutions />} />
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/resources" element={<ResourcesSection/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
         <Route
           path='/login'
           element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
         />
         <Route
           path='/register'
           element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
         />

         {/* Protected Route */}
         <Route element={<ProtectedRoute/>}>
         <Route path="/dashboard" element={<DashboardPage/>}/>
         <Route path="/documents" element={<DocumentListPage/>}/>
         <Route path="/documents/:id" element={<DocumentDetailPage/>}/>
         <Route path="/flashcards" element={<FlashcardsListPage/>}/>
         <Route path="/documents/:id/flashcards" element={<FlashcardPage/>}/>
         <Route path="/quizzes/:quizId" element={<QuizTakePage/>}/>
         <Route path="/quizzes/:quizId/results" element={<QuizResultPage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/>
         <Route path="/how-it-works" element={<HowItWorks/>}/>
         </Route>

         <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </>
)

}

export default App