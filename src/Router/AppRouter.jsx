import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoute } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login && SignUp */}
        <Route path="/auth/*" element={ <AuthRoutes />} />

        {/* JournalApp */}
        <Route path="/*" element={ <JournalRoute />}/>

    </Routes>
  )
}
