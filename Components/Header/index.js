import React from 'react'
import{FacebookOutlined ,MailOutlined ,InstagramOutlined,TwitterOutlined} from '@ant-design/icons';
import { Menu, Dropdown, Button ,Popover} from 'antd';
import { UserOutlined,DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from './Header.module.css'



function Header() {

 

    const trek = (

        <Menu>
            <Menu.Item key={1}>
                <a href="/" > Manaslu Circuit</a>

            </Menu.Item >
            <Menu.Item key={2}>
                <a href="/">ABC Trek</a>
            </Menu.Item>
            <Menu.Item key={3}>
            <a href="/">Mardi Himal</a>
            </Menu.Item>

            <Menu.Item key={4}>
            <a href="/">Poonhill</a>
            </Menu.Item>

        </Menu>


    )

    const tour = (

        <Menu>
            <Menu.Item key={1}>
                <a href="/" > Manaslu Circuit</a>

            </Menu.Item >
            <Menu.Item key={2}>
                <a href="/">ABC Trek</a>
            </Menu.Item>
            <Menu.Item key={3}>
            <a href="/">Mardi Himal</a>
            </Menu.Item>

            <Menu.Item key={4}>
            <a href="/">Poonhill</a>
            </Menu.Item>

        </Menu>


    )

    const biking = (

        <Menu>
            <Menu.Item key={1}>
                <a href="/" > abc</a>

            </Menu.Item >
            <Menu.Item key={2}>
                <a href="/">abc</a>
            </Menu.Item>
            <Menu.Item key={3}>
            <a href="/">abc</a>
            </Menu.Item>

            <Menu.Item key={4}>
            <a href="/">abc</a>
            </Menu.Item>

        </Menu>


    )
    const adventure = (

        <Menu>
            <Menu.Item key={1}>
                <a href="/" > abc</a>

            </Menu.Item >
            <Menu.Item key={2}>
                <a href="/">abc</a>
            </Menu.Item>
            <Menu.Item key={3}>
            <a href="/">abc</a>
            </Menu.Item>

            <Menu.Item key={4}>
            <a href="/">abc</a>
            </Menu.Item>

        </Menu>


    )
    
    
    

    return (
        
         <div className={styles.main}>
             <div className={styles.wrapper}>
             <div className={styles.info}>

          <div className={styles.leftbar}>
          <InstagramOutlined width='80px' height='80px' color='#fff'/>
          <FacebookOutlined  width='80px' height='80px' color='#fff'/>
          <TwitterOutlined  width='80px' height='80px' color='#fff'/>
          <MailOutlined />

         </div>

         <div className={styles.rightbar}>
           <Link href="/"><a>Sign Up</a></Link>
           <Link href="/"><a>Login</a></Link>
           <Link href="/"><a>Currency</a></Link>
          <div>
          <form> <input class="search-bar" type="text" name="searchTerm" placeholder="Search"/></form>
              </div> 
         </div>
         </div>

         </div>
         <div className={styles.navWrapper}>
         <div className={styles.navbar}>
             <div class={styles.logo}>
                 <img src="TMN LOGO.png" width="70px" height="70px"/>
             </div>
             <div className={styles.navMenu}>
             <Link href="/"><span className={styles.dropdown}>Home</span></Link>

             
               <Popover content={trek} placement="bottom" >
               <span className={styles.dropdown}> Trekking</span> 
                   </Popover> 

                   <Popover content={tour} placement="bottom">
              <span className={styles.dropdown}>Tours</span>
                   </Popover> 

                   <Popover content={biking} placement="bottom">
              <span className={styles.dropdown}>Mountain Biking</span>
                   </Popover> 

                   <Popover content={adventure} placement="bottom">
              <span className={styles.dropdown}>More Adventure</span>
                   </Popover> 

                   <Link href="/"><span className={styles.dropdown}>Travel Update</span></Link>
                    <Link href="/"><span className={styles.dropdown}>Blog</span></Link>


        
                

             
                   
                    
                    
                   
             </div>

         </div>
         </div>
         <div>
             
         </div>
       </div>

    
        
         
        
      
    )
}

export default Header
