
import React, { useEffect, useState } from 'react';

function UseEffectLearning() {
    const [user, setUser] = useState([]);

const [count, setCount] = useState(30);
    useEffect(() => {
        async function getData() {
            let response = await fetch(`https://api.github.com/users?per_page=${count}`);
            let data = await response.json();
            setUser(data);
        }
        getData()
    }, [count])
    return (
        <div style={{
            minHeight: "100vh",
            padding: "40px",
            background: "#f4f6fb",
            fontFamily: "Arial"
        }}>

            <h1 style={{
                textAlign: "center",
                color: "#1e293b"
            }}>
                GitHub Users
            </h1>
            <input value={count} type='number' onChange={(e)=>setCount(e.target.value)}/>

            <p style={{
                textAlign: "center",
                color: "#64748b",
                marginBottom: "35px"
            }}>
                Explore GitHub Developers
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px"
            }}>

                {user.map((item) => (
                    <div key={item.id} style={{
                        background: "white",
                        padding: "28px 20px",
                        borderRadius: "16px",
                        textAlign: "center",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.07)"
                    }}>

                        <img
                            src={item.avatar_url}
                            alt={item.login}
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                border: "4px solid #e2e8f0"
                            }}
                        />

                        <h2 style={{
                            color: "#1e293b",
                            fontSize: "20px"
                        }}>
                            {item.login}
                        </h2>

                        <p style={{ color: "#64748b" }}>
                            User ID: {item.id}
                        </p>

                        <a
                            href={item.html_url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 20px",
                                background: "#2563eb",
                                color: "white",
                                textDecoration: "none",
                                borderRadius: "8px",
                                fontWeight: "bold"
                            }}
                        >
                            View Profile
                        </a>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default UseEffectLearning;
