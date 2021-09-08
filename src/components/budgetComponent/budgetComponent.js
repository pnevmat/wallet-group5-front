import React, {useState, useEffect} from 'react';

import ProgressBar from './progressBarComponent/progressBar';
import AddBudgetButton from '../addBudgetButton/addBudgetButton';
import EditBudgetButton from '../editBudgetButton/editBudgetButton';

import styles from './budgetComponent.module.css';

const BudgetComponent = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState(0);

    const todayDate = Date.now();
    const normalDate = Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(todayDate)

    const numberOfYears = normalDate - 2000;

    const years = []
    
    for (let i = 0; i <= numberOfYears; i += 1) {
        years.push(2000 + i)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'month':
                setMonth(value);
                break;
            case 'year':
                setYear(value);
                break;
            default:
                console.log('error');
        };
    };

    useEffect(() => {
        if (month !== '' && year !== 0) {
            handleSubmit();
        };
    }, [month, year])
    
    const handleSubmit = () => {
        // onSubmit({ month, year });
    };

    const budgetItemsArray = [
        {id: 1, categorie: 'Категория1', planAmmount: 1000, factAmmount: 500},
        {id: 2, categorie: 'Категория2', planAmmount: 500, factAmmount: 500},
        {id: 3, categorie: 'Категория3', planAmmount: 2000, factAmmount: 700},
        {id: 4, categorie: 'Категория4', planAmmount: 3000, factAmmount: 1500},
        {id: 5, categorie: 'Категория5', planAmmount: 700, factAmmount: 800},
        {id: 6, categorie: 'Категория6', planAmmount: 1500, factAmmount: 1500},
        {id: 7, categorie: 'Категория7', planAmmount: 1900, factAmmount: 1500}
    ]

    let total = 0
    budgetItemsArray.map((item, i) => total += item.planAmmount)
    
    return (
        <div className={styles.container}>
            <div className={styles.actionsContainer}>
                <AddBudgetButton />
                <EditBudgetButton />
                <button className={styles.button} type='button'>Удалить</button>
            </div>
            <div className={styles.budgetContainer}>
                <span className={styles.budgetTitle}>Бюджет на месяц</span>
                <form className={styles.form}>
                    <select className={styles.formSelect} name="month"
                        onChange={e => {
                            handleChange(e)
                        }}
                    >
                        <option className={styles.formMonthOptions} selected>Месяц</option>
                        <option value='Jan' className={styles.formMonthOptions}>Январь</option>
                        <option value='Feb' className={styles.formMonthOptions}>Февраль</option>
                        <option value='Mar' className={styles.formMonthOptions}>Март</option>
                        <option value='Apr' className={styles.formMonthOptions}>Апрель</option>
                        <option value='May' className={styles.formMonthOptions}>Май</option>
                        <option value='June' className={styles.formMonthOptions}>Июнь</option>
                        <option value='July' className={styles.formMonthOptions}>Июль</option>
                        <option value='Aug' className={styles.formMonthOptions}>Август</option>
                        <option value='Sept' className={styles.formMonthOptions}>Сентябрь</option>
                        <option value='Oct' className={styles.formMonthOptions}>Октябрь</option>
                        <option value='Nov' className={styles.formMonthOptions}>Ноябрь</option>
                        <option value='Dec' className={styles.formMonthOptions}>Декабрь</option>
                    </select>
                    <select className={styles.formSelect} name="year"
                        onChange={e => {
                            handleChange(e)
                        }}
                    >
                        <option selected>Год</option>
                        {years.map((year, index) => {
                            return (<option key={index}>{year}</option>)
                        })}
                    </select>
                </form>
                <ul className={styles.budgetList}>
                    {budgetItemsArray.map(item => 
                        <li key={item.id} className={styles.budgetListItem}>
                            <div className={styles.budgetItemContainer}>
                                <span>{item.categorie}</span>
                                <span className={styles.budgetItemPlanAmmount}>{item.planAmmount}</span>
                            </div>
                            <div className={styles.budgetItemContainer}>
                                <ProgressBar props={item} />
                                <span className={
                                    item.planAmmount >= item.factAmmount ? styles.summaryAmountRegular : styles.summaryAmountOverspent
                                }>
                                    {item.factAmmount}
                                </span>
                            </div>
                        </li>
                    )}
                </ul>
                <div className={styles.summaryContainer}>
                    <span>И того:</span>
                    <span className={styles.budgetItemPlanAmmount}>{total}</span>
                </div>
            </div>
            {/* <ModalAddBudget /> */}
        </div>
    );
};

export default BudgetComponent;
