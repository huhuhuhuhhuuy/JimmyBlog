import ArticleBox from '../../components/ArticleBox'
import './index.css'
import '../../mock/mockServer.js';
import { Pagination } from 'antd';

export default function Home(data) {
    const articleData = data.data;
    let articleData1 = articleData.slice(0,5);
    //多页切换----拿到数据之后先拆分十条出来在页面上显示，在页面切换tab的回掉函数中点击后切换后十条,
    //将页面切换和页面重载相对应
    console.log(articleData);
    const pageSwitch = function(e){
      console.log(e);
      articleData1 = articleData1.slice((e-1)*5,e*5);
    }
  return (
    <div>
        <div className='Content'>
        {articleData1.map(function(e){
          return <ArticleBox data={e} key={e.dairyId}></ArticleBox>
        })}   
        <Pagination defaultCurrent={1} total={15} onChange={pageSwitch} /> 
        </div>
    </div>
  )
}

