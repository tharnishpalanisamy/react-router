import { Outlet , NavLink } from "react-router-dom"
import './HostLayout.css'
export default function HostLayout(){
    return(
        <> 
            <ul className="host-links">    
                <NavLink to = '/host' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'} end>
                    host 
                </NavLink>

                <NavLink to ='/host/income' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'}>
                    dashboard 
                </NavLink>

                <NavLink to = '/host/reviews' className={({isActive})=> isActive ? 'host-link active-link' : 'host-link'}>
                    Price 
                </NavLink>

            </ul>
            <Outlet/>
        </>
    )
}