import React, { useState, useEffect } from "react";
import axios from "axios";

export default function testRequest() {
    const [customers, setCustomer] = useState<{ [key: string]: Customer }>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:1337/api/customers"
                );
                console.log("Response data:", response.data);
                setCustomer(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <section id="temain">
                {Object.keys(customers).map((key) => {
                    const customer = customers[key];
                    return (
                        <a href="#" className="a-container" key={key}>
                            <div className="div-container">
                                <p>{customer.name ?? "No name available"}</p>
                                <p>{customer.surname ?? "No name available"}</p>
                            </div>
                        </a>
                    );
                })}
            </section>
        );
    }
}
