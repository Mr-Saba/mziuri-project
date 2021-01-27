import React from 'react'
import Header from '../../Components/Header/Header'
import styles from './styles.module.css'
import NewsFeed from '../../Components/NewsFeed/NewsFeed'
import UsersList from '../../Components/UsersList/UsersList'


function MainPage() {
    return (
        <div>
            <Header></Header>
            <div className={styles.Flex}>
                <NewsFeed></NewsFeed>
                <UsersList></UsersList>
            </div>
        </div>
    )
}

export default MainPage
