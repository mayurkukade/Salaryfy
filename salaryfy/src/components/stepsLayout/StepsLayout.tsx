
import QuestionnaireTopBarStep from '../../modules/questionnaire/components/questionnaire-topbar-step.component'
import {  Outlet } from 'react-router-dom'
import BottomPageNavigationBar from '../../modules/questionnaire/components/bottom-navigation-bar.component'

const StepsLayout:React.FC= () => {


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
