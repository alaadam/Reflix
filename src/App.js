import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Component } from 'react';
import Home from './components/Home';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail ';

class App extends Component {
  constructor() {
    super()
    this.state = {
      curUser: null,
      searchedWord: "",
      users: [
        { id: 0, name: "alaa", img: "/imgs/alaa_img.jpg", budget: 100 },
        { id: 1, name: "musa", img: "http://filestack.itcraftlab.com/wp-content/uploads/2018/05/Kitten-min.png", budget: 100 },
        { id: 2, name: "ameer", img: "http://filestack.itcraftlab.com/wp-content/uploads/2018/05/Kitten-min.png", budget: 100 },
        { id: 3, name: "ekram", img: "http://filestack.itcraftlab.com/wp-content/uploads/2018/05/Kitten-min.png", budget: 100 }
      ],
      movies: [
        { id: 0, isRented: true, title: "Paws", year: 1975, img: "/imgs/paws_movie.jpg", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: true, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: true, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: true, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: true, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      searchedMovies : [
        { id: 0, isRented: true, title: "Paws", year: 1975, img: "/imgs/paws_movie.jpg", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: true, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: true, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: true, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: true, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ]
    }
  }
  updateSearchedWord = (str)=>{
    this.setState({
      searchedMovies : this.state.movies
    })
    this.setState({
      searchedWord:str
    },function(){
      this.updateSearchedMovies()
    })
  }

  updateSearchedMovies = ()=>{
    let curMovies = [...this.state.searchedMovies]
    console.log(this.state.searchedWord)
     curMovies = curMovies.filter(movie => movie.title.toLowerCase().includes(this.state.searchedWord))
     this.setState({
       searchedMovies:curMovies
     })

  }

  updateCurUser = (userID) => {
    this.setState({
      curUser: userID
    }, function () {
      console.log("alaa is right ", this.state.curUser)
    })
  }

  toggleRent = (movieID) => {
    let curMovies = [...this.state.movies]
    for (let i of curMovies) {
      if (i.id === movieID) {
        this.updateBalance(this.state.curUser, i.isRented ? 1 : -1)
        i.isRented = !i.isRented
      }
    }
    console.log(curMovies)
    this.setState({
      movies: curMovies
    }, function () {
      console.log(this.state.movies)
    })
  }

  updateBalance = (userID, status) => {
    let curUsers = [...this.state.users]
    for (let i of curUsers) {
      if (i.id === userID) {
        i.budget += status * 20
      }
    }
    this.setState({
      users: curUsers
    }, function () {
      console.log(this.state.users)
    })
  }

  getBudget = () => {

    for (let i of this.state.users) {
      if (i.id === this.state.curUser) {
        return i.budget
      }
    }}

    render() {
      return (
        <Router>
          <div className="App">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </div>
          <Route path="/" exact render={() => <Home updateCurUser={this.updateCurUser}  users={this.state.users} />} />
          <Route path="/catalog" exact render={() => <Catalog toggleRent={this.toggleRent} updateSearchedMovies={this.updateSearchedMovies} getBudget={this.getBudget} searchedWord={this.state.searchedWord} updateSearchedWord={this.updateSearchedWord} movies={this.state.searchedMovies} />} />
          <Route path="/movies/:movieID" exact render={({ match }) => <MovieDetail match={match}  movies={this.state.movies}/>}/>

        </Router>
      );
    }
  }

  export default App;
