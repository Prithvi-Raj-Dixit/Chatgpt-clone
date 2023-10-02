import './App.css';
import gptLogo from './assets/chatgpt.svg' 
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'


function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt='Logo' className='logo' /><span className='brand'>StoryGenerator</span></div>
          <button className='midbtn'><img src={addBtn} alt='new chat' className='addBtn' />Generate New Story</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='Query' className='addBtn'/>How to Generate Story Using prompt ?</button>
            <button className='query'><img src={msgIcon} alt='Query' className='addBtn'/>How to use StoryGenerator API ?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='Read' className='listitemsImg' />Read</div>
          <div className='listItems'><img src={saved} alt='Save' className='listitemsImg' />Save</div>
          <div className='listItems'><img src={rocket} alt='Share' className='listitemsImg' />Share</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img  className='chatimg' src={userIcon} alt='' /> <p className='txt'>adscnjdnxkwn</p>
          </div>
          <div className='chat bot'>
            <img  className='chatimg' src={gptImgLogo} alt='' /> <p className='txt'>adscnjdnxkwn</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Write a prompt to generate story' /><button className='send'><img src={sendBtn} alt='Send' /></button>
          </div>
          <p>Made by Prithvi Raj Dixit copyright@2023 | Country:India</p>
        </div>
      </div>
    </div>
  );
}

export default App;
