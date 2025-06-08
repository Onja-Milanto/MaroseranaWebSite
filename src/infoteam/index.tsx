"use client"

import type React from "react"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// This is a fallback component that redirects to the about page
// if someone tries to access /infoteam without an ID
const InfoTeamIndex: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/about")
  }, [navigate])

  return <div>Redirecting...</div>
}

export default InfoTeamIndex
