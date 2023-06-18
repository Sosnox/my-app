import React from "react";

export const Responses = ({ result }) => {
    console.log(result);

    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Experience</th>
                        <th className="px-4 py-2">Skills</th>
                        <th className="px-4 py-2">Education</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {result.map((applicant, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-4 py-2">{applicant.name}</td>
                            <td className="px-4 py-2">{applicant.experience}</td>
                            <td className="px-4 py-2">{applicant.skills}</td>
                            <td className="px-4 py-2">{applicant.education}</td>
                            <td className={`px-4 py-2 ${applicant.status === "Passed" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                                {applicant.status}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}