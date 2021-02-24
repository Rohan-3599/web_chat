import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine 
        height="100vh"
        projectID="d7b047cf-f476-4bfd-98da-edd77240b797"
        userName={localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
 export default App;