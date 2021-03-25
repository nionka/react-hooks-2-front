/* eslint-disable no-unused-vars */
import useJsonFetch from '../../hooks/useJsonFetch';

function Loading() {

    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/loading`);

    return (
        <>
        <h2>Это компонент загрузки</h2>
        {loading && <p>Loading...</p>}
        </>
    )
}

export default Loading