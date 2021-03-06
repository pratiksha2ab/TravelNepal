import React from 'react'
import styles from './footer.module.css'
import{FacebookOutlined ,MailOutlined ,LinkedinOutlined,TwitterOutlined} from '@ant-design/icons';
import Link from 'next/link';

function Footer() {
    return (
        <div className={styles.mainContainer}>
        
            <div className={styles.wrapper}>
                <div className={styles.info} >
                    
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className={styles.info}>
                    
                    <p>Connect us on  </p>
                    <div className={styles.iconHolder}>
                   <Link href="https://www.facebook.com/" passHref><FacebookOutlined width='80px' height='80px' /></Link> 
                   <TwitterOutlined />
                    <MailOutlined />
                    <LinkedinOutlined />

                    </div>
                    
                    
                    </div>
                    
                <div className={styles.quickLinks}>
                    
                    <p>Quick links</p>
                    {/* <Link href="/" passHref><a>Home</a></Link> */}
                    {/* <Link href="/events" passHref><a>Events</a></Link>
                    <Link href="/blog" passHref><a>Blog</a></Link> */}
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/events"><a>Trekking</a></Link>
                    <Link href="/blog"><a>Tour</a></Link>
                
          
                </div>
 
            </div>
            <div className={styles.copyright} >
                Copyright @TravelNepal. All right reserved.
            </div>
        </div>
    )
}

export default Footer