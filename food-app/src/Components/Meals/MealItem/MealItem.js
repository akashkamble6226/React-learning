import cssClasses from './MealsItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={cssClasses.meal}>
      <div >
        <h3 className={cssClasses.name}>{props.name}</h3>
        <div className={cssClasses.description}>{props.desc}</div>
        <div className={cssClasses.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
