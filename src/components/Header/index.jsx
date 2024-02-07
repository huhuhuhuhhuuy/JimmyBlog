import "./index.css";
import { Button, Dropdown, Space} from 'antd';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Space direction="vertical" align="center">
                <Space wrap size="large">
                <Link to="/" >
                    <Button>主页</Button>
                </Link>
                <Link to="/article" >
                    <Dropdown
                        menu={{
                        items,
                        }}
                        placement="bottom"
                    >
                        <Button>文章</Button>
                    </Dropdown>
                </Link>
                <Link to="/buildWeb" >
                    <Button>建站</Button>
                </Link>
                <Link to="/works" >
                    <Button>作品</Button>
                </Link>
                    <Button>编辑✍️</Button>
                <Link to="/about" >
                    <Button>关于</Button>
                </Link>
                </Space>
            </Space>
        </div>

    );
}
export default Header;

const items = [
  {
    key: '1',
    label: (
      <p>搜索</p>  
    ),
  },
  {
    key: '2',
    label: (
        <p>标签</p>  
    ),
  },
  {
    key: '3',
    label: (
        <p>分类</p>  
    ),
  },
];
