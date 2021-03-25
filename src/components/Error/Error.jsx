/* eslint-disable no-unused-vars */
import useJsonFetch from '../../hooks/useJsonFetch';

function Error() {

    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/error`);
    
    return (
        <>
        <h2>Это компонент ошибки</h2>
        {error && <p>{error}</p>}
        </>
    )
}

export default Error