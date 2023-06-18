import React from "react";

export const Input = ({ Applicant, setApplicant }) => {
    const handleChange = (event) => {
        const { name, value } = event.target
        setApplicant(prevApplicant => ({ ...prevApplicant, [name]: value }));
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Name : </label>
                <input type="text"
                    placeholder="Inthat Sriphao"
                    name="name"
                    className="border rounded border-gray-300 py-2 px-3 w-full"
                    value={Applicant.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Experience (in year): </label>
                <input type="number"
                    placeholder="4"
                    name="experience"
                    className="border rounded border-gray-300 p-2 w-full"
                    value={Applicant.experience}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Skills : </label>
                <input type="text"
                    placeholder="SQL HTML CSS"
                    name="skills"
                    className="border rounded border-gray-300 p-2 w-full"
                    value={Applicant.skills}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold">Education : </label>
                <select className="border rounded border-gray-300 p-2 w-full"
                    placeholder="SQL HTML CSS"
                    name="education"
                    value={Applicant.education}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="PhD">PhD</option>
                </select>
            </div>
        </div>
    );
}