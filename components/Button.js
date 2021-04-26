const Button = ({ children, color}) => {
    if(!children) return <button>Prázdné tlačítko</button>
    return <button style={{background: color}}>{ children }</button>
}

export const greeting = (name) => "Hello" + name;


export default Button;