import React, { useState, useEffect } from "react";
import './FilterList.css';

const mockData = [
    { id: "1", name: "Alice Smith", phone: "+123456789" },
    { id: "2", name: "Bob Johnson", phone: "+987654321" },
    { id: "3", name: "Charlie Brown", phone: "+192837465" },
    { id: "4", name: "John Wick", phone: "+564738219" },
    { id: "5", name: "John Anderson", phone: "+123789456" },
];

function FilterList() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState([]);
    const [modalPerson, setModalPerson] = useState(null); // Modal state

    useEffect(() => {
        if (query.length === 0) {
            setResults([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        const timeout = setTimeout(() => {
            setResults(
                mockData.filter(
                    (person) =>
                        person.name.toLowerCase().includes(query.toLowerCase()) ||
                        person.phone.includes(query)
                )
            );
            setLoading(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, [query]);

    const handleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
        );
    };

    // Modal component
    const Modal = ({ person, onClose }) => (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
        }}>
            <div style={{
                background: "#fff",
                borderRadius: 8,
                padding: 24,
                minWidth: 300,
                boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                position: "relative"
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        background: "transparent",
                        border: "none",
                        fontSize: 20,
                        cursor: "pointer"
                    }}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 style={{ marginTop: 0 }}>Contact Info</h2>
                <div><strong>Name:</strong> {person.name}</div>
                <div><strong>Phone:</strong> {person.phone}</div>
                <div><strong>ID:</strong> {person.id}</div>
            </div>
        </div>
    );

    return (
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <label htmlFor="sms-to-input">To:</label>
            {/* Chips for selected contacts */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                {selected.map((id) => {
                    const person = mockData.find((p) => p.id === id);
                    if (!person) return null;
                    return (
                        <span
                            key={id}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                background: "#e0e0e0",
                                borderRadius: 16,
                                padding: "4px 12px",
                                fontSize: "0.95em",
                                marginRight: 4,
                                marginBottom: 4,
                            }}
                        >
                            {person.name}
                            <button
                                onClick={() =>
                                    setSelected((prev) => prev.filter((sid) => sid !== id))
                                }
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    marginLeft: 8,
                                    cursor: "pointer",
                                    fontSize: 16,
                                    lineHeight: 1,
                                }}
                                aria-label={`Remove ${person.name}`}
                                type="button"
                            >
                                &times;
                            </button>
                        </span>
                    );
                })}
            </div>
            <input
                id="sms-to-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a name or phone number"
                style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
            />
            {query && (
                <ul className="dropdown-list">
                    {loading ? (
                        <li style={{ padding: "8px", textAlign: "center" }}>
                            <span>Loading...</span>
                        </li>
                    ) : results.length === 0 ? (
                        <li style={{ padding: "8px", textAlign: "center" }}>
                            <span>No matches found</span>
                        </li>
                    ) : (
                        results.map((person) => (
                            <li
                                key={person.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "8px",
                                    borderBottom: "1px solid #eee",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selected.includes(person.id)}
                                    onChange={() => handleSelect(person.id)}
                                    style={{ marginRight: 8 }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: "bold" }}>{person.name}</div>
                                    <div style={{ fontSize: "0.85em", color: "#555" }}>
                                        {person.phone}{" "}
                                        <span style={{ fontSize: "0.85em" }}>&middot; ID: {person.id}</span>
                                    </div>
                                </div>
                                <button
                                    style={{
                                        marginLeft: 8,
                                        fontSize: "0.85em",
                                        padding: "2px 8px",
                                    }}
                                    onClick={() => setModalPerson(person)}
                                    type="button"
                                >
                                    Info
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            )}
            {modalPerson && (
                <Modal person={modalPerson} onClose={() => setModalPerson(null)} />
            )}
        </div>
    );
}

export default FilterList;