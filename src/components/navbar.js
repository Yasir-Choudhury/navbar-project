import styles from './Navbar.module.css'
import Image from 'next/image'
import TextField from "@mui/material/TextField";



// give the bottom of the navbar a background color


export default function Navbar() {
    return (
        <div className={styles.nav}>
            <Image src="/airbnb-logo.png" width={30} height={30} />
             <h1 className={styles.logo}>Airbnb</h1>
             <TextField 
               className={styles.search}
               id="outlined-basic"
               variant="outlined"
               width = "30%"
        />
            <h3>Become a host</h3>
            <Image src="/globe.png" width={30} height={30} />
            <Image src="/profile.png" width={30} height={30} />
       </div>
    )
    } 