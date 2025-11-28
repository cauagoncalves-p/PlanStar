import styles from "../IconeWhastApp/IconeWhastApp.module.css";
import { Outlet } from "react-router-dom";
const IconeWhastApp = () =>{
    return(
        <div>
            <Outlet/>
              <a href="https://wa.me/5511987456123" className={styles.whatsapp_button} target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </a>  
        </div>
    )
}

export default IconeWhastApp;