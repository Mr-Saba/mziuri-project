import React from 'react'
import { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import styles from "./styles.module.css"
import { useForm } from 'react-hook-form'

function AuthPage() {
    const [state, setState] = useState({
        username: ' ',
        password: ' '
    })

    const { register, handleSubmit, errors } = useForm()

    const handleLogin = (data) => {
        console.log(data.username)
    }
    const inputStyle = {
        margin: '5px'
    }
    // const addUser = () => {
    //     localStorage.setItem(`user${localStorage.length + 1}`, JSON.stringify(state.username))
    //     console.log(state.username)
    // }
    return (
        <div className={styles.AuthPage}>
            <form>
                <TextField style={inputStyle} name="username" label="Username" variant="outlined"
                    onBlur={(e) => setState({ ...state, username: e.target.value })}
                    inputRef={register({
                        required: {
                            value: true,
                            message: "username is required"
                        }
                    })} />
                {errors.username && <p>{errors.username.message}</p>}
                <TextField style={inputStyle} name="password" type="password" label="Password" variant="outlined"
                    onBlur={(e) => setState({ ...state, password: e.target.value })}
                    inputRef={register({
                        required: {
                            value: true,
                            message: "password is required"
                        }
                    })} />
                {errors.password && <p>{errors.password.message}</p>}
                <Button style={inputStyle} onClick={handleSubmit(handleLogin)} variant="contained">Sign in</Button>
            </form>
        </div>
    )
}

export default AuthPage
