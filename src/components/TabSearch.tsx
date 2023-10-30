import { useState } from 'react';
import styles from '../../styles/TabSearch.module.css';
import { IconActivity, IconBudget, IconDestine, IconDuration } from '../assets/icons';

import Select from 'react-select';

interface Option {
    value: string;
    label: string;
}

function TabSearch() {
    const [destine, setDestine] = useState<any>();
    const [activity, setActivity] = useState<any>();
    const [duration, setDuration] = useState<any>();
    const [budget, setBudget] = useState<any>();

    const optionDestine:Option[] = [
        { value: 'RJ', label: 'Rio de Janeiro' },
        { value: 'SP', label: 'São Paulo' },
        { value: 'BA', label: 'Bahia' },
        { value: 'CE', label: 'Ceará' },
    ];

    const optionActivity:Option[] = [
        { value: '1', label: 'Atividade 01' },
        { value: '2', label: 'Atividade 02' },
        { value: '3', label: 'Atividade 03' },
        { value: '4', label: 'Atividade 04' },
    ];

    const optionDuration:Option[] = [
        { value: '1', label: 'Duração 01' },
        { value: '2', label: 'Duração 02' },
        { value: '3', label: 'Duração 03' },
        { value: '4', label: 'Duração 04' },
    ];

    const optionBudget:Option[] = [
        { value: '1', label: 'Consulta 01' },
        { value: '2', label: 'Consulta 02' },
        { value: '3', label: 'Consulta 03' },
        { value: '4', label: 'Consulta 04' },
    ];

    return (
        <div className={`${styles.bg_tab_search}`}>
            <div className='grid grid-cols-12 h-full items-center px-8'>
                <div className='col-span-12 lg:col-span-10'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-3 relative'>
                            <i className='absolute' style={{ top: "1.15rem", left: "1rem", zIndex: 1 }}>{IconDestine}</i>
                            <Select
                                defaultValue={destine}
                                onChange={setDestine}
                                options={optionDestine}
                                placeholder="Destino"
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-3 relative'>
                            <i className='absolute' style={{ top: "1.15rem", left: "1rem", zIndex: 1 }}>{IconActivity}</i>
                            <Select
                                defaultValue={activity}
                                onChange={setActivity}
                                options={optionActivity}
                                placeholder="Atividade"
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-3 relative'>
                            <i className='absolute' style={{ top: "1.15rem", left: "1rem", zIndex: 1 }}>{IconDuration}</i>
                            <Select
                                defaultValue={duration}
                                onChange={setDuration}
                                options={optionDuration}
                                placeholder="Duração"
                            />
                        </div>
                        <div className='col-span-12 lg:col-span-3 relative'>
                            <i className='absolute' style={{ top: "1.15rem", left: "1rem", zIndex: 1 }}>{IconBudget}</i>
                            <Select
                                defaultValue={budget}
                                onChange={setBudget}
                                options={optionBudget}
                                placeholder="Consulta"
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-2'>
                    <button className={`${styles.bg_btn_tab_search}`}>Pesquisar</button>
                </div>
            </div>
        </div>
    )
}

export default TabSearch;