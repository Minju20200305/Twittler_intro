import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          {"total: " + dummyTweet.length}
          TODO : dummyTweet로 전달되는 데이터의 갯수를 보여줍니다.
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>codestates</div>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isParkHacker = tweet.username === 'parkhacker'
        const tweetUserNameClass = isParkHacker
          ? 'tweet__username tweet__username--purple'
          : 'tweet__username';
        return (
          <li className="tweet" key={tweet.id}>
            <span className={tweetUserNameClass}>{tweet.username}</span>
            <div className="tweet__profile">
              <img scr={tweet.picture} />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className="tweet__username"></span>
                <span className="tweet__createdAt"></span>
                {/* TODO : 유져 이름이 있어야 합니다. */}
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
              </div>
              TODO : 트윗 메세지가 있어야 합니다.
              <div className="tweet__message"></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      TODO : Footer 컴포넌트를 작성합니다.
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        TODO : Sidebar 
        컴포넌트를 
        작성합니다.
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
