import { useSelector } from "react-redux"
const FeedContainer = () => {
    const {user} = useSelector(state => state.user) 
    return (
        <div>
            Welcome <span>{JSON.stringify(user)}!!!</span>
            <button>Logout</button>
        </div>
    )
}

export default FeedContainer