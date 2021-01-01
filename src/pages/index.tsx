import React, { useEffect, useState } from 'react';
import styles from './index.less';

export default () => {
  let timeInterval:any;
  const [year,setYear] = useState('0000')
  const [month,setMonth] = useState('00')
  const [day,setDay] = useState('00')
  const [hour,setHour] = useState('00')
  const [minute,setMinute] = useState('00')
  const [second,setSecond] = useState('00')
  useEffect(() => {
    setTime();
  },[])

  const setTime = () => {
    timeInterval = setInterval(() => {
      let date = new Date()
      setYear(transData(date.getFullYear()))
      setMonth(transData(date.getMonth()+1).toString())
      setDay(transData(date.getDate()))
      setHour(transData(date.getHours()))
      setMinute(transData(date.getMinutes()))
      setSecond(transData(date.getSeconds()))
    },1000)
  }

  const transData = (val:number) => {
    return val > 9 ? val.toString() : `0${val}`
  }
  return (
    <div className={styles.page}>
       <div className={styles.get}>
        一直学习、一直谦虚、一直自由 ~
      </div>
      <div className={styles.time}>
        
        <span>{hour}</span>  
        <span className={styles.dot}>:</span>
        <span>{minute}</span> 
        <span className={styles.second}>{second}</span> 
      </div>
      <div className={styles.year}>
          {year}-{month}-{day}
        </div>
    </div>
  );
}