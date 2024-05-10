import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
      userName: 'JMilei',
      name: 'Javier Milei',
      isFollowing: true
    },
    {
      userName: 'jordanbpeterson',
      name: 'Jordan B Peterson',
      isFollowing: false
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: true
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
                ))
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
 