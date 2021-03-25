/* eslint-disable no-unused-vars */
import useJsonFetch from '../../hooks/useJsonFetch';

function Data() {

    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/data`);
    
    return (
        <>
        <h2>Это компонент данных</h2>
        <p>{data.status}</p>
        </>
    )
}

export default Data