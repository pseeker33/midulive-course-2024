import { useState } from 'react'

export const TwitterFollowCard = ({ userName, children, initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const addAt = (name) => `@${name}`

  const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'      
      
      const handleClick = () => setIsFollowing(!isFollowing) 
      
      const buttonText = isFollowing ? 'Following' : 'Follow'

  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/twitter/${userName}`}
                alt={`El avatar de ${children}`} 
            />
            <div className='tw-followCard-userInfo'>
                <strong>{children}</strong>
                <span 
                    className='tw-followCard-userInfo-userName'>{addAt(userName)}
                </span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-buttonText'>{buttonText}</span>
                <span className='tw-followCard-stopFollow'>Unfollow</span>
            </button>
        </aside>
    </article>
    /*
    emmet del return:
    article.tw-followCard>header.tw-followCard-header>img.tw.followCard-avatar+.tw-followCard-info>strong{{children}}+span{addAt(userName)}^^aside>button.{buttonClassName}[onClick={handleClick}]>span.tw-followCard-info{{text}}+span.tw-followCard-stopFollow{Unfollow}
    */
  )
}



/*<html lang="en">
 
  <body>
    <button class="themer">Dark</button>

    <div class="card">
      <h1 class="card-title">Who To Follow</h1>
      <span class="divider"></span>
      <div class="profile">
        <div class="profile-pic img-one"></div>
        <div class="profile-info">
          <span class="display-name">Albert Dare</span>
          <span class="username">albertdera</span>
        </div>
        <button class="follow-button followed">Unfollow</button>
      </div>
      <span class="divider"></span>
      <div class="profile">
        <div class="profile-pic img-two"></div>
        <div class="profile-info">
          <span class="display-name">Meysam Jarahkar</span>
          <span class="username">arona</span>
        </div>
        <button class="follow-button">Follow</button>
      </div>
      <span class="divider"></span>
      <div class="profile">
        <div class="profile-pic img-three"></div>
        <div class="profile-info">
          <span class="display-name">Meysam Jarahkar</span>
          <span class="username">arona</span>
        </div>
        <button class="follow-button">Follow</button>
      </div>

      <a href="" class="show-more">Show More</a>
    </div>

    <script src="app.js"></script>
  </body>
</html>
*/