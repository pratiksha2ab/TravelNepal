import React from 'react'
import {Card,Button} from 'antd';
import styles from '../SpecialityList/speciality.module.css'

function TrekkingList() {
    const data = [
        {
            image:'GosaikundaTrek.jpg',
          title: 'Gosaikunda',
          days:'7 Days'
        },
        {
            image:'PoonHillTrek.jpg',
          title: 'Poonhill',
          days:'4 Days'
        },
        { image:'GosaikundaTrek.jpg',
          title: 'Gosaikunda',
          days:'7 Days'
        },
        {
            image:'GosaikundaTrek.jpg',
          title: 'Gosaikunda',
          days:'7 Days'
        },
        { image:'PoonHillTrek.jpg',
          title: 'Poonhill',
          days:'4 Days'
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

export default TrekkingList
