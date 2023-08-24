
import QuestionnaireTopBarStep from '../../modules/questionnaire/components/questionnaire-topbar-step.component'
import { Outlet } from 'react-router-dom'

const StepsLayout:React.FC= () => {
 
  return (
    <>
        <div className="w-100 flex flex-col items-center h-[100%]">
            <QuestionnaireTopBarStep/>
            <Outlet/>
        </div>
    </>
  )
}

export default StepsLayout
