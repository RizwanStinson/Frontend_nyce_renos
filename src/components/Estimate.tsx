"use client";
import { useState } from "react";
import { IEstimate } from "../interfaces/types";
import { postEstimates } from "../services/estimateService";

export default function Estimate() {

    const [estimates, setEstimates] = useState<IEstimate[]>([
    {
      id: 1,
      description: "",
      tasks: [
        {
          id: 1,
          name: "",
          responsible1: "",
          responsible2: "",
          subcontractors: [
            { name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" },
          ],
          labour: [
            { hours: "", guys: "", entry: "", markup: "" },
          ],
          material: [
            { unit: "", guys: "", tax: "", delivery: "" },
          ]
        }
      ]
    }
])

const addEstimate = () => {
    setEstimates([
      ...estimates,
      {
        id: estimates.length + 1,
        description: "",
        tasks: [
          {
            id: 1,
            name: "",
            responsible1: "",
            responsible2: "",
            subcontractors: [
              { name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" },
            ],
            labour: [
              { hours: "", guys: "", entry: "", markup: "" },
            ],
            material: [
              { unit: "", guys: "", tax: "", delivery: "" },
            ]
          }
        ]
      }
    ])
  }

  const addTask = (ei: number) => {
    const updated = [...estimates]
    updated[ei].tasks.push({
      id: updated[ei].tasks.length + 1,
      name: "",
      responsible1: "",
      responsible2: "",
      subcontractors: [{ name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" }],
      labour: [{ hours: "", guys: "", entry: "", markup: "" }],
      material: [{ unit: "", guys: "", tax: "", delivery: "" }],
    })
    setEstimates(updated)
  }


   const addRow = (type: "subcontractors" | "labour" | "material", ei: number, ti: number) => {
    const updated = [...estimates]
    if (type === "subcontractors") {
      updated[ei].tasks[ti].subcontractors.push({ name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" })
    } else if (type === "labour") {
      updated[ei].tasks[ti].labour.push({ hours: "", guys: "", entry: "", markup: "" })
    } else {
      updated[ei].tasks[ti].material.push({ unit: "", guys: "", tax: "", delivery: "" })
    }
    setEstimates(updated)
  }

  console.log(estimates)


  const handleSubmit = async () => {
  try {
    const result = await postEstimates(estimates);
    console.log("Submitted successfully:", result);
  } catch (error) {
    console.log("Error submitting estimates:", error);
  }
};


return (
    <div className="p-6">
      {estimates.map((estimate, ei) => (
        <div key={ei} className="border rounded-lg mb-8">
          <div className="bg-gray-100 px-4 py-2 font-bold">Estimate {ei + 1}</div>
          <div className="p-4">
            <textarea
              className="w-full border p-2 mb-4"
              value={estimate.description}
              placeholder="Estimate description"
              onChange={(e) => {
                const updated = [...estimates]
                updated[ei].description = e.target.value
                setEstimates(updated)
              }}
            />

            {estimate.tasks.map((task, ti) => (
              <div key={ti} className="border rounded-md mb-6 p-4">
                <h3 className="font-semibold mb-2">Task {ti + 1}</h3>
                <input
                  className="border p-2 w-full mb-2"
                  placeholder="Task Name"
                  value={task.name}
                  onChange={(e) => {
                    const updated = [...estimates]
                    updated[ei].tasks[ti].name = e.target.value
                    setEstimates(updated)
                  }}
                />

                {/* Sub Contractor Table */}
                <h4 className="font-medium mt-4">Sub Contractor</h4>
                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th>Name</th><th>Unit</th><th>Cost</th><th>Tax</th><th>Buffer</th><th>Markup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {task.subcontractors.map((row, ri) => (
                      <tr key={ri}>
                        {Object.keys(row).map((key) => (
                          <td key={key}>
                            <input
                              className="border p-1 w-full"
                              value={row[key as keyof typeof row]}
                              onChange={(e) => {
                                const updated = [...estimates]
                                updated[ei].tasks[ti].subcontractors[ri][key as keyof typeof row] = e.target.value
                                setEstimates(updated)
                              }}                            />
                          </td>
                        ))}                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={() => addRow("subcontractors", ei, ti)}
                  className="text-sm mt-1 text-blue-500"
                >
                  + Add Row
                </button>

                {/* Labour Table */}
                <h4 className="font-medium mt-4">Labour</h4>
                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr><th>Hours</th><th>Guys</th><th>Manual Entry</th><th>Markup</th></tr>
                  </thead>
                  <tbody>
                    {task.labour.map((row, ri) => (
                      <tr key={ri}>
                        {Object.keys(row).map((key) => (
                          <td key={key}>
                            <input
                              className="border p-1 w-full"
                              value={row[key as keyof typeof row]}
                              onChange={(e) => {
                                const updated = [...estimates]
                                updated[ei].tasks[ti].labour[ri][key as keyof typeof row] = e.target.value
                                setEstimates(updated)
                              }}                            />
                          </td>
                        ))}                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={() => addRow("labour", ei, ti)}
                  className="text-sm mt-1 text-blue-500"
                >
                  + Add Row
                </button>

                {/* Material Table */}
                <h4 className="font-medium mt-4">Material</h4>
                <table className="w-full text-sm border">
                  <thead className="bg-gray-100">
                    <tr><th>Unit</th><th>Guys</th><th>Tax</th><th>Delivery</th></tr>
                  </thead>
                  <tbody>
                    {task.material.map((row, ri) => (
                      <tr key={ri}>
                        {Object.keys(row).map((key) => (
                          <td key={key}>
                            <input
                              className="border p-1 w-full"
                              value={row[key as keyof typeof row]}
                              onChange={(e) => {
                                const updated = [...estimates]
                                updated[ei].tasks[ti].material[ri][key as keyof typeof row] = e.target.value
                                setEstimates(updated)
                              }}                            />
                          </td>
                        ))}                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={() => addRow("material", ei, ti)}
                  className="text-sm mt-1 text-blue-500"
                >
                  + Add Row
                </button>
              </div>
            ))}
            <button onClick={() => addTask(ei)} className="bg-black text-black px-4 py-2 rounded">
              + Add Task
            </button>
          </div>
        </div>
      ))}

      <div className="text-center">
        <button onClick={addEstimate} className="bg-black text-black px-6 py-2 rounded">
          + Add Another Estimate
        </button>
      </div>
      <div className="text-center mt-4">
  <button
    onClick={handleSubmit}
    className="bg-green-600 text-black px-6 py-2 rounded"
  >
    Submit
  </button>
</div>

    </div>
  )

}
