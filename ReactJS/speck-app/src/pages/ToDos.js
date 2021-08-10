import React, { useEffect, useState } from 'react'

import { apiCall } from '../services/fetch.js';
import Main from '../components/Main/Main';
import LoaderWrapper from '../components/LoaderWrapper/LoaderWrapper.js';

const ToDos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        apiCall().then(res => {
            setData(res)
        });
    }, []);

    return (
        <Main>
            {
                data.length ? 
                    <ul>
                        {
                        data.map((todo, idx) => 
                            <li key={ idx }>
                                { todo.title }
                            </li>) 
                        }
                    </ul>
                    : 
                    <LoaderWrapper />
            }
        </Main>
    );
}

export default ToDos;