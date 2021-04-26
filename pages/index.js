import Link from "next/link";
import Button, {greeting} from './../components/Button'

const HomePage = () => {
    return <div>
        Welcome to Next.js! Go to {" "}
        <Link href="/hello"><a>hello page</a></Link>
        <Button color ="red">Tohle je moje tlačítko</Button>
        <Button />
        <Button children="Tohle je super tlačítko" />
    </div>
  }
  
  export default HomePage