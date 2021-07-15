import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import statisticsOperation from '../../redux/operations/statisticsOperation';

import ChartComponent from './chart/chart';
import Table from './table/table';

import authSelectors from '../../redux/selectors/authorisationSelectors';

const DiagramTab = () => {
    const userToken = useSelector(authSelectors.getUserToken)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(statisticsOperation(userToken))
    }, []);

    const backResponse = {
        status: "success",
        code: 200,
        data: {
            incomeBalance: 53000,
            costBalance: 16000,
            categories: [
                {id: 1, categorie: "Основной доход", amount: 35000, color: "#372813"},
                {id: 2, categorie: "Ремонт машины", amount: 13000, color: "#030b05"},
                {id: 3, categorie: "Ремонт ноутбука", amount: 3000, color: "#1d101c"},
                {id: 4, categorie: "Допольнительный зароботок", amount: 18000, color: "#040c06"}
            ]
        }
    }

    return (
        <>
        <ChartComponent chartPercentage={backResponse} />
        <Table table={backResponse} />
        </>
    );
};

export default DiagramTab;