import React from 'react'
import { List, Card,Button} from 'antd';
import styles from './speciality.module.css'

function SpecialityList() {

    const data = [
        {
            image:'ToursNepal.jpg',
          title: 'Tour In Nepal',
        },
        {
            image:'TrekkingNepal.jpg',
          title: 'Trekking In Nepal',
        },
        { image:'MountainBikingNepal.jpg',
          title: 'Mountain Biking',
        },
        {
            image:'TrekkingNepal.jpg',
          title: 'Trekking In Nepal',
        },
        { image:'MountainBikingNepal.jpg',
          title: 'Mountain Biking',
        },
      
      ];
    return (

        <div>
            <h1 className={styles.h1}>OUR SPECIALITIES</h1>
            <div className={styles.row}>
                {
                    data?.map((item,index)=>(
                        
                        <div className={styles.cardWrapper}>
        
        
        <Card size="small" cover={<img src={`/${item.image}`} width={300} height={300} />
 
     
     
                    }
     className={styles.card}
     hoverable
      >
       {/* <strong className={styles.title}>{item.title}</strong> */}
       <Button type="primary">{item.title}</Button>
       
        </Card>
       </div>

           ))
            }

              </div>
            
          </div>
    )
}

export default SpecialityList