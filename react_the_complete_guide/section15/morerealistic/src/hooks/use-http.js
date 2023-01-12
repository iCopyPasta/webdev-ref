import { useState, useCallback } from "react";

// what needs to be flexible?
//   URL
//   request logic should be configurable
//   method
//   body
//   --> requestConfig
// {
//     url: "";
//     method: "";
//     headers: "";
//     body: "";
// }

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
        const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body): null
            }
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        applyData(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }

        setIsLoading(false);
    }, []);

    // Javascript translates this for free
    return {
        isLoading,
        error,
        sendRequest
    };

    // return {
    //     isLoading: isLoading,
    //     error: error,
    //     sendRequest: sendRequest
    // };

};

export default useHttp;