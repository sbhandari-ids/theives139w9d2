// Updating State Exercise
// - Using the following starter code, update the name of player in the game object "onClick" to anything else.
// Here is your starter code:
const Component = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan"
        }
     })
     const counter = 0
     const names=['Ann', 'Barbie', 'Carolina','Diana' ,'Emma','Faira' ]
    const handleClick = () => { 
        // your code here
    }

    return (

        <p> game.id</p>
        <p> game.player.name</p>
        // your JSX here
        <button onClick={handleClick}> Change Name </button>
    )