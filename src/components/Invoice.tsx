import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface InvoiceData {
  client: string;
  date: string;
  address: string;
  labour: {
    breakdown: string;
    amount: number;
  }[];
  materials: {
    name: string;
    quantity: number;
    unit: string;
    rate: number;
  }[];
}

const Invoice = ({ data }: { data: InvoiceData }) => {
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Invoice",
    content: () => printRef.current,
  });

  return (
    <div>
      <div ref={printRef} className="p-4 border rounded bg-white text-black">
        <h2 className="text-xl font-bold mb-2">Invoice</h2>
        <p>Client: {data.client}</p>
        <p>Date: {data.date}</p>
        <p>Address: {data.address}</p>

        <h3 className="mt-4 font-semibold">Labour</h3>
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border">Breakdown</th>
              <th className="border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.labour.map((item, i) => (
              <tr key={i}>
                <td className="border text-center">{item.breakdown}</td>
                <td className="border text-center">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="mt-4 font-semibold">Materials</h3>
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border">Name</th>
              <th className="border">Quantity</th>
              <th className="border">Unit</th>
              <th className="border">Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.materials.map((item: { name: string; quantity: number; unit: string; rate: number }, i) => (
              <tr key={i}>
                <td className="border text-center">{item.name}</td>
                <td className="border text-center">{item.quantity}</td>
                <td className="border text-center">{item.unit}</td>
                <td className="border text-center">{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => handlePrint()}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
};export default Invoice;