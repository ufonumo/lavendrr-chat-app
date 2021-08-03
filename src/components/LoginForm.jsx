import React , {useState} from 'react';
import axios from 'axios'

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = { 
            'Project-ID' : 'ece205ae-92bc-4b53-bb7c-9125c20686c7' ,
            'User-Name' : userName ,
            'User-Secret' : password 
        };

        try{
            await axios.get('https://api.chatengine.io/chats' , {headers: authObject})
            
            localStorage.setItem('username' , userName)
            localStorage.setItem('password', password)

            window.location.reload();
        }catch(error){
            setError('Oops. incorrect credentials')
        }
        

    }

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className='title'>Chat Application</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='Insert Username' required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Insert Password' required/>
                    <div style={{textAlign: 'center'}}>
                        <button type='submit' className='button'> 
                            <span>Start chatting</span>
                        </button>
                    </div>
                    <h3 className='error'>{error} </h3>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
