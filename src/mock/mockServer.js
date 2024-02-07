import Mock from 'mockjs';
import articleData from './data.json';

Mock.mock('/api/data', 'get', {code:200,data:articleData});