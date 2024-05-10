import './App.css'
import { Children, useState } from 'react'

export function TwitterFollowCard ({ userName, children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt="El avatar de Elon" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span 
                        className='tw-followCard-infoUserName'>{addAt(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
