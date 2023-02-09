import cssClasses from './Card.module.css';


const card = props =>{
    return <div className={cssClasses.card}>{props.children}</div>
} 

export default card;