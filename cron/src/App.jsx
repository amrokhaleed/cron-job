import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const fetchCount = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/count");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCount(data.count);
        } catch (error) {
            console.error('Error fetching count:', error);
        }
    };

    useEffect(() => {
        // Fetch the initial count
        fetchCount();

        // Set up an interval to fetch the count every 10 seconds
        const interval = setInterval(fetchCount, 10000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
           
                <p>
                    count is {count}
                </p>

        </>
    );
}

export default App;
