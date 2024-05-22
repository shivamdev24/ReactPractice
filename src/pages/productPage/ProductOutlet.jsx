import { Outlet } from "react-router-dom"



export default function ProductOutlet() {
  return (
    <div>
        <div>
            sidebar here
        </div>
          <Outlet/>      
    </div>
  )
}
