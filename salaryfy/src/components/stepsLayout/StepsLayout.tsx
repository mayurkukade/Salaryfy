
import QuestionnaireTopBarStep from '../../modules/questionnaire/components/questionnaire-topbar-step.component'
import { Navigate, Outlet } from 'react-router-dom'
import BottomPageNavigationBar from '../../modules/questionnaire/components/bottom-navigation-bar.component'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/app.store'
const StepsLayout:React.FC= () => {
 const token = useSelector((state:RootState)=>state.authSlice.token)

  return (
    <>
        <div className="w-100 flex flex-col items-center h-[100%]">
            <QuestionnaireTopBarStep/>
            <Outlet/>
            <BottomPageNavigationBar/>
        </div>
    </>
  )
}

export default StepsLayout
