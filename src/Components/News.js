import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  articles = [
    // {
    //   source: {
    //     id: null,
    //     name: "Technews.tw",
    //   },
    //   author: "MoneyDJ",
    //   title: "電動車泡沫破滅，市值較最高峰慘縮水 1.5 兆美元",
    //   description:
    //     "新創電動車（EV）業者幾年前曾是市場寵兒，然而，打造出成功獲利的電動車事業實屬不易，新創 EV 商股價近年來也暴跌，使投資人失血上兆美元。 Barron′s分析指出，全球電動車商的市值目前合計約7,000億美元，較2022上半年高點縮水1.5兆美元。電動車商僅特斯拉（Tesla）和中國新能源車商比亞...",
    //   url: "https://finance.technews.tw/2024/03/18/the-electric-car-bubble-bursts/",
    //   urlToImage:
    //     "https://img.technews.tw/wp-content/uploads/2021/11/03115716/electric-car-gb2a409423_1280.jpg",
    //   publishedAt: "2024-03-18T06:30:45Z",
    //   content:
    //     "EV EV \r\nBarrons7,00020221.5TeslaBYD6,5001.4\r\nFactSetPolestarLucidVinFastRivian6,500580\r\n2020\r\nFisker55%\r\nRivian50%Piper SandlerAlexander PotteR2R3R3X\r\nUBSWells FargoDeutsche Bank\r\nAppleAI\r\nRho Motion… [+49 chars]",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Yahoo Entertainment",
    //   },
    //   author: "鄭勝得",
    //   title: "特斯拉股價跌跌不休 女股神逆勢加碼",
    //   description:
    //     "受到需求放緩與競爭加劇的影響，電動車龍頭特斯拉（Tesla）近日股價重摔，跌至十個月低點。素有「女股神」之稱的伍德（Cathie Wood）危機入市，旗下方舟投資管理公司（ARK Invest）趁機逢低加碼，顯示她依然看好特斯拉後市。",
    //   url: "https://tw.stock.yahoo.com/news/%E7%89%B9%E6%96%AF%E6%8B%89%E8%82%A1%E5%83%B9%E8%B7%8C%E8%B7%8C%E4%B8%8D%E4%BC%91-%E5%A5%B3%E8%82%A1%E7%A5%9E%E9%80%86%E5%8B%A2%E5%8A%A0%E7%A2%BC-142946396.html",
    //   urlToImage:
    //     "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
    //   publishedAt: "2024-03-18T06:29:46Z",
    //   content:
    //     "TeslaCathie WoodARK Invest\r\n143ETF216,682162.53,521ETF2023127.62Coinbase10.19\r\n 00918 1! 1.3 22IC",
    // },
    // {
    //   source: {
    //     id: null,
    //     name: "Biztoc.com",
    //   },
    //   author: "watcher.guru",
    //   title: "Cryptocurrency: 3 Coins Under $1 To Buy This Week For Profits",
    //   description:
    //     "The cryptocurrency market is booming this month after Bitcoin touched a new all-time high of $73,737 last week. The spike in price made leading altcoins touch new monthly highs generating decent profits to investors. The meme coin segments delivered the highe…",
    //   url: "https://biztoc.com/x/2a92cb4ada0e3718",
    //   urlToImage: "https://c.biztoc.com/p/2a92cb4ada0e3718/s.webp",
    //   publishedAt: "2024-03-18T06:26:11Z",
    //   content:
    //     "The cryptocurrency market is booming this month after Bitcoin touched a new all-time high of $73,737 last week. The spike in price made leading altcoins touch new monthly highs generating decent prof… [+293 chars]",
    // },
    // {
    //   source: {
    //     id: "der-tagesspiegel",
    //     name: "Der Tagesspiegel",
    //   },
    //   author: "Der Tagesspiegel",
    //   title:
    //     "Waldbesetzung in Grünheide: Gerichtsentscheidung zu Tesla-Protestcamp frühstens Dienstag",
    //   description:
    //     "Die Situation im Protestcamp gegen die Tesla-Erweiterung könnte sich zuspitzen. Nach einem Gerichtsurteil wird sich zeigen, ob und wie die Aktion fortgesetzt werden darf.",
    //   url: "https://www.tagesspiegel.de/potsdam/brandenburg/waldbesetzung-in-grunheide-gerichtsentscheidung-zu-tesla-protestcamp-fruhstens-dienstag-11380738.html",
    //   urlToImage:
    //     "https://www.tagesspiegel.de/images/waldbesetzung-bei-tesla-werk-in-grunheide4/alternates/BASE_16_9_W1400/waldbesetzung-bei-tesla-werk-in-gruenheide.jpeg",
    //   publishedAt: "2024-03-18T06:25:34Z",
    //   content:
    //     "Das Verwaltungsgericht in Potsdam hat eine Entscheidung zum Protestcamp am Tesla-Werk in Grünheide für frühestens Dienstag angekündigt. Die Beteiligten hätten noch Gelegenheit zu wechselseitigen Stel… [+1839 chars]",
    // },
  ];
  static defaultProps ={
    country :'in',
    pageSize :8,
    category: 'general'
  }
     static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
    }

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news componenet");
    this.state = {
      //   articles: this.articles,
      articles: [],
      loading: false,
      page:1,

    };
    document.title = `NewsMonkey - ${this.capt (this.props.category)}`;
  }

  capt=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  // async update(){
  //   const url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45050741c382414398f7a64770a9db5c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({ articles: parsedData.articles ,totalResults: parsedData.totalResults , loading:false});
  // }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45050741c382414398f7a64770a9db5c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults: parsedData.totalResults , loading:false});
    
    // this.update();
  }
  preClick = async () => {
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45050741c382414398f7a64770a9db5c&page=${ this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({loading:false});
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
    // this.setState({
    //   page:this.state.page -1,
    // })
    // this.update();
  };

  nextClick = async () => {
    console.log("next");
    
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=45050741c382414398f7a64770a9db5c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
      // this.setState({
      //   page:this.state.page+1,
      // })
      // this.update();
      
   
  };

  render() {
    return (
      <div className="container my-3 mx -3">
        <h1 className="text-center">NewsMonkey - Top Headlines on {this.capt (this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page<=1}
            className="btn btn-dark my-3 mx-3"
            onClick={this.preClick}>
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark  my-3 mx-3"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.nextClick}>
            Next &rarr;
          </button>
        </div>

        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((e) => {
            //   console.log(e);
             return (
              <div className="col-md-4" key={e.url}>
                <NewsItem
                  title={e.title ? e.title : " "}
                  description={e.description ? e.description : " "}
                  imageUrl={e.urlToImage}
                  newsUrl={e.url? e.url:""} author={e.author?e.author:" Unknown"} date={e.publishedAt?e.publishedAt:" Not Mentioned"} source={e.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page<=1}
            className="btn btn-dark my-3 mx-3"
            onClick={this.preClick}>
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark  my-3 mx-3"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.nextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
