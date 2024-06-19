
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const USERS = [
    {
      twName: 'Javier Milei',
      twUserName: 'JMilei',
      twIsFollowing: false
    },
    {
      twName: 'Jordan B Peterson',
      twUserName: 'jordanbpeterson',
      twIsFollowing: false
    },
    {
      twName: 'Elon Musk',
      twUserName: 'elonmusk',
      twIsFollowing: false
    }
]

export function App () {
    return (
        <section className='tw-followCard-container'>
          <h1 className="tw-followCard-title">Who to follow</h1>          
          {
            USERS.map(({ twUserName, twName, twIsFollowing }) => 
            <TwitterFollowCard
                key={twUserName}
                userName={twUserName}
                initialIsFollowing={twIsFollowing}
            >
                {twName}
            </TwitterFollowCard>
            )
          }
        </section>
    )
}


{ /*
  <TwitterFollowCard userName="JMilei" initialIsFollowing>
      Javier Milei
  </TwitterFollowCard>
  <TwitterFollowCard userName="jordanbpeterson" initialIsFollowing={false}>
      Jordan B Peterson
  </TwitterFollowCard>
  <TwitterFollowCard userName="elonmusk" initialIsFollowing>
      Elon Musk
  </TwitterFollowCard>

  */}

  { /*<TwitterFollowCard name="Javier Milei" userName="JMilei" initialIsFollowing/> */}
  { /*<TwitterFollowCard name="Jordan B Peterson" userName="jordanbpeterson" initialIsFollowing={false}/> */}
  {/* <TwitterFollowCard name="Elon Musk" userName="elonmusk" initialIsFollowing/> */}