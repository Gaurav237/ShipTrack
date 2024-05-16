import React from 'react';

function Documents() {
    const documents = [
        { name: 'Packing List', date: '2024-01-01', id: 'Sea Job Document (IMF159075)' },
        { name: 'Commercial Invoice', date: '2024-01-02', id: 'Sea Job Document (IMF159075)' },
        { name: 'Bill of Lading', date: '2024-01-03', id: 'Sea Job Document (IMF159075)' },
        { name: 'Packing List', date: '2024-01-01', id: 'Sea Job Document (IMF158930)' },
        { name: 'Bill of Lading', date: '2024-01-03', id: 'Sea Job Document (IMF159065)' },
        { name: 'Bill of Lading', date: '2024-01-03', id: 'Sea Job Document (IMF159075)' },
        { name: 'Packing List', date: '2024-01-01', id: 'Sea Job Document (IMF158930)' },
        { name: 'Bill of Lading', date: '2024-01-03', id: 'Sea Job Document (IMF159065)' },
    ];

    return (
        <div className="w-1/2 mx-10 bg-white p-4 border border-gray-200 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Latest Documents</h2>
            <div className='h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300'>
            {documents.map((doc, index) => (
                <div key={index} className="flex justify-between items-center border-b py-2">
                    <div className="flex items-center">
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 19V5l12-2v14l-12-2zm0 0h12M4 15h4m0 0h4m-4 0H4m0 0V5l12 2v10"
                                />
                            </svg>
                        
                        <div>
                            <span className="font-bold">{doc.name}</span>
                            <p className="text-sm text-gray-500">{doc.id}</p>
                        </div>
                    </div>
                    <div className='px-2'>{doc.date}</div>
                </div>
            ))}
            </div>
            
        </div>
    );
}

export default Documents;
