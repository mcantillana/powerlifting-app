import {useState, useEffect} from 'react';

export default httpClient => {
    const [error, setError] = useState(null)

    const reqInterceptor = httpClient.interceptors.request.use( req => {
        setError(null);
        return req;
    } );
    const resInterceptor = httpClient.interceptors.response.use( res => res, err => {
        setError(err);
    } );
    /*const resInterceptor = httpClient.interceptors.response.use((res) => {
        if(res.status === 200) {
            setError(null)
        }
    },
    (res) => {
        setError(res);
    });*/

    useEffect(() => {
        return () => {
            alert(reqInterceptor);
            alert(resInterceptor);
            httpClient.interceptors.request.eject( reqInterceptor );
            httpClient.interceptors.response.eject( resInterceptor );
        }
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    }

    return [ error, errorConfirmedHandler]

}
