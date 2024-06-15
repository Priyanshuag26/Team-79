import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {Interview} from "../Components/Interview"
import { InterviewTypes } from '../Components/InterviewTypes'
import { Home } from '../Pages/Home'


export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/interviews' element={<InterviewTypes/>}/>
            <Route path='/interview/:techStack' element={<Interview/>}/>
        </Routes>
    </div>
  )
}
