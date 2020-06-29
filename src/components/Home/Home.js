import React from 'react';
import Body from "../../helpers/Body/Body";
import Loading from "../../helpers/Loading/Loading";
import {RestService} from "../../services/RestService";
// import data from "../../assets/data";
import NewsItem from "./NewsItem";
import './Home.css';
import Chart from "./Chart";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {iaLoading: true, page: 1, data: []}
  }

  getData = () => {
    const page = this.state.page;
    RestService.get('/data.php?page=' + page).then((res) => {
      console.log(res);
      this.setState({data: res.data.hits, isLoading: false})
    }).catch(() => this.setState({isLoading: false}));
    // this.setState({data: data.hits, isLoading: false})
  };

  componentDidMount() {
    this.getData();
  }

  handleUpvote = (item) => {
    const data = this.state.data;
    const index = data.indexOf(item);
    let points = parseInt(item.points);
    item.points = ++points;
    data.splice(index, 1, item);
    this.setState({data: data});
  };

  handleHide = (item) => {
    const data = this.state.data;
    const index = data.indexOf(item);
    data.splice(index, 1);
    this.setState({data: data});
  };

  updatePage = (type) => {
    const page = this.state.page;
    let pageInt = parseInt(page);
    const pageFinal = type == 1 ? pageInt + 1 : pageInt - 1;
    if (pageFinal != 0) {
      this.setState({page: pageFinal}, () => this.getData());
    }
  };

  render() {
    const data = this.state.data;
    if (this.state.isLoading) {
      return (
        <Body>
          <Loading/>
        </Body>
      );
    }
    return (
      <Body>
        <div className="news-block orange">
          <div className="news-comments">Comments</div>
          <div className="news-votes">Votes</div>
          <div className="news-upvote">Upvote</div>
          <div className="news-details">News Details</div>
        </div>
        {data.map((item) => (<NewsItem key={item.objectID}
                                       item={item}
                                       onUpvoteClick={() => this.handleUpvote(item)}
                                       onHideClick={() => this.handleHide(item)}/>))}
        <div className="news-nav">
          <a className="pointer user-select" onClick={() => this.updatePage(0)}>Previous</a> | <a
          className="pointer user-select" onClick={() => this.updatePage(1)}>Next</a>
        </div>
        <hr/>
        <Chart data={data}/>
        <hr/>
        >
      </Body>
    )
  }
}

export default Home;
