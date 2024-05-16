import React from 'react';

const Table = () => {
  const data = Array(10).fill(
    { hbl: 'EGOSZX23050310', mbl: 'ZIMUSHH31044831', po: 'PO# MTD062214', receipt: 'YANTIAN, CHINA', loading: 'Jun 10, 2023', discharge: 'YANTIAN, CHINA', delivery: 'HOUSTON, TX, USA', booking: 'BROWNSVILLE, TX, USA', sizeType: 'IM150277-02', carrier: 'IM150277-02', commodity: 'IM150277-02', milestone: 'IM150277-02', milestoneGroup: 'IM150277-02' });

  return (
    <div className="flex flex-col items-center justify-center py-4 bg-white rounded-xl">
      <div className="w-full overflow-x-auto" style={{ maxHeight: '400px' }}>
        <table className="table-auto text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-2">HBL#</th>
              <th className="px-4 py-2">MBL#</th>
              <th className="px-4 py-2">PO# / REF#</th>
              <th className="px-4 py-2">Receipt</th>
              <th className="px-4 py-2">Loading</th>
              <th className="px-4 py-2">Discharge</th>
              <th className="px-4 py-2">Delivery</th>
              <th className="px-4 py-2">Booking#</th>
              <th className="px-4 py-2">Size Type</th>
              <th className="px-4 py-2">Carrier</th>
              <th className="px-4 py-2">Commodity</th>
              <th className="px-4 py-2">Milestone</th>
              <th className="px-4 py-2">Milestone Group</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border px-4 py-2">{row.hbl}</td>
                <td className="border px-4 py-2">{row.mbl}</td>
                <td className="border px-4 py-2">{row.po}</td>
                <td className="border px-4 py-2">{row.receipt}</td>
                <td className="border px-4 py-2">{row.loading}</td>
                <td className="border px-4 py-2">{row.discharge}</td>
                <td className="border px-4 py-2">{row.delivery}</td>
                <td className="border px-4 py-2">{row.booking}</td>
                <td className="border px-4 py-2">{row.sizeType}</td>
                <td className="border px-4 py-2">{row.carrier}</td>
                <td className="border px-4 py-2">{row.commodity}</td>
                <td className="border px-4 py-2">{row.milestone}</td>
                <td className="border px-4 py-2">{row.milestoneGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
