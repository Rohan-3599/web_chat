import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
const App = () => {
    return (
        <ChatEngine 
        height="100vh"
        projectID="d7b047cf-f476-4bfd-98da-edd77240b797"
        userName="Ghost_warrior"
        userSecret= "123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
 export default App;