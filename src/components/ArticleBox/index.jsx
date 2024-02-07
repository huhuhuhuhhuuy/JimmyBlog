// import React from 'react'
// import { useEffect } from 'react';
import './index.css'

export default function ArticleBox(data) {
  var lastTime = new Date();
  var lastTimeStr = lastTime.getFullYear()+'-'+(lastTime.getMonth()+1)+'-'+lastTime.getDate();
  console.log(lastTimeStr);
  console.log(data.data.diaryTag);

  return (
    <div className='articleBox' id={data.data.diaryId}>
    <p className='atcFirstTime'>
        <span>初次✍️时间: {data.data.diaryTime}</span>
        <br />
        <span>最新✍️时间: {lastTimeStr}</span>
      </p>
      <div className='atcTitle'>{data.data.diaryTitle}</div>
      {data.data.diaryTag.map((e)=>{
        return <span className='atcTag'>{e}</span>
      })}
      <p className='atcContent'>{data.data.diaryContent}</p>
    </div>
  )
}
