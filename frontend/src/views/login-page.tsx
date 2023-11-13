import React, { useState } from 'react'

function LoginPage() {
    // State to manage user input (you might want to replace this with a state management library or context)
    const [userCreds, setUserCreds] = useState({ username: '', password: '' })

    // Function to handle form submission
    function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
        const field = target.name
        let value: string | number | boolean = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = (+value || '')
                break;
            case 'checkbox':
                value = target.checked
                break;
            default:
                break;
        }

        setUserCreds(prevCreds => ({
            ...prevCreds,
            [field]: value
        }))
    }

    async function onLogin(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        console.log(`Logging in with user ${userCreds.username}, password: ${userCreds.password}`)
    }

    const { username, password } = userCreds

    return (
        <section className='login-page'>
            <form onSubmit={onLogin}>
            <h1 className='logo'>Instagram</h1>
                <input type="text" name="username" value={username}
                    onChange={handleChange} placeholder='Phone number, username, or email' />
                <input type="password" name="password" value={password}
                    onChange={handleChange} placeholder='Password' />
                <button type="submit">Log in</button>
                <div>
                    <hr /> <pre>OR</pre> <hr />
                </div>
                <span>Log in with Facebook</span>
                <span>Forgot password?</span>
            </form>
            <p>Don't have an account? <a>Sign up</a></p>
        </section>
    )
}

export default LoginPage