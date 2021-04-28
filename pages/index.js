import Link from "next/link";
import Button, {greeting} from './../components/Button'
import Image from './../components/Image'

const HomePage = () => {
    return <div>
        Welcome to Next.js! Go to {" "}
        <Link href="/hello"><a>hello page</a></Link>
        <Button color ="red">Tohle je moje tlačítko</Button>
        <Button />
        <Button children="Tohle je super tlačítko" />
        <Image src="https://homoky-files.fra1.digitaloceanspaces.com/2020/nL2ckrgYNz.png" width= {300} isSquare />
        
    </div>
  }
  
  export default HomePage