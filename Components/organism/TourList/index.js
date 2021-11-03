import React from 'react'
import {Card,Button} from 'antd';
import styles from '../SpecialityList/speciality.module.css'

function TourList() {
    const data = [
        {
            image:'RaraLake.jpg',
          title: 'Rara',
          days:'5 Days'
        },
        {
            image:'PokharaTour.jpg',
          title: 'Pokhara',
          days:'5 Days'
        },
        { image:'RaraLake.jpg',
          title: 'Rara',
          days:'5 Days'
        },
        {
            image:'RaraLake.jpg',
          title: 'Rara',
          days:'5 Days'
        },
        { image:'RaraLake.jpg',
          title: 'Rara',
          days:'5 Days'
        },
      
      ];
    return (
        <div>
         <h1 className={styles.h1}>BEST TRIP</h1>
            <div className={styles.row}>
                {
                    data?.map((item,index)=>(
                        
                        <div className={styles.cardWrapper}>
        
        
        <Card size="small" cover={<img src={`/${item.image}`} width={300} height={300} />
 
     
     
                    }
     className={styles.card}
     hoverable
      >
       
       <Button type="primary">{item.title}</Button>
       <p>{item.days}</p>

       
        </Card>
       </div>

           ))
            }

              </div>
        </div>
    )
}

export default TourList
