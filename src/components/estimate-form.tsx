// "use client"

// import { useState } from "react"
// import {  Plus } from "lucide-react"

// export default function EstimateForm() {
//   const [estimates, setEstimates] = useState([

//     {
//       id: 1,
//       tasks: [
//         {
//           id: 1,
//           showTables: {
//             subcontractor: false,
//             labour: false,
//             material: false,
//           },
//           subcontractors: [{ name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" }],
//           labour: [{ hours: "", guys: "", manualEntry: "", markup: "" }],
//           materials: [{ unit: "", guys: "", tax: "", fee: "" }],
//         },
//       ],
//     },
//   ])

//   const addEstimate = () => {
//     const newEstimate = {
//       id: estimates.length + 1,
//       tasks: [
//         {
//           id: 1,
//           showTables: { subcontractor: false, labour: false, material: false },
//           subcontractors: [{ name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" }],
//           labour: [{ hours: "", guys: "", manualEntry: "", markup: "" }],
//           materials: [{ unit: "", guys: "", tax: "", fee: "" }],
//         },
//       ],
//     }
//     setEstimates([...estimates, newEstimate])
//   }

//   const addTask = (estimateIndex: number) => {
//     const updatedEstimates = [...estimates]
//     const estimate = updatedEstimates[estimateIndex]
//     estimate.tasks.push({
//       id: estimate.tasks.length + 1,
//       showTables: { subcontractor: false, labour: false, material: false },
//       subcontractors: [{ name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" }],
//       labour: [{ hours: "", guys: "", manualEntry: "", markup: "" }],
//       materials: [{ unit: "", guys: "", tax: "", fee: "" }],
//     })
//     setEstimates(updatedEstimates)
//   }

//   const toggleTable = (estimateIndex: number, taskIndex: number, table: 'subcontractor' | 'labour' | 'material') => {
//     const updatedEstimates = [...estimates]
//     updatedEstimates[estimateIndex].tasks[taskIndex].showTables[table] =
//       !updatedEstimates[estimateIndex].tasks[taskIndex].showTables[table]
//     setEstimates(updatedEstimates)
//   }
//   const addRow = (estimateIndex: number, taskIndex: number, table: string) => {
//     const updatedEstimates = [...estimates]
//     const task = updatedEstimates[estimateIndex].tasks[taskIndex]

//     if (table === "subcontractor") {
//       task.subcontractors.push({ name: "", unit: "", cost: "", tax: "", buffer: "", markup: "" })
//     } else if (table === "labour") {
//       task.labour.push({ hours: "", guys: "", manualEntry: "", markup: "" })
//     } else if (table === "material") {
//       task.materials.push({ unit: "", guys: "", tax: "", fee: "" })
//     }

//     setEstimates(updatedEstimates)
//   }

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar omitted for brevity */}
//       <div className="flex-1 p-4">
//         <div className="max-w-4xl mx-auto space-y-10">
//           {estimates.map((estimate, ei) => (
//             <div key={estimate.id} className="bg-white border border-gray-300 rounded-lg p-6">
//               <h2 className="text-xl font-semibold mb-4">Scope of Work {estimate.id}</h2>
//               {estimate.tasks.map((task, ti) => (
//                 <div key={task.id} className="mb-10 border p-4 rounded-md">
//                   <h3 className="font-medium text-lg mb-4">Task {task.id}</h3>

//                   {/* Subcontractor Table Toggle */}
//                   <div className="mb-2">
//                     <button onClick={() => toggleTable(ei, ti, "subcontractor")} className="text-sm text-blue-600">
//                       Toggle Sub Contractor Table
//                     </button>
//                   </div>

//                   {/* Subcontractor Table */}
//                   {task.showTables.subcontractor && (
//                     <div className="overflow-x-auto mb-4">
//                       <table className="w-full text-sm border border-gray-300">
//                         <thead>
//                           <tr className="bg-gray-100">
//                             <th>Name</th>
//                             <th>Unit</th>
//                             <th>Cost</th>
//                             <th>Sub Contractor Tax</th>
//                             <th>Buffer</th>
//                             <th>Markup Factor</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {task.subcontractors.map((row, ri) => (
//                             <tr key={ri} className="border-t">
//                               <td><input className="p-1 border" value={row.name} /></td>
//                               <td><input className="p-1 border" value={row.unit} /></td>
//                               <td><input className="p-1 border" value={row.cost} /></td>
//                               <td><input className="p-1 border" value={row.tax} /></td>
//                               <td><input className="p-1 border" value={row.buffer} /></td>
//                               <td><input className="p-1 border" value={row.markup} /></td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                       <button
//                         onClick={() => addRow(ei, ti, "subcontractor")}
//                         className="mt-2 text-sm text-green-600"
//                       >
//                         + Add Row
//                       </button>
//                     </div>
//                   )}

//                   {/* Repeat above for Labour and Material with different columns */}
//                 </div>
//               ))}

//               <button onClick={() => addTask(ei)} className="bg-black text-black px-4 py-2 rounded-md mb-6">
//                 Add Another Task <Plus className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           ))}

//           <div className="text-center">
//             <button onClick={addEstimate} className="bg-black text-black px-4 py-2 rounded-md">
//               Add Another Scope of Work <Plus className="w-4 h-4 ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// } 



"use client"

import { useState } from "react"


export default function EstimateForm() {
  const [estimates, setEstimates] = useState([
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
        <button onClick={addEstimate} className="bg-black text-white px-6 py-2 rounded">
          + Add Another Estimate
        </button>
      </div>
    </div>
  )}