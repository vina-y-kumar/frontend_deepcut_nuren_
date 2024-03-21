import React from 'react'
import './Addlead.css'
import { NavLink } from 'react-router-dom'
function AddLead() {
  return (
    <>
      <div className="header-menu">
        <NavLink className="header-item">Summary</NavLink>
        <NavLink className="header-item">Task List</NavLink>
        <NavLink className="header-item">Related</NavLink>
        {/* form */}
        {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <div className="bg-white p-10 rounded-lg shadow-lg w-96">
      <h1 className="text-3xl font-bold mb-4">Form Title</h1>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-gray-800 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter Title"
          />
        </div>
        <div>
          <label htmlFor="field1" className="block text-gray-800 font-bold mb-2">
            Field 1
          </label>
          <input
            type="text"
            id="field1"
            name="field1"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 1"
          />
        </div>
        <div>
          <label htmlFor="field2" className="block text-gray-800 font-bold mb-2">
            Field 2
          </label>
          <input
            type="text"
            id="field2"
            name="field2"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 2"
          />
        </div>
        <div>
          <label htmlFor="field3" className="block text-gray-800 font-bold mb-2">
            Field 3
          </label>
          <input
            type="text"
            id="field3"
            name="field3"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 3"
          />
        </div>
        <div>
          <label htmlFor="field4" className="block text-gray-800 font-bold mb-2">
            Field 4
          </label>
          <input
            type="text"
            id="field4"
            name="field4"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 4"
          />
        </div>
        <div>
          <label htmlFor="field5" className="block text-gray-800 font-bold mb-2">
            Field 5
          </label>
          <input
            type="text"
            id="field5"
            name="field5"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 5"
          />
        </div>
        <div>
          <label htmlFor="field6" className="block text-gray-800 font-bold mb-2">
            Field 6
          </label>
          <input
            type="text"
            id="field6"
            name="field6"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 6"
          />
        </div>
        <div>
          <label htmlFor="field7" className="block text-gray-800 font-bold mb-2">
            Field 7
          </label>
          <input
            type="text"
            id="field7"
            name="field7"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 7"
          />
        </div>
        <div>
          <label htmlFor="field8" className="block text-gray-800 font-bold mb-2">
            Field 8
          </label>
          <input
            type="text"
            id="field8"
            name="field8"
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Field 8"
          />
        </div>
      </form>
    </div>
  </div> */}
      </div>

    </>
  )
}

export default AddLead
