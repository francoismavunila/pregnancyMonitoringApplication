import React,{useState,useEffect} from 'react';
import ArticleCard from '../components/ArticleCard'
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles((theme) => ({
    artClass: {
        display: 'flex',
        justifyContent:'space-around',
        flexFlow: 'wrap'
      }
  }));
const Articles = () => {
    const [article, setArticle] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        fetch('http://localhost:8000/articles')
        .then(res=>res.json())
        .then(data=>{
            setArticle(data)
            console.log('fetch')
            console.log(data)
        })
    },[])
    const breakpoints={
        default:3,
        1100:2,
        700:1
    }
    return (
        <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
                {article.map(article=>(
                <ArticleCard key={article.id} title={article.title} published={article.published} message={article.message}/>
                ))}
        </Masonry>
    );
};

export default Articles;