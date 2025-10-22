import { useEffect, useState } from "react";
import WebService from "./services/WebService";

export default function Items() {
    const [items, setItems] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await WebService.getCall(WebService.URLS.PRODUCTS);
        if (response.status) {
            setItems(response.data);
        }
        setMsg(response.msg);
    }
    return (
        <div className="items-list">
            <h2>Items</h2>
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
                    <thead>
                        <tr style={{ background: "#f3f4f6", textAlign: "left" }}>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Image</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Name</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>ID</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Category</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>MRP</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Price</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Discount</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Stock</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Quantity</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Status</th>
                            <th style={{ padding: 8, border: "1px solid #e5e7eb" }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => {
                            const imgSrc = `http://localhost:3000/${item.image}`;
                            return (
                                <tr key={item.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>
                                        <img
                                            src={`http://localhost:3000/${item.image}`}
                                            alt={item.name}
                                            style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 6 }}
                                        />
                                    </td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.name}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.id}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.category}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.markedPrice}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.sellPrice}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.discount}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.stock}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{item.quantity}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle" }}>{String(item.status)}</td>
                                    <td style={{ padding: 8, border: "1px solid #eee", verticalAlign: "middle", maxWidth: 300 }}>
                                        <div style={{ maxHeight: 120, overflow: "auto" }}>{item.description}</div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}